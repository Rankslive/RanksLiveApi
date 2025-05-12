export const ItHomeConstants = {
    read: {
        name: '阅读榜',
        type: 1
    },
    hot: {
        name: '最热榜',
        type: 2
    },
    grade: {
        name: '打分榜',
        type: 3
    }
} as const

export const ItHomeListRank = {
    day: { name: '日榜', value: 'day' },
    week: { name: '周榜', value: 'week' },
    month: { name: '月榜', value: 'month' }
} as const

export const ItHomeList = {
    day: [
        0,
        12
    ],
    week: [
        12,
        24
    ],
    month: [
        24,
        36
    ]
}
