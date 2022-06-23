 
/**
 * 拖拽 table 的 th，返回拖拽信息
 */
 const formDrag = (app, options) => {
  app.directive('formdrag', {
    // 指令的定义
    mounted (el, binding) {
      // console.log('===== el', el)
      // console.log('===== binding', binding)

      /**
       * 实现 th 的拖拽
       * @param {string} className 用于找到目标的 class 名称。
       * @param {reactive} dragInfo reactive 返回拖拽信息。
       * @returns 没有返回
       * * const dragInfo = {
       * *  offsetX: 0,
       * *  isLeft: true, // th 左侧结束拖拽
       * *  ctrl: false, // 是否按下ctrl
       * *  source: '', // 开始拖拽的th
       * *  target: '', // 结束拖拽的th
       * *  sourceIndex: 0, // 开始拖拽的序号
       * *  targetIndex: 0 // 结束拖拽的序号
       * * })
       */
      const setFormforDrag = (className, dragInfo) => {
        const domForm = el.children[0].children
        console.log('内部表单：', domForm)

        const domLabel = domForm[0].children[0].children[0]
        console.log('内部Label：', domLabel)

        const labelCount = domForm.length
        // 记录 th 的序号和宽度
        const thIndex = {}
        // 记录临时的源
        let src1 = ''
        let src2 = 1
        // 设置th的拖拽
        for (let i = 0; i < labelCount; i++) {
          const label = domForm[i].children[0].children[0]
          thIndex[label.innerText] = {
            index: i, // 记录th的序号
            width: label.offsetWidth // 记录 th 的宽度
          }
          // 设置可以拖拽
          label.setAttribute('draggable', true)
          // 拖拽时经过
          label.ondragover = (event) => {
            event.preventDefault()
          }
          // 开始拖拽
          label.ondragstart = (event) => {
            // console.log('ondragstart - event', event)
            src1 = event.target.innerText
            src2 = thIndex[event.target.innerText].index
          }
          // 结束拖拽
          label.ondrop = (event) => {
            // console.log('ondrop - event', event)
            dragInfo.offsetX = event.offsetX
            dragInfo.ctrl = event.ctrlKey
            dragInfo.source = src1
            dragInfo.sourceIndex = src2
            dragInfo.target = event.target.innerText
            // console.log('ondrop - dragInfo', dragInfo)
            // 寻找th的序号
            dragInfo.targetIndex = thIndex[event.target.innerText].index
            dragInfo.isLeft = dragInfo.offsetX < thIndex[event.target.innerText].width / 2
          }
        }
      }

      binding.value.setFormforDrag = setFormforDrag
    }
  })
}

export default formDrag
