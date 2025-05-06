export enum zhihuConstants {
	// 错过热议
	billboard_missed = 'billboard_missed',
	// 每周必看
	billboard_weekly = 'billboard_weekly'
}

export const zhihuPeriod = {
	// 小时榜
	hour: { name: '小时榜', value: 'hour' },
	// 日榜
	day: { name: '日榜', value: 'day' },
	// 周榜
	week: { name: '周榜', value: 'week' }
} as const

// 潜力问题排序
export const zhihuSort = {
	// 综合排序
	all: { name: '综合排序', value: 'all' },
	// 浏览增量
	pv_incr_rate: { name: '浏览增量', value: 'pv_incr_rate' },
	// 回答增量
	answer_incr_rate: { name: '回答增量', value: 'answer_incr_rate' }
} as const

// 知乎创作类型
export const zhihuCreatorDomain = {
	// 所有
	all: { name: '所有', value: '0' },
	// 宠物
	pet: { name: '宠物', value: '1000007' },
	// 动漫
	anime: { name: '动漫', value: '1000023' },
	// 法律
	law: { name: '法律', value: '1000019' },
	// 故事
	story: { name: '故事', value: '1000031' },
	// 家居生活
	home_life: { name: '家居生活', value: '1000003' },
	// 家用电器
	household_electric_appliances: { name: '家用电器', value: '1000032' },
	// 健康医学
	health: { name: '健康医学', value: '1000001' },
	// 教育
	education: { name: '教育', value: '1000022' },
	// 经济与管理
	economics_management: { name: '经济与管理', value: '1000012' },
	// 军事
	military_affairs: { name: '军事', value: '1000017' },
	// 科技互联网
	technology_internet: { name: '科技互联网', value: '1000013' },
	// 科学工程
	science_engineering: { name: '科学工程', value: '1000002' },
	// 旅行
	travel: { name: '旅行', value: '1000011' },
	// 美食
	food: { name: '美食', value: '1000006' },
	// 美妆个护
	beauty_makeup: { name: '美妆个护', value: '1000033' },
	// 时尚穿搭
	fashionable: { name: '时尚穿搭', value: '1000034' },
	// 汽车
	car: { name: '汽车', value: '1000005' },
	// 情感
	emotion: { name: '情感', value: '1000027' },
	// 人文
	humanity: { name: '人文', value: '1000021' },
	// 社会 / 时政
	social_current_affairs: { name: '社会 / 时政', value: '1000015' },
	// 社会学
	sociology: { name: '社会学', value: '1000016' },
	// 数码
	numerical: { name: '数码', value: '1000009' },
	// 体育竞技
	sports_competition: { name: '体育竞技', value: '1000025' },
	// 心理学
	psychology: { name: '心理学', value: '1000018' },
	// 母婴亲子
	mother_child: { name: '母婴亲子', value: '1000004' },
	// 艺术
	art: { name: '艺术', value: '1000020' },
	// 音乐
	music: { name: '音乐', value: '1000026' },
	// 影视
	video_tv: { name: '影视', value: '1000029' },
	// 游戏电竞
	gaming_esports: { name: '游戏电竞', value: '1000024' },
	// 娱乐
	entertainment: { name: '娱乐', value: '1000028' },
	// 运动健身
	sports_fitness: { name: '运动健身', value: '1000010' },
	// 职场
	workplace: { name: '职场', value: '1000014' }
} as const
