export interface ResponseData {
    // 标题
    title: string
    // 次数 ｜ 统计总数
    view: number | string
    // 地址
    url: string
    // 创建时间
    create_time: number
    // 封面
    thumbnail?: string
    // 描述
    description?: string
}
