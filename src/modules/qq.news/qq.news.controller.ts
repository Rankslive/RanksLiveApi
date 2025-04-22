import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { QqNewsService } from '@/modules/qq.news/qq.news.service'

@Controller('qq.news')
@ApiTags('腾讯新闻')
export class QqNewsController {
	constructor(private readonly qqNewsService: QqNewsService) {}

	@Get('hot')
	@ApiOperation({ summary: '获取腾讯 · 新闻热点榜' })
	async getRankHot() {
		return await this.qqNewsService.getRankHot()
	}
}
