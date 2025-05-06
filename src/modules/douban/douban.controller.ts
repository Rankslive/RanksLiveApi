import { Controller, Get, Param } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { DoubanService } from '@/modules/douban/douban.service'
import { DoubanConstants } from '@/constants/douban.constants'
import { DouBanParamDto } from '@/modules/douban/douban.dto'
import { ApiMaintainers } from '@/common/decorator/api.maintainers.decorator'

@Controller('douban')
@ApiTags('豆瓣')
export class DoubanController {
	constructor(private readonly doubanService: DoubanService) {}

	@Get('real/:type')
	@ApiOperation({ summary: '获取豆瓣榜单' })
	@ApiMaintainers('lonewolfyx')
	async getSubjectRank(@Param() param: DouBanParamDto): Promise<any> {
		const { type } = param
		return await this.doubanService.getRealRankList(DoubanConstants[type]['value'])
	}
}
