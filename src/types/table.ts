declare interface tableForm {
    title: string,
    key?: string,
    filters?: object,
    filterMultiple?: boolean,
    filterMethod?: Function,
    render?: Function,
    align?: string,
    width?: number,
    slot?: string,
}

declare interface pages {
    total: number,
    current: number,
    pageSize: number,
    pageNum: number,
}
