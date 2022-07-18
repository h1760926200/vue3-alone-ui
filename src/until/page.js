const initData = {
    page: 1,
    pageSize: 10,
    total: 0
}

const handlePage = (type, val, ctx, fn) => {
    if (ctx?.total === 0) return
    if (type === 'pageSize') {
        ctx.pageSize = val
    } else {
        ctx.page = val
    }
    fn?.()
}

export const usePage = init => {
    return [
        init || initData,
        handlePage
    ]
}