import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { BilibiliService } from '@/modules/bilibili/bilibili.service'
import { BiliBiliRankType } from '@/constants/bilibili.constants'

@Controller('bilibili')
@ApiTags('哔哩哔哩')
export class BilibiliController {
	constructor(private readonly BiliBiliService: BilibiliService) {}

	@Get('comprehensive/hot')
	@ApiOperation({ summary: '获取哔哩哔哩 · 综合热门榜' })
	async getHot() {
		return await this.BiliBiliService.getComprehensiveHotRankList()
	}

	@Get('must/brush')
	@ApiOperation({ summary: '获取哔哩哔哩 · 入站必刷榜' })
	async getMustBrushList() {
		return await this.BiliBiliService.getPopularPreciousRankList()
	}

	@Get('rank/anime')
	@ApiOperation({ summary: '获取哔哩哔哩 · 番剧排行榜' })
	async getAnimeRank() {
		return await this.BiliBiliService.getWebRankList(BiliBiliRankType.anime)
	}

	@Get('rank/guochuang')
	@ApiOperation({ summary: '获取哔哩哔哩 · 国创排行榜' })
	async getGuoChuangRank() {
		return await this.BiliBiliService.getWebRankList(BiliBiliRankType.guochuang)
	}

	@Get('rank/documentary')
	@ApiOperation({ summary: '获取哔哩哔哩 · 纪录片排行榜' })
	async getDocumentaryRank() {
		return await this.BiliBiliService.getSeasonRankList(BiliBiliRankType.documentary)
	}

	@Get('rank/movie')
	@ApiOperation({ summary: '获取哔哩哔哩 · 电影排行榜' })
	async getMovieRank() {
		return await this.BiliBiliService.getSeasonRankList(BiliBiliRankType.movie)
	}

	@Get('rank/tv')
	@ApiOperation({ summary: '获取哔哩哔哩 · 电视剧排行榜' })
	async gettvRank() {
		return await this.BiliBiliService.getSeasonRankList(BiliBiliRankType.tv)
	}
}
