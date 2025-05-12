import { Controller, Get, Param } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { CloudTencentService } from '@/modules/cloud.tencent/cloud.tencent.service'
import { ApiDescription } from '@/common/decorator/api.description.decorator'
import { ApiMaintainers } from '@/common/decorator/api.maintainers.decorator'
import { CloudTencentParamDto, CloudTencentZoneParamDto } from '@/modules/cloud.tencent/cloud.tencent.dto'
import {
	cloudTencentConstants,
	cloudTencentZoneConstants
} from '@/modules/cloud.tencent/constants/cloud.tencent.constants'

@Controller('cloud.tencent')
@ApiTags('腾讯云')
export class CloudTencentController {
	constructor(private readonly cloudTencentService: CloudTencentService) {}

	@Get('article/:type')
	@ApiDescription('获取腾讯云开发者社区文章')
	@ApiMaintainers('lonewolfyx')
	async getHostArticle(@Param() param: CloudTencentParamDto) {
		const { type } = param
		return await this.cloudTencentService.getArticleList(cloudTencentConstants[type]['value'])
	}

	@Get('rank/author')
	@ApiDescription('获取腾讯云开发者社区 · 原创作者热度排行榜')
	@ApiMaintainers('lonewolfyx')
	async getAuthorRank() {
		return await this.cloudTencentService.getAuthorRankList()
	}

	@Get('zone/:type')
	@ApiDescription('获取腾讯云开发者社区 · 原创作者热度排行榜')
	@ApiMaintainers('lonewolfyx')
	async getZoneArticle(@Param() param: CloudTencentZoneParamDto) {
		const { type } = param
		return await this.cloudTencentService.getZoneArticleList(cloudTencentZoneConstants[type]['id'])
	}
}
