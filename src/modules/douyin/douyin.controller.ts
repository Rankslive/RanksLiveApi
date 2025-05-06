import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { DouyinService } from '@/modules/douyin/douyin.service'
import { ApiMaintainers } from '@/common/decorator/api.maintainers.decorator'

@Controller('douyin')
@ApiTags('抖音')
export class DouyinController {
	constructor(private readonly DouYinService: DouyinService) {}

	@Get('hot')
	@ApiOperation({ summary: '获取抖音热榜' })
	@ApiMaintainers('lonewolfyx')
	async getDouYinHot() {
		return await this.DouYinService.getHotRankList()
	}
}
