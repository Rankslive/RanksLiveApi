import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { DouyinService } from '@/modules/douyin/douyin.service'

@Controller('douyin')
@ApiTags('抖音')
export class DouyinController {
	constructor(private readonly DouYinService: DouyinService) {}

	@Get('hot')
	@ApiOperation({ summary: '获取抖音热榜' })
	async getDouYinHot() {
		return await this.DouYinService.getHotRankList()
	}
}
