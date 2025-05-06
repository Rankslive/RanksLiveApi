export const BiliBiliRank = {
	// 番剧
	anime: { name: '番剧', value: 1 },
	// 国创
	guochuang: { name: '国创', value: 4 },
	// 纪录片
	documentary: { name: '纪录片', value: 3 },
	// 电影
	movie: { name: '电影', value: 2 },
	// 电视剧
	tv: { name: '电视剧', value: 5 },
	// 综艺
	variety: { name: '综艺', value: 7 },
	// 动画
	douga: { name: '动画', value: 1005 },
	// 游戏
	game: { name: '游戏', value: 1008 },
	// 鬼畜
	kichiku: { name: '鬼畜', value: 1007 },
	// 音乐
	music: { name: '音乐', value: 1003 },
	// 舞蹈
	dance: { name: '舞蹈', value: 1004 },
	// 影视
	cinephile: { name: '影视', value: 1001 },
	// 娱乐
	ent: { name: '娱乐', value: 1002 },
	// 知识
	knowledge: { name: '知识', value: 1010 },
	// 科技数码
	tech: { name: '科技数码', value: 1012 },
	// 美食
	food: { name: '美食', value: 1020 },
	// 汽车
	car: { name: '汽车', value: 1013 },
	// 时尚美妆
	fashion: { name: '时尚美妆', value: 1014 },
	// 体育运动
	sports: { name: '体育运动', value: 1018 },
	// 动物
	animal: { name: '动物', value: 1024 }
} as const

export const useBaseRank = [
	'anime',
	'guochuang'
]

export const useSeasonRank = [
	'documentary',
	'movie',
	'tv',
	'variety'
]
