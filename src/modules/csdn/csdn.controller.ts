import { Controller, Get, Query } from '@nestjs/common'
import { CsdnService } from './csdn.service'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { CsdnConstants } from '@/constants/csdn.constants'

@Controller('csdn')
@ApiTags('CSDN')
export class CsdnController {
	constructor(private readonly csdnService: CsdnService) {}

	@Get('article/hot-rank')
	@ApiOperation({ summary: '获取CSDN全站综合热榜' })
	async getArticleHotRank() {
		return await this.csdnService.getArticleHotRank()
	}

	@Get('article/hot-channel-rank')
	@ApiOperation({ summary: '获取CSDN领域内容榜' })
	async getAreaArticleRank(@Query('type') type: string) {
		const child_channel = CsdnConstants[type]
		if (!child_channel) {
			throw new Error('type类型不正确')
		}
		return await this.csdnService.getAreaArticleRank(child_channel)
	}

	@Get('article/pay-column-rank')
	@ApiOperation({ summary: '获取CSDN热门专栏榜' })
	async getArticlePayColumnRank() {
		return await this.csdnService.getArticlePayColumnRank()
	}

	@Get('author/author-rank')
	@ApiOperation({ summary: '获取CSDN新晋作者榜' })
	async getArticleAuthorRank() {
		return await this.csdnService.getArticleAuthorRank('new_author')
	}

	@Get('author/weekly-author-rank')
	@ApiOperation({ summary: '获取CSDN作者周榜' })
	async getArticleWeeklyAuthorRank() {
		return await this.csdnService.getArticleAuthorRank('weekly_author')
	}

	@Get('author/total-author-rank')
	@ApiOperation({ summary: '获取CSDN作者总榜' })
	async getArticleTotalAuthorRank() {
		return await this.csdnService.getArticleAuthorRank('total_author')
	}

	@Get('author/monthly-influence')
	@ApiOperation({ summary: '获取CSDN原力榜' })
	async getArticleMonthlyInfluenceRank() {
		return await this.csdnService.getArticleAuthorRank('monthly_influence')
	}

	@Get('author/annual-influence')
	@ApiOperation({ summary: '获取CSDN原力年榜' })
	async getArticleAnnualInfluenceRank() {
		return await this.csdnService.getArticleAuthorRank('annual_influence')
	}

	@Get('author/new-user-influence')
	@ApiOperation({ summary: '获取CSDN新人榜' })
	async getArticleNewUserInfluenceRank() {
		return await this.csdnService.getArticleAuthorRank('new_user_influence')
	}

	@Get('author/leader-rank')
	@ApiOperation({ summary: '获取CSDN领军人物' })
	async getArticleLeaderRank() {
		return await this.csdnService.getArticleAuthorRank('leader')
	}

	@Get('author/history-rank')
	@ApiOperation({ summary: '获取CSDN历史贡献榜' })
	async getArticleHistoryRank() {
		return await this.csdnService.getArticleHistoryRank()
	}

	// @Get('article/community-rank')
	// @ApiOperation({ summary: '获取CSDN社区榜' })
	// async getArticleCommunityRank() {
	// 	return await this.csdnService.getArticleCommunityRank()
	// }
}
