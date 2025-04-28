import { Controller, Get, Param } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { SinaNewsService } from '@/modules/sina.news/sina.news.service'
import { SinaNewsParamDto } from '@/modules/sina.news/sina.news.dto'

@Controller('sina.news')
@ApiTags('新浪新闻')
export class SinaNewsController {
	constructor(private readonly sinaNewsService: SinaNewsService) {}

	@Get('rank/:type')
	async getRank(@Param() param: SinaNewsParamDto) {
		const { type } = param
		return await this.sinaNewsService.getNewsRank(type)
	}
}
