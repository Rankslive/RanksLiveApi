import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { ItHomeService } from '@/modules/it.home/it.home.service'
import { ItHomeConstants, ItHomeListTypeEnum } from '@/constants/it.home.constants'

@Controller('it.home')
@ApiTags('iT 之家')
export class ItHomeController {
	constructor(private readonly itHomeService: ItHomeService) {}

	@Get('rank/day/read')
	@ApiOperation({ summary: '获取 it 之家 · 阅读日榜' })
	async getReadDayRank() {
		return this.itHomeService.getRankList(ItHomeConstants.read, ItHomeListTypeEnum.day)
	}

	@Get('rank/week/read')
	@ApiOperation({ summary: '获取 it 之家 · 阅读周榜' })
	async getReadWeekRank() {
		return this.itHomeService.getRankList(ItHomeConstants.read, ItHomeListTypeEnum.week)
	}

	@Get('rank/month/read')
	@ApiOperation({ summary: '获取 it 之家 · 阅读月榜' })
	async getReadMonthRank() {
		return this.itHomeService.getRankList(ItHomeConstants.read, ItHomeListTypeEnum.month)
	}

	@Get('rank/day/hot')
	@ApiOperation({ summary: '获取 it 之家 · 最热日榜' })
	async getHotDayRank() {
		return this.itHomeService.getRankList(ItHomeConstants.hot, ItHomeListTypeEnum.day)
	}

	@Get('rank/week/hot')
	@ApiOperation({ summary: '获取 it 之家 · 最热周榜' })
	async getHotWeekRank() {
		return this.itHomeService.getRankList(ItHomeConstants.hot, ItHomeListTypeEnum.week)
	}

	@Get('rank/month/hot')
	@ApiOperation({ summary: '获取 it 之家 · 最热月榜' })
	async getHotMonthRank() {
		return this.itHomeService.getRankList(ItHomeConstants.hot, ItHomeListTypeEnum.month)
	}

	@Get('rank/day/grade')
	@ApiOperation({ summary: '获取 it 之家 · 打分日榜' })
	async getGradeDayRank() {
		return this.itHomeService.getRankList(ItHomeConstants.grade, ItHomeListTypeEnum.day)
	}

	@Get('rank/week/grade')
	@ApiOperation({ summary: '获取 it 之家 · 打分周榜' })
	async getGradeWeekRank() {
		return this.itHomeService.getRankList(ItHomeConstants.grade, ItHomeListTypeEnum.week)
	}

	@Get('rank/month/grade')
	@ApiOperation({ summary: '获取 it 之家 · 打分月榜' })
	async getGradeMonthRank() {
		return this.itHomeService.getRankList(ItHomeConstants.grade, ItHomeListTypeEnum.month)
	}
}
