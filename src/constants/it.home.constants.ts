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
}

export enum ItHomeListTypeEnum {
	day = 'day',
	week = 'week',
	month = 'month'
}

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
