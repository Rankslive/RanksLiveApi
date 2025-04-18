import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { ZhihuService } from '@/modules/zhihu/zhihu.service'
import { zhihuConstants, zhihuCreatorDomainType, zhihuPeriodType, zhihuSortType } from '@/constants/zhihu.constants'

@Controller('zhihu')
@ApiTags('知乎')
export class ZhihuController {
	constructor(private readonly ZhihuService: ZhihuService) {}

	@Get('hot')
	@ApiOperation({ summary: '获取知乎热榜' })
	async getZhihuHot() {
		return await this.ZhihuService.getHotRankList()
	}

	@Get('miss/hot')
	@ApiOperation({ summary: '获取知乎错过热议' })
	async getZhihuMissHot() {
		return await this.ZhihuService.getZhihuNextRenderList(zhihuConstants.billboard_missed)
	}

	@Get('weekly')
	@ApiOperation({ summary: '获取知乎每周必看' })
	async getZhihuWeekly() {
		return await this.ZhihuService.getZhihuNextRenderList(zhihuConstants.billboard_weekly)
	}

	@Get('hot/question/all/hour')
	@ApiOperation({ summary: '获取知乎近期热点 · 综合 · 小时榜' })
	async getZhihuHotQuestionAllHour() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.all, zhihuPeriodType.hour)
	}

	@Get('hot/question/all/day')
	@ApiOperation({ summary: '获取知乎近期热点 · 综合 · 日榜' })
	async getZhihuHotQuestionAllDay() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.all, zhihuPeriodType.day)
	}

	@Get('hot/question/all/week')
	@ApiOperation({ summary: '获取知乎近期热点 · 综合 · 周榜' })
	async getZhihuHotQuestionAllWeek() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.all, zhihuPeriodType.week)
	}

	@Get('hot/question/pet/hour')
	@ApiOperation({ summary: '获取知乎近期热点 · 宠物 · 小时榜' })
	async getZhihuHotQuestionPetHour() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.pet, zhihuPeriodType.hour)
	}

	@Get('hot/question/pet/day')
	@ApiOperation({ summary: '获取知乎近期热点 · 宠物 · 日榜' })
	async getZhihuHotQuestionPetDay() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.pet, zhihuPeriodType.day)
	}

	@Get('hot/question/pet/week')
	@ApiOperation({ summary: '获取知乎近期热点 · 宠物 · 周榜' })
	async getZhihuHotQuestionPetWeek() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.pet, zhihuPeriodType.week)
	}

	@Get('hot/question/anime/hour')
	@ApiOperation({ summary: '获取知乎近期热点 · 动漫 · 小时榜' })
	async getZhihuHotQuestionAnimeHour() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.anime, zhihuPeriodType.hour)
	}

	@Get('hot/question/anime/day')
	@ApiOperation({ summary: '获取知乎近期热点 · 动漫 · 日榜' })
	async getZhihuHotQuestionAnimeDay() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.anime, zhihuPeriodType.day)
	}

	@Get('hot/question/anime/week')
	@ApiOperation({ summary: '获取知乎近期热点 · 动漫 · 周榜' })
	async getZhihuHotQuestionAnimeWeek() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.anime, zhihuPeriodType.week)
	}

	@Get('hot/question/law/hour')
	@ApiOperation({ summary: '获取知乎近期热点 · 法律 · 小时榜' })
	async getZhihuHotQuestionLawHour() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.law, zhihuPeriodType.hour)
	}

	@Get('hot/question/law/day')
	@ApiOperation({ summary: '获取知乎近期热点 · 法律 · 日榜' })
	async getZhihuHotQuestionLawDay() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.law, zhihuPeriodType.day)
	}

	@Get('hot/question/law/week')
	@ApiOperation({ summary: '获取知乎近期热点 · 法律 · 周榜' })
	async getZhihuHotQuestionLawWeek() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.law, zhihuPeriodType.week)
	}

	@Get('hot/question/story/hour')
	@ApiOperation({ summary: '获取知乎近期热点 · 故事 · 小时榜' })
	async getZhihuHotQuestionStoryHour() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.story, zhihuPeriodType.hour)
	}

	@Get('hot/question/story/day')
	@ApiOperation({ summary: '获取知乎近期热点 · 故事 · 日榜' })
	async getZhihuHotQuestionStoryDay() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.story, zhihuPeriodType.day)
	}

	@Get('hot/question/story/week')
	@ApiOperation({ summary: '获取知乎近期热点 · 故事 · 周榜' })
	async getZhihuHotQuestionStoryWeek() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.story, zhihuPeriodType.week)
	}

	@Get('hot/question/home/life/hour')
	@ApiOperation({ summary: '获取知乎近期热点 · 家居生活 · 小时榜' })
	async getZhihuHotQuestionHomeLifeHour() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.home_life, zhihuPeriodType.hour)
	}

	@Get('hot/question/home/life/day')
	@ApiOperation({ summary: '获取知乎近期热点 · 家居生活 · 日榜' })
	async getZhihuHotQuestionHomeLifeDay() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.home_life, zhihuPeriodType.day)
	}

	@Get('hot/question/home/life/week')
	@ApiOperation({ summary: '获取知乎近期热点 · 家居生活 · 周榜' })
	async getZhihuHotQuestionHomeLifeWeek() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.home_life, zhihuPeriodType.week)
	}

	@Get('hot/question/household/electric/appliances/hour')
	@ApiOperation({ summary: '获取知乎近期热点 · 家用电器 · 小时榜' })
	async getZhihuHotQuestionHouseholdElectricAppliancesHour() {
		return await this.ZhihuService.getZhihuCreatorRankList(
			zhihuCreatorDomainType.household_electric_appliances,
			zhihuPeriodType.hour
		)
	}

	@Get('hot/question/household/electric/appliances/day')
	@ApiOperation({ summary: '获取知乎近期热点 · 家用电器 · 日榜' })
	async getZhihuHotQuestionHouseholdElectricAppliancesDay() {
		return await this.ZhihuService.getZhihuCreatorRankList(
			zhihuCreatorDomainType.household_electric_appliances,
			zhihuPeriodType.day
		)
	}

	@Get('hot/question/household/electric/appliances/week')
	@ApiOperation({ summary: '获取知乎近期热点 · 家用电器 · 周榜' })
	async getZhihuHotQuestionHouseholdElectricAppliancesWeek() {
		return await this.ZhihuService.getZhihuCreatorRankList(
			zhihuCreatorDomainType.household_electric_appliances,
			zhihuPeriodType.week
		)
	}

	@Get('hot/question/health/hour')
	@ApiOperation({ summary: '获取知乎近期热点 · 健康医学 · 小时榜' })
	async getZhihuHotQuestionHealthHour() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.health, zhihuPeriodType.hour)
	}

	@Get('hot/question/health/day')
	@ApiOperation({ summary: '获取知乎近期热点 · 健康医学 · 日榜' })
	async getZhihuHotQuestionHealthDay() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.health, zhihuPeriodType.day)
	}

	@Get('hot/question/health/week')
	@ApiOperation({ summary: '获取知乎近期热点 · 健康医学 · 周榜' })
	async getZhihuHotQuestionHealthWeek() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.health, zhihuPeriodType.week)
	}

	@Get('hot/question/education/hour')
	@ApiOperation({ summary: '获取知乎近期热点 · 教育 · 小时榜' })
	async getZhihuHotQuestionEducationHour() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.education, zhihuPeriodType.hour)
	}

	@Get('hot/question/education/day')
	@ApiOperation({ summary: '获取知乎近期热点 · 教育 · 日榜' })
	async getZhihuHotQuestionEducationDay() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.education, zhihuPeriodType.day)
	}

	@Get('hot/question/education/week')
	@ApiOperation({ summary: '获取知乎近期热点 · 教育 · 周榜' })
	async getZhihuHotQuestionEducationWeek() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.education, zhihuPeriodType.week)
	}

	@Get('hot/question/economics/management/hour')
	@ApiOperation({ summary: '获取知乎近期热点 · 经济与管理 · 小时榜' })
	async getZhihuHotQuestionEconomicsManagementHour() {
		return await this.ZhihuService.getZhihuCreatorRankList(
			zhihuCreatorDomainType.economics_management,
			zhihuPeriodType.hour
		)
	}

	@Get('hot/question/economics/management/day')
	@ApiOperation({ summary: '获取知乎近期热点 · 经济与管理 · 日榜' })
	async getZhihuHotQuestionEconomicsManagementDay() {
		return await this.ZhihuService.getZhihuCreatorRankList(
			zhihuCreatorDomainType.economics_management,
			zhihuPeriodType.day
		)
	}

	@Get('hot/question/economics/management/week')
	@ApiOperation({ summary: '获取知乎近期热点 · 经济与管理 · 周榜' })
	async getZhihuHotQuestionEconomicsManagementWeek() {
		return await this.ZhihuService.getZhihuCreatorRankList(
			zhihuCreatorDomainType.economics_management,
			zhihuPeriodType.week
		)
	}

	@Get('hot/question/military/affairs/hour')
	@ApiOperation({ summary: '获取知乎近期热点 · 军事 · 小时榜' })
	async getZhihuHotQuestionMilitaryAffairsHour() {
		return await this.ZhihuService.getZhihuCreatorRankList(
			zhihuCreatorDomainType.military_affairs,
			zhihuPeriodType.hour
		)
	}

	@Get('hot/question/military/affairs/day')
	@ApiOperation({ summary: '获取知乎近期热点 · 军事 · 日榜' })
	async getZhihuHotQuestionMilitaryAffairsDay() {
		return await this.ZhihuService.getZhihuCreatorRankList(
			zhihuCreatorDomainType.military_affairs,
			zhihuPeriodType.day
		)
	}

	@Get('hot/question/military/affairs/week')
	@ApiOperation({ summary: '获取知乎近期热点 · 军事 · 周榜' })
	async getZhihuHotQuestionMilitaryAffairsWeek() {
		return await this.ZhihuService.getZhihuCreatorRankList(
			zhihuCreatorDomainType.military_affairs,
			zhihuPeriodType.week
		)
	}

	@Get('hot/question/technology/internet/hour')
	@ApiOperation({ summary: '获取知乎近期热点 · 科技互联网 · 小时榜' })
	async getZhihuHotQuestionTechnologyInternetHour() {
		return await this.ZhihuService.getZhihuCreatorRankList(
			zhihuCreatorDomainType.technology_internet,
			zhihuPeriodType.hour
		)
	}

	@Get('hot/question/technology/internet/day')
	@ApiOperation({ summary: '获取知乎近期热点 · 科技互联网 · 日榜' })
	async getZhihuHotQuestionTechnologyInternetDay() {
		return await this.ZhihuService.getZhihuCreatorRankList(
			zhihuCreatorDomainType.technology_internet,
			zhihuPeriodType.day
		)
	}

	@Get('hot/question/technology/internet/week')
	@ApiOperation({ summary: '获取知乎近期热点 · 科技互联网 · 周榜' })
	async getZhihuHotQuestionTechnologyInternetWeek() {
		return await this.ZhihuService.getZhihuCreatorRankList(
			zhihuCreatorDomainType.technology_internet,
			zhihuPeriodType.week
		)
	}

	@Get('hot/question/science/engineering/hour')
	@ApiOperation({ summary: '获取知乎近期热点 · 科学工程 · 小时榜' })
	async getZhihuHotQuestionScienceEngineeringHour() {
		return await this.ZhihuService.getZhihuCreatorRankList(
			zhihuCreatorDomainType.science_engineering,
			zhihuPeriodType.hour
		)
	}

	@Get('hot/question/science/engineering/day')
	@ApiOperation({ summary: '获取知乎近期热点 · 科学工程 · 日榜' })
	async getZhihuHotQuestionScienceEngineeringDay() {
		return await this.ZhihuService.getZhihuCreatorRankList(
			zhihuCreatorDomainType.science_engineering,
			zhihuPeriodType.day
		)
	}

	@Get('hot/question/science/engineering/week')
	@ApiOperation({ summary: '获取知乎近期热点 · 科学工程 · 周榜' })
	async getZhihuHotQuestionScienceEngineeringWeek() {
		return await this.ZhihuService.getZhihuCreatorRankList(
			zhihuCreatorDomainType.science_engineering,
			zhihuPeriodType.week
		)
	}

	@Get('hot/question/travel/hour')
	@ApiOperation({ summary: '获取知乎近期热点 · 旅行 · 小时榜' })
	async getZhihuHotQuestionTravelHour() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.travel, zhihuPeriodType.hour)
	}

	@Get('hot/question/travel/day')
	@ApiOperation({ summary: '获取知乎近期热点 · 旅行 · 日榜' })
	async getZhihuHotQuestionTravelDay() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.travel, zhihuPeriodType.day)
	}

	@Get('hot/question/travel/week')
	@ApiOperation({ summary: '获取知乎近期热点 · 旅行 · 周榜' })
	async getZhihuHotQuestionTravelWeek() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.travel, zhihuPeriodType.week)
	}

	@Get('hot/question/food/hour')
	@ApiOperation({ summary: '获取知乎近期热点 · 美食 · 小时榜' })
	async getZhihuHotQuestionFoodHour() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.food, zhihuPeriodType.hour)
	}

	@Get('hot/question/food/day')
	@ApiOperation({ summary: '获取知乎近期热点 · 美食 · 日榜' })
	async getZhihuHotQuestionFoodDay() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.food, zhihuPeriodType.day)
	}

	@Get('hot/question/food/week')
	@ApiOperation({ summary: '获取知乎近期热点 · 美食 · 周榜' })
	async getZhihuHotQuestionFoodWeek() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.food, zhihuPeriodType.week)
	}

	@Get('hot/question/beauty/makeup/hour')
	@ApiOperation({ summary: '获取知乎近期热点 · 美妆个护 · 小时榜' })
	async getZhihuHotQuestionBeautyMakeupHour() {
		return await this.ZhihuService.getZhihuCreatorRankList(
			zhihuCreatorDomainType.beauty_makeup,
			zhihuPeriodType.hour
		)
	}

	@Get('hot/question/beauty/makeup/day')
	@ApiOperation({ summary: '获取知乎近期热点 · 美妆个护 · 日榜' })
	async getZhihuHotQuestionBeautyMakeupDay() {
		return await this.ZhihuService.getZhihuCreatorRankList(
			zhihuCreatorDomainType.beauty_makeup,
			zhihuPeriodType.day
		)
	}

	@Get('hot/question/beauty/makeup/week')
	@ApiOperation({ summary: '获取知乎近期热点 · 美妆个护 · 周榜' })
	async getZhihuHotQuestionBeautyMakeupWeek() {
		return await this.ZhihuService.getZhihuCreatorRankList(
			zhihuCreatorDomainType.beauty_makeup,
			zhihuPeriodType.week
		)
	}

	@Get('hot/question/fashionable/hour')
	@ApiOperation({ summary: '获取知乎近期热点 · 时尚穿搭 · 小时榜' })
	async getZhihuHotQuestionFashionableHour() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.fashionable, zhihuPeriodType.hour)
	}

	@Get('hot/question/fashionable/day')
	@ApiOperation({ summary: '获取知乎近期热点 · 时尚穿搭 · 日榜' })
	async getZhihuHotQuestionFashionableDay() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.fashionable, zhihuPeriodType.day)
	}

	@Get('hot/question/fashionable/week')
	@ApiOperation({ summary: '获取知乎近期热点 · 时尚穿搭 · 周榜' })
	async getZhihuHotQuestionFashionableWeek() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.fashionable, zhihuPeriodType.week)
	}

	@Get('hot/question/car/hour')
	@ApiOperation({ summary: '获取知乎近期热点 · 汽车 · 小时榜' })
	async getZhihuHotQuestionCarHour() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.car, zhihuPeriodType.hour)
	}

	@Get('hot/question/car/day')
	@ApiOperation({ summary: '获取知乎近期热点 · 汽车 · 日榜' })
	async getZhihuHotQuestionCarDay() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.car, zhihuPeriodType.day)
	}

	@Get('hot/question/car/week')
	@ApiOperation({ summary: '获取知乎近期热点 · 汽车 · 周榜' })
	async getZhihuHotQuestionCarWeek() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.car, zhihuPeriodType.week)
	}

	@Get('hot/question/emotion/hour')
	@ApiOperation({ summary: '获取知乎近期热点 · 情感 · 小时榜' })
	async getZhihuHotQuestionEmotionHour() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.emotion, zhihuPeriodType.hour)
	}

	@Get('hot/question/emotion/day')
	@ApiOperation({ summary: '获取知乎近期热点 · 情感 · 日榜' })
	async getZhihuHotQuestionEmotionDay() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.emotion, zhihuPeriodType.day)
	}

	@Get('hot/question/emotion/week')
	@ApiOperation({ summary: '获取知乎近期热点 · 情感 · 周榜' })
	async getZhihuHotQuestionEmotionWeek() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.emotion, zhihuPeriodType.week)
	}

	@Get('hot/question/humanity/hour')
	@ApiOperation({ summary: '获取知乎近期热点 · 人文 · 小时榜' })
	async getZhihuHotQuestionHumanityHour() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.humanity, zhihuPeriodType.hour)
	}

	@Get('hot/question/humanity/day')
	@ApiOperation({ summary: '获取知乎近期热点 · 人文 · 日榜' })
	async getZhihuHotQuestionHumanityDay() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.humanity, zhihuPeriodType.day)
	}

	@Get('hot/question/humanity/week')
	@ApiOperation({ summary: '获取知乎近期热点 · 人文 · 周榜' })
	async getZhihuHotQuestionHumanityWeek() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.humanity, zhihuPeriodType.week)
	}

	@Get('hot/question/social/current/affairs/hour')
	@ApiOperation({ summary: '获取知乎近期热点 · 社会/时政 · 小时榜' })
	async getZhihuHotQuestionSocialCurrentAffairsHour() {
		return await this.ZhihuService.getZhihuCreatorRankList(
			zhihuCreatorDomainType.social_current_affairs,
			zhihuPeriodType.hour
		)
	}

	@Get('hot/question/social/current/affairs/day')
	@ApiOperation({ summary: '获取知乎近期热点 · 社会/时政 · 日榜' })
	async getZhihuHotQuestionSocialCurrentAffairsDay() {
		return await this.ZhihuService.getZhihuCreatorRankList(
			zhihuCreatorDomainType.social_current_affairs,
			zhihuPeriodType.day
		)
	}

	@Get('hot/question/social/current/affairs/week')
	@ApiOperation({ summary: '获取知乎近期热点 · 社会/时政 · 周榜' })
	async getZhihuHotQuestionSocialCurrentAffairsWeek() {
		return await this.ZhihuService.getZhihuCreatorRankList(
			zhihuCreatorDomainType.social_current_affairs,
			zhihuPeriodType.week
		)
	}

	@Get('hot/question/sociology/hour')
	@ApiOperation({ summary: '获取知乎近期热点 · 社会学 · 小时榜' })
	async getZhihuHotQuestionSociologyHour() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.sociology, zhihuPeriodType.hour)
	}

	@Get('hot/question/sociology/day')
	@ApiOperation({ summary: '获取知乎近期热点 · 社会学 · 日榜' })
	async getZhihuHotQuestionSociologyDay() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.sociology, zhihuPeriodType.day)
	}

	@Get('hot/question/sociology/week')
	@ApiOperation({ summary: '获取知乎近期热点 · 社会学 · 周榜' })
	async getZhihuHotQuestionSociologyWeek() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.sociology, zhihuPeriodType.week)
	}

	@Get('hot/question/numerical/hour')
	@ApiOperation({ summary: '获取知乎近期热点 · 数码 · 小时榜' })
	async getZhihuHotQuestionNumericalHour() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.numerical, zhihuPeriodType.hour)
	}

	@Get('hot/question/numerical/day')
	@ApiOperation({ summary: '获取知乎近期热点 · 数码 · 日榜' })
	async getZhihuHotQuestionNumericalDay() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.numerical, zhihuPeriodType.day)
	}

	@Get('hot/question/numerical/week')
	@ApiOperation({ summary: '获取知乎近期热点 · 数码 · 周榜' })
	async getZhihuHotQuestionNumericalWeek() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.numerical, zhihuPeriodType.week)
	}

	@Get('hot/question/sports/competition/hour')
	@ApiOperation({ summary: '获取知乎近期热点 · 体育竞技 · 小时榜' })
	async getZhihuHotQuestionSportsCompetitionHour() {
		return await this.ZhihuService.getZhihuCreatorRankList(
			zhihuCreatorDomainType.sports_competition,
			zhihuPeriodType.hour
		)
	}

	@Get('hot/question/sports/competition/day')
	@ApiOperation({ summary: '获取知乎近期热点 · 体育竞技 · 日榜' })
	async getZhihuHotQuestionSportsCompetitionDay() {
		return await this.ZhihuService.getZhihuCreatorRankList(
			zhihuCreatorDomainType.sports_competition,
			zhihuPeriodType.day
		)
	}

	@Get('hot/question/sports/competition/week')
	@ApiOperation({ summary: '获取知乎近期热点 · 体育竞技 · 周榜' })
	async getZhihuHotQuestionSportsCompetitionWeek() {
		return await this.ZhihuService.getZhihuCreatorRankList(
			zhihuCreatorDomainType.sports_competition,
			zhihuPeriodType.week
		)
	}

	@Get('hot/question/psychology/hour')
	@ApiOperation({ summary: '获取知乎近期热点 · 心理学 · 小时榜' })
	async getZhihuHotQuestionPsychologyHour() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.psychology, zhihuPeriodType.hour)
	}

	@Get('hot/question/psychology/day')
	@ApiOperation({ summary: '获取知乎近期热点 · 心理学 · 日榜' })
	async getZhihuHotQuestionPsychologyDay() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.psychology, zhihuPeriodType.day)
	}

	@Get('hot/question/psychology/week')
	@ApiOperation({ summary: '获取知乎近期热点 · 心理学 · 周榜' })
	async getZhihuHotQuestionPsychologyWeek() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.psychology, zhihuPeriodType.week)
	}

	@Get('hot/question/mother/child/hour')
	@ApiOperation({ summary: '获取知乎近期热点 · 母婴亲子 · 小时榜' })
	async getZhihuHotQuestionMotherChildHour() {
		return await this.ZhihuService.getZhihuCreatorRankList(
			zhihuCreatorDomainType.mother_child,
			zhihuPeriodType.hour
		)
	}

	@Get('hot/question/mother/child/day')
	@ApiOperation({ summary: '获取知乎近期热点 · 母婴亲子 · 日榜' })
	async getZhihuHotQuestionMotherChildDay() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.mother_child, zhihuPeriodType.day)
	}

	@Get('hot/question/mother/child/week')
	@ApiOperation({ summary: '获取知乎近期热点 · 母婴亲子 · 周榜' })
	async getZhihuHotQuestionMotherChildWeek() {
		return await this.ZhihuService.getZhihuCreatorRankList(
			zhihuCreatorDomainType.mother_child,
			zhihuPeriodType.week
		)
	}

	@Get('hot/question/art/hour')
	@ApiOperation({ summary: '获取知乎近期热点 · 艺术 · 小时榜' })
	async getZhihuHotQuestionArtHour() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.art, zhihuPeriodType.hour)
	}

	@Get('hot/question/art/day')
	@ApiOperation({ summary: '获取知乎近期热点 · 艺术 · 日榜' })
	async getZhihuHotQuestionArtDay() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.art, zhihuPeriodType.day)
	}

	@Get('hot/question/art/week')
	@ApiOperation({ summary: '获取知乎近期热点 · 艺术 · 周榜' })
	async getZhihuHotQuestionArtWeek() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.art, zhihuPeriodType.week)
	}

	@Get('hot/question/music/hour')
	@ApiOperation({ summary: '获取知乎近期热点 · 音乐 · 小时榜' })
	async getZhihuHotQuestionMusicHour() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.music, zhihuPeriodType.hour)
	}

	@Get('hot/question/music/day')
	@ApiOperation({ summary: '获取知乎近期热点 · 音乐 · 日榜' })
	async getZhihuHotQuestionMusicDay() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.music, zhihuPeriodType.day)
	}

	@Get('hot/question/music/week')
	@ApiOperation({ summary: '获取知乎近期热点 · 音乐 · 周榜' })
	async getZhihuHotQuestionMusicWeek() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.music, zhihuPeriodType.week)
	}

	@Get('hot/question/video/tv/hour')
	@ApiOperation({ summary: '获取知乎近期热点 · 影视 · 小时榜' })
	async getZhihuHotQuestionVideoTvHour() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.video_tv, zhihuPeriodType.hour)
	}

	@Get('hot/question/video/tv/day')
	@ApiOperation({ summary: '获取知乎近期热点 · 影视 · 日榜' })
	async getZhihuHotQuestionVideoTvDay() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.video_tv, zhihuPeriodType.day)
	}

	@Get('hot/question/video/tv/week')
	@ApiOperation({ summary: '获取知乎近期热点 · 影视 · 周榜' })
	async getZhihuHotQuestionVideoTvWeek() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.video_tv, zhihuPeriodType.week)
	}

	@Get('hot/question/gaming/esports/hour')
	@ApiOperation({ summary: '获取知乎近期热点 · 游戏电竞 · 小时榜' })
	async getZhihuHotQuestionGamingEsportsHour() {
		return await this.ZhihuService.getZhihuCreatorRankList(
			zhihuCreatorDomainType.gaming_esports,
			zhihuPeriodType.hour
		)
	}

	@Get('hot/question/gaming/esports/day')
	@ApiOperation({ summary: '获取知乎近期热点 · 游戏电竞 · 日榜' })
	async getZhihuHotQuestionGamingEsportsDay() {
		return await this.ZhihuService.getZhihuCreatorRankList(
			zhihuCreatorDomainType.gaming_esports,
			zhihuPeriodType.day
		)
	}

	@Get('hot/question/gaming/esports/week')
	@ApiOperation({ summary: '获取知乎近期热点 · 游戏电竞 · 周榜' })
	async getZhihuHotQuestionGamingEsportsWeek() {
		return await this.ZhihuService.getZhihuCreatorRankList(
			zhihuCreatorDomainType.gaming_esports,
			zhihuPeriodType.week
		)
	}

	@Get('hot/question/entertainment/hour')
	@ApiOperation({ summary: '获取知乎近期热点 · 娱乐 · 小时榜' })
	async getZhihuHotQuestionEntertainmentHour() {
		return await this.ZhihuService.getZhihuCreatorRankList(
			zhihuCreatorDomainType.entertainment,
			zhihuPeriodType.hour
		)
	}

	@Get('hot/question/entertainment/day')
	@ApiOperation({ summary: '获取知乎近期热点 · 娱乐 · 日榜' })
	async getZhihuHotQuestionEntertainmentDay() {
		return await this.ZhihuService.getZhihuCreatorRankList(
			zhihuCreatorDomainType.entertainment,
			zhihuPeriodType.day
		)
	}

	@Get('hot/question/entertainment/week')
	@ApiOperation({ summary: '获取知乎近期热点 · 娱乐 · 周榜' })
	async getZhihuHotQuestionEntertainmentWeek() {
		return await this.ZhihuService.getZhihuCreatorRankList(
			zhihuCreatorDomainType.entertainment,
			zhihuPeriodType.week
		)
	}

	@Get('hot/question/sports/fitness/hour')
	@ApiOperation({ summary: '获取知乎近期热点 · 运动健身 · 小时榜' })
	async getZhihuHotQuestionSportsFitnessHour() {
		return await this.ZhihuService.getZhihuCreatorRankList(
			zhihuCreatorDomainType.sports_fitness,
			zhihuPeriodType.hour
		)
	}

	@Get('hot/question/sports/fitness/day')
	@ApiOperation({ summary: '获取知乎近期热点 · 运动健身 · 日榜' })
	async getZhihuHotQuestionSportsFitnessDay() {
		return await this.ZhihuService.getZhihuCreatorRankList(
			zhihuCreatorDomainType.sports_fitness,
			zhihuPeriodType.day
		)
	}

	@Get('hot/question/sports/fitness/week')
	@ApiOperation({ summary: '获取知乎近期热点 · 运动健身 · 周榜' })
	async getZhihuHotQuestionSportsFitnessWeek() {
		return await this.ZhihuService.getZhihuCreatorRankList(
			zhihuCreatorDomainType.sports_fitness,
			zhihuPeriodType.week
		)
	}

	@Get('hot/question/workplace/hour')
	@ApiOperation({ summary: '获取知乎近期热点 · 职场 · 小时榜' })
	async getZhihuHotQuestionWorkplaceHour() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.workplace, zhihuPeriodType.hour)
	}

	@Get('hot/question/workplace/day')
	@ApiOperation({ summary: '获取知乎近期热点 · 职场 · 日榜' })
	async getZhihuHotQuestionWorkplaceDay() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.workplace, zhihuPeriodType.day)
	}

	@Get('hot/question/workplace/week')
	@ApiOperation({ summary: '获取知乎近期热点 · 职场 · 周榜' })
	async getZhihuHotQuestionWorkplaceWeek() {
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomainType.workplace, zhihuPeriodType.week)
	}

	// ===========

	@Get('potential/question/all')
	@ApiOperation({ summary: '获取知乎潜力问题 · 综合' })
	async getZhihuPotentialQuestionAll() {
		return await this.ZhihuService.getZhihuPotentialRankList(zhihuCreatorDomainType.all, zhihuSortType.all)
	}

	@Get('potential/question/all/view')
	@ApiOperation({ summary: '获取知乎潜力问题 · 综合 · 浏览增量' })
	async getZhihuPotentialQuestionAllView() {
		return await this.ZhihuService.getZhihuPotentialRankList(zhihuCreatorDomainType.all, zhihuSortType.pv_incr_rate)
	}

	@Get('potential/question/all/answer')
	@ApiOperation({ summary: '获取知乎潜力问题 · 综合 · 回答增量' })
	async getZhihuPotentialQuestionAllAnswer() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.all,
			zhihuSortType.answer_incr_rate
		)
	}

	@Get('potential/question/pet')
	@ApiOperation({ summary: '获取知乎潜力问题 · 宠物' })
	async getZhihuPotentialQuestionPet() {
		return await this.ZhihuService.getZhihuPotentialRankList(zhihuCreatorDomainType.pet, zhihuSortType.all)
	}

	@Get('potential/question/pet/view')
	@ApiOperation({ summary: '获取知乎潜力问题 · 宠物 · 浏览增量' })
	async getZhihuPotentialQuestionPetView() {
		return await this.ZhihuService.getZhihuPotentialRankList(zhihuCreatorDomainType.pet, zhihuSortType.pv_incr_rate)
	}

	@Get('potential/question/pet/answer')
	@ApiOperation({ summary: '获取知乎潜力问题 · 宠物 · 回答增量' })
	async getZhihuPotentialQuestionPetAnswer() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.pet,
			zhihuSortType.answer_incr_rate
		)
	}

	@Get('potential/question/anime')
	@ApiOperation({ summary: '获取知乎潜力问题 · 动漫' })
	async getZhihuPotentialQuestionAnime() {
		return await this.ZhihuService.getZhihuPotentialRankList(zhihuCreatorDomainType.anime, zhihuSortType.all)
	}

	@Get('potential/question/anime/view')
	@ApiOperation({ summary: '获取知乎潜力问题 · 动漫 · 浏览增量' })
	async getZhihuPotentialQuestionAnimeView() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.anime,
			zhihuSortType.pv_incr_rate
		)
	}

	@Get('potential/question/anime/answer')
	@ApiOperation({ summary: '获取知乎潜力问题 · 动漫 · 回答增量' })
	async getZhihuPotentialQuestionAnimeAnswer() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.anime,
			zhihuSortType.answer_incr_rate
		)
	}

	@Get('potential/question/law')
	@ApiOperation({ summary: '获取知乎潜力问题 · 法律' })
	async getZhihuPotentialQuestionLaw() {
		return await this.ZhihuService.getZhihuPotentialRankList(zhihuCreatorDomainType.law, zhihuSortType.all)
	}

	@Get('potential/question/law/view')
	@ApiOperation({ summary: '获取知乎潜力问题 · 法律 · 浏览增量' })
	async getZhihuPotentialQuestionLawView() {
		return await this.ZhihuService.getZhihuPotentialRankList(zhihuCreatorDomainType.law, zhihuSortType.pv_incr_rate)
	}

	@Get('potential/question/law/answer')
	@ApiOperation({ summary: '获取知乎潜力问题 · 法律 · 回答增量' })
	async getZhihuPotentialQuestionLawAnswer() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.law,
			zhihuSortType.answer_incr_rate
		)
	}

	@Get('potential/question/story')
	@ApiOperation({ summary: '获取知乎潜力问题 · 故事' })
	async getZhihuPotentialQuestionStory() {
		return await this.ZhihuService.getZhihuPotentialRankList(zhihuCreatorDomainType.story, zhihuSortType.all)
	}

	@Get('potential/question/story/view')
	@ApiOperation({ summary: '获取知乎潜力问题 · 故事 · 浏览增量' })
	async getZhihuPotentialQuestionStoryView() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.story,
			zhihuSortType.pv_incr_rate
		)
	}

	@Get('potential/question/story/answer')
	@ApiOperation({ summary: '获取知乎潜力问题 · 故事 · 回答增量' })
	async getZhihuPotentialQuestionStoryAnswer() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.story,
			zhihuSortType.answer_incr_rate
		)
	}

	@Get('potential/question/home/life')
	@ApiOperation({ summary: '获取知乎潜力问题 · 家居生活' })
	async getZhihuPotentialQuestionHomeLife() {
		return await this.ZhihuService.getZhihuPotentialRankList(zhihuCreatorDomainType.home_life, zhihuSortType.all)
	}

	@Get('potential/question/home/life/view')
	@ApiOperation({ summary: '获取知乎潜力问题 · 家居生活 · 浏览增量' })
	async getZhihuPotentialQuestionHomeLifeView() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.home_life,
			zhihuSortType.pv_incr_rate
		)
	}

	@Get('potential/question/home/life/answer')
	@ApiOperation({ summary: '获取知乎潜力问题 · 家居生活 · 回答增量' })
	async getZhihuPotentialQuestionHomeLifeAnswer() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.home_life,
			zhihuSortType.answer_incr_rate
		)
	}

	@Get('potential/question/household/electric/appliances')
	@ApiOperation({ summary: '获取知乎潜力问题 · 家用电器' })
	async getZhihuPotentialQuestionHouseholdElectricAppliances() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.household_electric_appliances,
			zhihuSortType.all
		)
	}

	@Get('potential/question/household/electric/appliances/view')
	@ApiOperation({ summary: '获取知乎潜力问题 · 家用电器 · 浏览增量' })
	async getZhihuPotentialQuestionHouseholdElectricAppliancesView() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.household_electric_appliances,
			zhihuSortType.pv_incr_rate
		)
	}

	@Get('potential/question/household/electric/appliances/answer')
	@ApiOperation({ summary: '获取知乎潜力问题 · 家用电器 · 回答增量' })
	async getZhihuPotentialQuestionHouseholdElectricAppliancesAnswer() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.household_electric_appliances,
			zhihuSortType.answer_incr_rate
		)
	}

	@Get('potential/question/health')
	@ApiOperation({ summary: '获取知乎潜力问题 · 健康医学' })
	async getZhihuPotentialQuestionHealth() {
		return await this.ZhihuService.getZhihuPotentialRankList(zhihuCreatorDomainType.health, zhihuSortType.all)
	}

	@Get('potential/question/health/view')
	@ApiOperation({ summary: '获取知乎潜力问题 · 健康医学 · 浏览增量' })
	async getZhihuPotentialQuestionHealthView() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.health,
			zhihuSortType.pv_incr_rate
		)
	}

	@Get('potential/question/health/answer')
	@ApiOperation({ summary: '获取知乎潜力问题 · 健康医学 · 回答增量' })
	async getZhihuPotentialQuestionHealthAnswer() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.health,
			zhihuSortType.answer_incr_rate
		)
	}

	@Get('potential/question/education')
	@ApiOperation({ summary: '获取知乎潜力问题 · 教育' })
	async getZhihuPotentialQuestionEducation() {
		return await this.ZhihuService.getZhihuPotentialRankList(zhihuCreatorDomainType.education, zhihuSortType.all)
	}

	@Get('potential/question/education/view')
	@ApiOperation({ summary: '获取知乎潜力问题 · 教育 · 浏览增量' })
	async getZhihuPotentialQuestionEducationView() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.education,
			zhihuSortType.pv_incr_rate
		)
	}

	@Get('potential/question/education/answer')
	@ApiOperation({ summary: '获取知乎潜力问题 · 教育 · 回答增量' })
	async getZhihuPotentialQuestionEducationAnswer() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.education,
			zhihuSortType.answer_incr_rate
		)
	}

	@Get('potential/question/economics/management')
	@ApiOperation({ summary: '获取知乎潜力问题 · 经济与管理' })
	async getZhihuPotentialQuestionEconomicsManagement() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.economics_management,
			zhihuSortType.all
		)
	}

	@Get('potential/question/economics/management/view')
	@ApiOperation({ summary: '获取知乎潜力问题 · 经济与管理 · 浏览增量' })
	async getZhihuPotentialQuestionEconomicsManagementView() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.economics_management,
			zhihuSortType.pv_incr_rate
		)
	}

	@Get('potential/question/economics/management/answer')
	@ApiOperation({ summary: '获取知乎潜力问题 · 经济与管理 · 回答增量' })
	async getZhihuPotentialQuestionEconomicsManagementAnswer() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.economics_management,
			zhihuSortType.answer_incr_rate
		)
	}

	@Get('potential/question/military/affairs')
	@ApiOperation({ summary: '获取知乎潜力问题 · 军事' })
	async getZhihuPotentialQuestionMilitaryAffairs() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.military_affairs,
			zhihuSortType.all
		)
	}

	@Get('potential/question/military/affairs/view')
	@ApiOperation({ summary: '获取知乎潜力问题 · 军事 · 浏览增量' })
	async getZhihuPotentialQuestionMilitaryAffairsView() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.military_affairs,
			zhihuSortType.pv_incr_rate
		)
	}

	@Get('potential/question/military/affairs/answer')
	@ApiOperation({ summary: '获取知乎潜力问题 · 军事 · 回答增量' })
	async getZhihuPotentialQuestionMilitaryAffairsAnswer() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.military_affairs,
			zhihuSortType.answer_incr_rate
		)
	}

	@Get('potential/question/technology/internet')
	@ApiOperation({ summary: '获取知乎潜力问题 · 科技互联网' })
	async getZhihuPotentialQuestionTechnologyInternet() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.technology_internet,
			zhihuSortType.all
		)
	}

	@Get('potential/question/technology/internet/view')
	@ApiOperation({ summary: '获取知乎潜力问题 · 科技互联网 · 浏览增量' })
	async getZhihuPotentialQuestionTechnologyInternetView() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.technology_internet,
			zhihuSortType.pv_incr_rate
		)
	}

	@Get('potential/question/technology/internet/answer')
	@ApiOperation({ summary: '获取知乎潜力问题 · 科技互联网 · 回答增量' })
	async getZhihuPotentialQuestionTechnologyInternetAnswer() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.technology_internet,
			zhihuSortType.answer_incr_rate
		)
	}

	@Get('potential/question/science/engineering')
	@ApiOperation({ summary: '获取知乎潜力问题 · 科学工程' })
	async getZhihuPotentialQuestionScienceEngineering() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.science_engineering,
			zhihuSortType.all
		)
	}

	@Get('potential/question/science/engineering/view')
	@ApiOperation({ summary: '获取知乎潜力问题 · 科学工程 · 浏览增量' })
	async getZhihuPotentialQuestionScienceEngineeringView() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.science_engineering,
			zhihuSortType.pv_incr_rate
		)
	}

	@Get('potential/question/science/engineering/answer')
	@ApiOperation({ summary: '获取知乎潜力问题 · 科学工程 · 回答增量' })
	async getZhihuPotentialQuestionScienceEngineeringAnswer() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.science_engineering,
			zhihuSortType.answer_incr_rate
		)
	}

	@Get('potential/question/travel')
	@ApiOperation({ summary: '获取知乎潜力问题 · 旅行' })
	async getZhihuPotentialQuestionTravel() {
		return await this.ZhihuService.getZhihuPotentialRankList(zhihuCreatorDomainType.travel, zhihuSortType.all)
	}

	@Get('potential/question/travel/view')
	@ApiOperation({ summary: '获取知乎潜力问题 · 旅行 · 浏览增量' })
	async getZhihuPotentialQuestionTravelView() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.travel,
			zhihuSortType.pv_incr_rate
		)
	}

	@Get('potential/question/travel/answer')
	@ApiOperation({ summary: '获取知乎潜力问题 · 旅行 · 回答增量' })
	async getZhihuPotentialQuestionTravelAnswer() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.travel,
			zhihuSortType.answer_incr_rate
		)
	}

	@Get('potential/question/food')
	@ApiOperation({ summary: '获取知乎潜力问题 · 美食' })
	async getZhihuPotentialQuestionFood() {
		return await this.ZhihuService.getZhihuPotentialRankList(zhihuCreatorDomainType.food, zhihuSortType.all)
	}

	@Get('potential/question/food/view')
	@ApiOperation({ summary: '获取知乎潜力问题 · 美食 · 浏览增量' })
	async getZhihuPotentialQuestionFoodView() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.food,
			zhihuSortType.pv_incr_rate
		)
	}

	@Get('potential/question/food/answer')
	@ApiOperation({ summary: '获取知乎潜力问题 · 美食 · 回答增量' })
	async getZhihuPotentialQuestionFoodAnswer() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.food,
			zhihuSortType.answer_incr_rate
		)
	}

	@Get('potential/question/beauty/makeup')
	@ApiOperation({ summary: '获取知乎潜力问题 · 美妆个护' })
	async getZhihuPotentialQuestionBeautyMakeup() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.beauty_makeup,
			zhihuSortType.all
		)
	}

	@Get('potential/question/beauty/makeup/view')
	@ApiOperation({ summary: '获取知乎潜力问题 · 美妆个护 · 浏览增量' })
	async getZhihuPotentialQuestionBeautyMakeupView() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.beauty_makeup,
			zhihuSortType.pv_incr_rate
		)
	}

	@Get('potential/question/beauty/makeup/answer')
	@ApiOperation({ summary: '获取知乎潜力问题 · 美妆个护 · 回答增量' })
	async getZhihuPotentialQuestionBeautyMakeupAnswer() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.beauty_makeup,
			zhihuSortType.answer_incr_rate
		)
	}

	@Get('potential/question/fashionable')
	@ApiOperation({ summary: '获取知乎潜力问题 · 时尚穿搭' })
	async getZhihuPotentialQuestionFashionable() {
		return await this.ZhihuService.getZhihuPotentialRankList(zhihuCreatorDomainType.fashionable, zhihuSortType.all)
	}

	@Get('potential/question/fashionable/view')
	@ApiOperation({ summary: '获取知乎潜力问题 · 时尚穿搭 · 浏览增量' })
	async getZhihuPotentialQuestionFashionableView() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.fashionable,
			zhihuSortType.pv_incr_rate
		)
	}

	@Get('potential/question/fashionable/answer')
	@ApiOperation({ summary: '获取知乎潜力问题 · 时尚穿搭 · 回答增量' })
	async getZhihuPotentialQuestionFashionableAnswer() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.fashionable,
			zhihuSortType.answer_incr_rate
		)
	}

	@Get('potential/question/car')
	@ApiOperation({ summary: '获取知乎潜力问题 · 汽车' })
	async getZhihuPotentialQuestionCar() {
		return await this.ZhihuService.getZhihuPotentialRankList(zhihuCreatorDomainType.car, zhihuSortType.all)
	}

	@Get('potential/question/car/view')
	@ApiOperation({ summary: '获取知乎潜力问题 · 汽车 · 浏览增量' })
	async getZhihuPotentialQuestionCarView() {
		return await this.ZhihuService.getZhihuPotentialRankList(zhihuCreatorDomainType.car, zhihuSortType.pv_incr_rate)
	}

	@Get('potential/question/car/answer')
	@ApiOperation({ summary: '获取知乎潜力问题 · 汽车 · 回答增量' })
	async getZhihuPotentialQuestionCarAnswer() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.car,
			zhihuSortType.answer_incr_rate
		)
	}

	@Get('potential/question/emotion')
	@ApiOperation({ summary: '获取知乎潜力问题 · 情感' })
	async getZhihuPotentialQuestionEmotion() {
		return await this.ZhihuService.getZhihuPotentialRankList(zhihuCreatorDomainType.emotion, zhihuSortType.all)
	}

	@Get('potential/question/emotion/view')
	@ApiOperation({ summary: '获取知乎潜力问题 · 情感 · 浏览增量' })
	async getZhihuPotentialQuestionEmotionView() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.emotion,
			zhihuSortType.pv_incr_rate
		)
	}

	@Get('potential/question/emotion/answer')
	@ApiOperation({ summary: '获取知乎潜力问题 · 情感 · 回答增量' })
	async getZhihuPotentialQuestionEmotionAnswer() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.emotion,
			zhihuSortType.answer_incr_rate
		)
	}

	@Get('potential/question/humanity')
	@ApiOperation({ summary: '获取知乎潜力问题 · 人文' })
	async getZhihuPotentialQuestionHumanity() {
		return await this.ZhihuService.getZhihuPotentialRankList(zhihuCreatorDomainType.humanity, zhihuSortType.all)
	}

	@Get('potential/question/humanity/view')
	@ApiOperation({ summary: '获取知乎潜力问题 · 人文 · 浏览增量' })
	async getZhihuPotentialQuestionHumanityView() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.humanity,
			zhihuSortType.pv_incr_rate
		)
	}

	@Get('potential/question/humanity/answer')
	@ApiOperation({ summary: '获取知乎潜力问题 · 人文 · 回答增量' })
	async getZhihuPotentialQuestionHumanityAnswer() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.humanity,
			zhihuSortType.answer_incr_rate
		)
	}

	@Get('potential/question/social/current/affairs')
	@ApiOperation({ summary: '获取知乎潜力问题 · 社会/时政' })
	async getZhihuPotentialQuestionSocialCurrentAffairs() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.social_current_affairs,
			zhihuSortType.all
		)
	}

	@Get('potential/question/social/current/affairs/view')
	@ApiOperation({ summary: '获取知乎潜力问题 · 社会/时政 · 浏览增量' })
	async getZhihuPotentialQuestionSocialCurrentAffairsView() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.social_current_affairs,
			zhihuSortType.pv_incr_rate
		)
	}

	@Get('potential/question/social/current/affairs/answer')
	@ApiOperation({ summary: '获取知乎潜力问题 · 社会/时政 · 回答增量' })
	async getZhihuPotentialQuestionSocialCurrentAffairsAnswer() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.social_current_affairs,
			zhihuSortType.answer_incr_rate
		)
	}

	@Get('potential/question/sociology')
	@ApiOperation({ summary: '获取知乎潜力问题 · 社会学' })
	async getZhihuPotentialQuestionSociology() {
		return await this.ZhihuService.getZhihuPotentialRankList(zhihuCreatorDomainType.sociology, zhihuSortType.all)
	}

	@Get('potential/question/sociology/view')
	@ApiOperation({ summary: '获取知乎潜力问题 · 社会学 · 浏览增量' })
	async getZhihuPotentialQuestionSociologyView() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.sociology,
			zhihuSortType.pv_incr_rate
		)
	}

	@Get('potential/question/sociology/answer')
	@ApiOperation({ summary: '获取知乎潜力问题 · 社会学 · 回答增量' })
	async getZhihuPotentialQuestionSociologyAnswer() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.sociology,
			zhihuSortType.answer_incr_rate
		)
	}

	@Get('potential/question/numerical')
	@ApiOperation({ summary: '获取知乎潜力问题 · 数码' })
	async getZhihuPotentialQuestionNumerical() {
		return await this.ZhihuService.getZhihuPotentialRankList(zhihuCreatorDomainType.numerical, zhihuSortType.all)
	}

	@Get('potential/question/numerical/view')
	@ApiOperation({ summary: '获取知乎潜力问题 · 数码 · 浏览增量' })
	async getZhihuPotentialQuestionNumericalView() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.numerical,
			zhihuSortType.pv_incr_rate
		)
	}

	@Get('potential/question/numerical/answer')
	@ApiOperation({ summary: '获取知乎潜力问题 · 数码 · 回答增量' })
	async getZhihuPotentialQuestionNumericalAnswer() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.numerical,
			zhihuSortType.answer_incr_rate
		)
	}

	@Get('potential/question/sports/competition')
	@ApiOperation({ summary: '获取知乎潜力问题 · 体育竞技' })
	async getZhihuPotentialQuestionSportsCompetition() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.sports_competition,
			zhihuSortType.all
		)
	}

	@Get('potential/question/sports/competition/view')
	@ApiOperation({ summary: '获取知乎潜力问题 · 体育竞技 · 浏览增量' })
	async getZhihuPotentialQuestionSportsCompetitionView() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.sports_competition,
			zhihuSortType.pv_incr_rate
		)
	}

	@Get('potential/question/sports/competition/answer')
	@ApiOperation({ summary: '获取知乎潜力问题 · 体育竞技 · 回答增量' })
	async getZhihuPotentialQuestionSportsCompetitionAnswer() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.sports_competition,
			zhihuSortType.answer_incr_rate
		)
	}

	@Get('potential/question/psychology')
	@ApiOperation({ summary: '获取知乎潜力问题 · 心理学' })
	async getZhihuPotentialQuestionPsychology() {
		return await this.ZhihuService.getZhihuPotentialRankList(zhihuCreatorDomainType.psychology, zhihuSortType.all)
	}

	@Get('potential/question/psychology/view')
	@ApiOperation({ summary: '获取知乎潜力问题 · 心理学 · 浏览增量' })
	async getZhihuPotentialQuestionPsychologyView() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.psychology,
			zhihuSortType.pv_incr_rate
		)
	}

	@Get('potential/question/psychology/answer')
	@ApiOperation({ summary: '获取知乎潜力问题 · 心理学 · 回答增量' })
	async getZhihuPotentialQuestionPsychologyAnswer() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.psychology,
			zhihuSortType.answer_incr_rate
		)
	}

	@Get('potential/question/mother/child')
	@ApiOperation({ summary: '获取知乎潜力问题 · 母婴亲子' })
	async getZhihuPotentialQuestionMotherChild() {
		return await this.ZhihuService.getZhihuPotentialRankList(zhihuCreatorDomainType.mother_child, zhihuSortType.all)
	}

	@Get('potential/question/mother/child/view')
	@ApiOperation({ summary: '获取知乎潜力问题 · 母婴亲子 · 浏览增量' })
	async getZhihuPotentialQuestionMotherChildView() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.mother_child,
			zhihuSortType.pv_incr_rate
		)
	}

	@Get('potential/question/mother/child/answer')
	@ApiOperation({ summary: '获取知乎潜力问题 · 母婴亲子 · 回答增量' })
	async getZhihuPotentialQuestionMotherChildAnswer() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.mother_child,
			zhihuSortType.answer_incr_rate
		)
	}

	@Get('potential/question/art')
	@ApiOperation({ summary: '获取知乎潜力问题 · 艺术' })
	async getZhihuPotentialQuestionArt() {
		return await this.ZhihuService.getZhihuPotentialRankList(zhihuCreatorDomainType.art, zhihuSortType.all)
	}

	@Get('potential/question/art/view')
	@ApiOperation({ summary: '获取知乎潜力问题 · 艺术 · 浏览增量' })
	async getZhihuPotentialQuestionArtView() {
		return await this.ZhihuService.getZhihuPotentialRankList(zhihuCreatorDomainType.art, zhihuSortType.pv_incr_rate)
	}

	@Get('potential/question/art/answer')
	@ApiOperation({ summary: '获取知乎潜力问题 · 艺术 · 回答增量' })
	async getZhihuPotentialQuestionArtAnswer() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.art,
			zhihuSortType.answer_incr_rate
		)
	}

	@Get('potential/question/music')
	@ApiOperation({ summary: '获取知乎潜力问题 · 音乐' })
	async getZhihuPotentialQuestionMusic() {
		return await this.ZhihuService.getZhihuPotentialRankList(zhihuCreatorDomainType.music, zhihuSortType.all)
	}

	@Get('potential/question/music/view')
	@ApiOperation({ summary: '获取知乎潜力问题 · 音乐 · 浏览增量' })
	async getZhihuPotentialQuestionMusicView() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.music,
			zhihuSortType.pv_incr_rate
		)
	}

	@Get('potential/question/music/answer')
	@ApiOperation({ summary: '获取知乎潜力问题 · 音乐 · 回答增量' })
	async getZhihuPotentialQuestionMusicAnswer() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.music,
			zhihuSortType.answer_incr_rate
		)
	}

	@Get('potential/question/video/tv')
	@ApiOperation({ summary: '获取知乎潜力问题 · 影视' })
	async getZhihuPotentialQuestionVideoTv() {
		return await this.ZhihuService.getZhihuPotentialRankList(zhihuCreatorDomainType.video_tv, zhihuSortType.all)
	}

	@Get('potential/question/video/tv/view')
	@ApiOperation({ summary: '获取知乎潜力问题 · 影视 · 浏览增量' })
	async getZhihuPotentialQuestionVideoTvView() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.video_tv,
			zhihuSortType.pv_incr_rate
		)
	}

	@Get('potential/question/video/tv/answer')
	@ApiOperation({ summary: '获取知乎潜力问题 · 影视 · 回答增量' })
	async getZhihuPotentialQuestionVideoTvAnswer() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.video_tv,
			zhihuSortType.answer_incr_rate
		)
	}

	@Get('potential/question/gaming/esports')
	@ApiOperation({ summary: '获取知乎潜力问题 · 游戏电竞' })
	async getZhihuPotentialQuestionGamingEsports() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.gaming_esports,
			zhihuSortType.all
		)
	}

	@Get('potential/question/gaming/esports/view')
	@ApiOperation({ summary: '获取知乎潜力问题 · 游戏电竞 · 浏览增量' })
	async getZhihuPotentialQuestionGamingEsportsView() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.gaming_esports,
			zhihuSortType.pv_incr_rate
		)
	}

	@Get('potential/question/gaming/esports/answer')
	@ApiOperation({ summary: '获取知乎潜力问题 · 游戏电竞 · 回答增量' })
	async getZhihuPotentialQuestionGamingEsportsAnswer() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.gaming_esports,
			zhihuSortType.answer_incr_rate
		)
	}

	@Get('potential/question/entertainment')
	@ApiOperation({ summary: '获取知乎潜力问题 · 娱乐' })
	async getZhihuPotentialQuestionEntertainment() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.entertainment,
			zhihuSortType.all
		)
	}

	@Get('potential/question/entertainment/view')
	@ApiOperation({ summary: '获取知乎潜力问题 · 娱乐 · 浏览增量' })
	async getZhihuPotentialQuestionEntertainmentView() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.entertainment,
			zhihuSortType.pv_incr_rate
		)
	}

	@Get('potential/question/entertainment/answer')
	@ApiOperation({ summary: '获取知乎潜力问题 · 娱乐 · 回答增量' })
	async getZhihuPotentialQuestionEntertainmentAnswer() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.entertainment,
			zhihuSortType.answer_incr_rate
		)
	}

	@Get('potential/question/sports/fitness')
	@ApiOperation({ summary: '获取知乎潜力问题 · 运动健身' })
	async getZhihuPotentialQuestionSportsFitness() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.sports_fitness,
			zhihuSortType.all
		)
	}

	@Get('potential/question/sports/fitness/view')
	@ApiOperation({ summary: '获取知乎潜力问题 · 运动健身 · 浏览增量' })
	async getZhihuPotentialQuestionSportsFitnessView() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.sports_fitness,
			zhihuSortType.pv_incr_rate
		)
	}

	@Get('potential/question/sports/fitness/answer')
	@ApiOperation({ summary: '获取知乎潜力问题 · 运动健身 · 回答增量' })
	async getZhihuPotentialQuestionSportsFitnessAnswer() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.sports_fitness,
			zhihuSortType.answer_incr_rate
		)
	}

	@Get('potential/question/workplace')
	@ApiOperation({ summary: '获取知乎潜力问题 · 职场' })
	async getZhihuPotentialQuestionWorkplace() {
		return await this.ZhihuService.getZhihuPotentialRankList(zhihuCreatorDomainType.workplace, zhihuSortType.all)
	}

	@Get('potential/question/workplace/view')
	@ApiOperation({ summary: '获取知乎潜力问题 · 职场 · 浏览增量' })
	async getZhihuPotentialQuestionWorkplaceView() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.workplace,
			zhihuSortType.pv_incr_rate
		)
	}

	@Get('potential/question/workplace/answer')
	@ApiOperation({ summary: '获取知乎潜力问题 · 职场 · 回答增量' })
	async getZhihuPotentialQuestionWorkplaceAnswer() {
		return await this.ZhihuService.getZhihuPotentialRankList(
			zhihuCreatorDomainType.workplace,
			zhihuSortType.answer_incr_rate
		)
	}
}
