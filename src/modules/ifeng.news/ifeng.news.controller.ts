import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { IfengNewsService } from '@/modules/ifeng.news/ifeng.news.service'

@Controller('ifeng.news')
@ApiTags('凤凰新闻')
export class IfengNewsController {
	constructor(private readonly ifengNewsService: IfengNewsService) {}

	@Get('hot')
	@ApiOperation({ summary: '获取凤凰新闻热榜' })
	async getHotNews() {
		return await this.ifengNewsService.getHotNewsRank()
	}
}
