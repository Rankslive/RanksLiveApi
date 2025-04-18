import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { WeReadService } from '@/modules/weread/we.read.service'
import { WeReadConstants } from '@/constants/we.read.constants'

@Controller('we.read')
@ApiTags('微信读书')
export class WeReadController {
	constructor(private readonly WeReadService: WeReadService) {}

	@Get('surge')
	@ApiOperation({ summary: '获取微信读书 · top 50 飙升榜' })
	async getSurge() {
		return await this.WeReadService.getRankList(WeReadConstants.surge)
	}

	@Get('hot')
	@ApiOperation({ summary: '获取微信读书 · top 50 热搜榜' })
	async getHot() {
		return await this.WeReadService.getRankList(WeReadConstants.hotSearch)
	}

	@Get('newbook')
	@ApiOperation({ summary: '获取微信读书 · top 50 新书榜' })
	async getNewBook() {
		return await this.WeReadService.getRankList(WeReadConstants.newBook)
	}

	@Get('novel')
	@ApiOperation({ summary: '获取微信读书 · top 50 小说榜' })
	async getNovel() {
		return await this.WeReadService.getRankList(WeReadConstants.novel)
	}

	@Get('overall')
	@ApiOperation({ summary: '获取微信读书 · top 200 总榜' })
	async getOverall() {
		return await this.WeReadService.getRankList(WeReadConstants.overall)
	}

	@Get('special')
	@ApiOperation({ summary: '获取微信读书 · 神作榜' })
	async getSpecial() {
		return await this.WeReadService.getRankList(WeReadConstants.special)
	}

	@Get('special/potential')
	@ApiOperation({ summary: '获取微信读书 · 神作/潜力榜' })
	async getSpecialPotential() {
		return await this.WeReadService.getRankList(WeReadConstants.specialPotential)
	}
}
