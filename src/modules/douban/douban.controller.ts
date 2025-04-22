import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { DoubanService } from '@/modules/douban/douban.service'
import { DoubanConstants } from '@/constants/douban.constants'

@Controller('douban')
@ApiTags('豆瓣')
export class DoubanController {
	constructor(private readonly doubanService: DoubanService) {}

	@Get('real/subject')
	@ApiOperation({ summary: '获取豆瓣 · 实时热门书影音' })
	async getSubjectRank(): Promise<any> {
		return await this.doubanService.getRealRankList(DoubanConstants.subject)
	}

	@Get('real/movie')
	@ApiOperation({ summary: '获取豆瓣 · 实时热门电影榜' })
	async getMovieRank(): Promise<any> {
		return await this.doubanService.getRealRankList(DoubanConstants.movie)
	}

	@Get('real/tv')
	@ApiOperation({ summary: '获取豆瓣 · 实时热门电视榜' })
	async getTvRank(): Promise<any> {
		return await this.doubanService.getRealRankList(DoubanConstants.tv)
	}
}
