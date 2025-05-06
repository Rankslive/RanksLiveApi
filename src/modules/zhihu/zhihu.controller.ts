import { Controller, Get, Param } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { ZhihuService } from '@/modules/zhihu/zhihu.service'
import { zhihuConstants, zhihuCreatorDomain } from '@/constants/zhihu.constants'
import { ZhiHuHotQuestionDto, ZhiHuPotentialQuestionDto } from '@/modules/zhihu/zhihu.dto'
import { ApiMaintainers } from '@/common/decorator/api.maintainers.decorator'

@Controller('zhihu')
@ApiTags('知乎')
export class ZhihuController {
	constructor(private readonly ZhihuService: ZhihuService) {}

	@Get('hot')
	@ApiOperation({ summary: '获取知乎热榜' })
	@ApiMaintainers('lonewolfyx')
	async getZhiHuHot() {
		return await this.ZhihuService.getHotRankList()
	}

	@Get('miss/hot')
	@ApiOperation({ summary: '获取知乎错过热议' })
	@ApiMaintainers('lonewolfyx')
	async getZhiHuMissHot() {
		return await this.ZhihuService.getZhihuNextRenderList(zhihuConstants.billboard_missed)
	}

	@Get('weekly')
	@ApiOperation({ summary: '获取知乎每周必看' })
	@ApiMaintainers('lonewolfyx')
	async getZhiHuWeekly() {
		return await this.ZhihuService.getZhihuNextRenderList(zhihuConstants.billboard_weekly)
	}

	@Get('hot/question/:domain/:period')
	@ApiOperation({ summary: '获取知乎近期热点' })
	@ApiMaintainers('lonewolfyx')
	async getZhiHuHotQuestion(@Param() params: ZhiHuHotQuestionDto) {
		const { domain, period } = params
		return await this.ZhihuService.getZhihuCreatorRankList(zhihuCreatorDomain[domain]['value'], period)
	}

	@Get('potential/question/:domain/:sortType')
	@ApiOperation({ summary: '获取知乎潜力问题' })
	@ApiMaintainers('lonewolfyx')
	async getZhiHuPotentialQuestion(@Param() params: ZhiHuPotentialQuestionDto) {
		const { domain, sortType } = params
		return await this.ZhihuService.getZhihuPotentialRankList(zhihuCreatorDomain[domain]['value'], sortType)
	}

	@Get('daily')
	@ApiOperation({ summary: '获取知乎日报' })
	@ApiMaintainers('lonewolfyx')
	async getZhiHuDaily() {
		return await this.ZhihuService.getZhihuDailyRank()
	}
}
