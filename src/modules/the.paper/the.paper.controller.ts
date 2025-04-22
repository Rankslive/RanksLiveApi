import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { ThePaperService } from '@/modules/the.paper/the.paper.service'

@Controller('the.paper')
@ApiTags('澎湃新闻')
export class ThePaperController {
	constructor(private readonly thePaperService: ThePaperService) {}

	@Get('hot')
	@ApiOperation({ summary: '获取澎湃新闻 · 热榜' })
	async getRankHot() {
		return await this.thePaperService.getRankHot()
	}
}
