import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { ZhihuService } from '@/modules/zhihu/zhihu.service'

@Controller('zhihu')
@ApiTags('知乎')
export class ZhihuController {
	constructor(private readonly ZhihuService: ZhihuService) {}

	@Get('hot')
	@ApiOperation({ summary: '获取知乎热榜' })
	async getZhihuHot() {
		return await this.ZhihuService.getHotRankList()
	}
}
