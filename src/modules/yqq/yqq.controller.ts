import { Controller, Get, Param } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { YqqService } from '@/modules/yqq/yqq.service'
import { YQqConstants } from '@/constants/y.qq.constants'
import { YQqParamDto } from '@/modules/yqq/yqq.dto'

@Controller('yqq')
@ApiTags('QQ 音乐')
export class YqqController {
	constructor(private readonly YqqService: YqqService) {}

	@Get('musicTopList')
	@ApiOperation({ summary: '获取 QQ 音乐 · 音乐榜单' })
	async getMusicTopList() {
		return await this.YqqService.getMusicTopList()
	}

	@Get('rank/:type')
	@ApiOperation({ summary: '获取 QQ 音乐 · 飙升榜榜' })
	async getSurgeRank(@Param() param: YQqParamDto) {
		const { type } = param
		return await this.YqqService.getRanksList(YQqConstants[type]['value'])
	}
	//
	// @Get('rank/hot')
	// @ApiOperation({ summary: '获取 QQ 音乐 · 热歌榜榜' })
	// async getHotRank() {
	// 	return await this.YqqService.getRanksList(YQqConstants.hot)
	// }
	//
	// @Get('rank/new')
	// @ApiOperation({ summary: '获取 QQ 音乐 · 新歌榜榜' })
	// async getNewRank() {
	// 	return await this.YqqService.getRanksList(YQqConstants.new)
	// }
	//
	// @Get('rank/popular')
	// @ApiOperation({ summary: '获取 QQ 音乐 · 流行指数榜榜' })
	// async getPopularRank() {
	// 	return await this.YqqService.getRanksList(YQqConstants.popular)
	// }
	//
	// @Get('rank/tencent/musician')
	// @ApiOperation({ summary: '获取 QQ 音乐 · 腾讯音乐人原创榜榜' })
	// async getTencentMusicianRank() {
	// 	return await this.YqqService.getRanksList(YQqConstants.tencent_musician)
	// }
	//
	// @Get('rank/identify')
	// @ApiOperation({ summary: '获取 QQ 音乐 · 听歌识曲榜榜' })
	// async getIdentifyRank() {
	// 	return await this.YqqService.getRanksList(YQqConstants.identify)
	// }
	//
	// @Get('rank/inland')
	// @ApiOperation({ summary: '获取 QQ 音乐 · 内地榜榜' })
	// async getInlandRank() {
	// 	return await this.YqqService.getRanksList(YQqConstants.inland)
	// }
	//
	// @Get('rank/hongkong')
	// @ApiOperation({ summary: '获取 QQ 音乐 · 香港地区榜榜' })
	// async getHongkongRank() {
	// 	return await this.YqqService.getRanksList(YQqConstants.hongkong)
	// }
	//
	// @Get('rank/taiwan')
	// @ApiOperation({ summary: '获取 QQ 音乐 · 台湾地区榜榜' })
	// async getTaiwanRank() {
	// 	return await this.YqqService.getRanksList(YQqConstants.taiwan)
	// }
	//
	// @Get('rank/westerner')
	// @ApiOperation({ summary: '获取 QQ 音乐 · 欧美榜榜' })
	// async getWesternerRank() {
	// 	return await this.YqqService.getRanksList(YQqConstants.westerner)
	// }
	//
	// @Get('rank/korea')
	// @ApiOperation({ summary: '获取 QQ 音乐 · 韩国榜榜' })
	// async getKoreaRank() {
	// 	return await this.YqqService.getRanksList(YQqConstants.korea)
	// }
	//
	// @Get('rank/japan')
	// @ApiOperation({ summary: '获取 QQ 音乐 · 日本榜榜' })
	// async getJapanRank() {
	// 	return await this.YqqService.getRanksList(YQqConstants.japan)
	// }
	//
	// @Get('rank/joox')
	// @ApiOperation({ summary: '获取 QQ 音乐 · JOOX本地热播榜榜' })
	// async getJooxRank() {
	// 	return await this.YqqService.getRanksList(YQqConstants.joox)
	// }
	//
	// @Get('rank/hongkong/tvb')
	// @ApiOperation({ summary: '获取 QQ 音乐 · 香港TVB劲歌金榜榜' })
	// async getHongkongTvbRank() {
	// 	return await this.YqqService.getRanksList(YQqConstants.hongkong_tvb)
	// }
	//
	// @Get('rank/taiwan/kkbox')
	// @ApiOperation({ summary: '获取 QQ 音乐 · 台湾KKBOX榜榜' })
	// async getTaiwanKkboxRank() {
	// 	return await this.YqqService.getRanksList(YQqConstants.taiwan_kkbox)
	// }
	//
	// @Get('rank/rap')
	// @ApiOperation({ summary: '获取 QQ 音乐 · 说唱榜榜' })
	// async getRapRank() {
	// 	return await this.YqqService.getRanksList(YQqConstants.rap)
	// }
	//
	// @Get('rank/electric')
	// @ApiOperation({ summary: '获取 QQ 音乐 · 电音榜榜' })
	// async getElectricRank() {
	// 	return await this.YqqService.getRanksList(YQqConstants.electric)
	// }
	//
	// @Get('rank/game')
	// @ApiOperation({ summary: '获取 QQ 音乐 · 游戏音乐榜榜' })
	// async getGameRank() {
	// 	return await this.YqqService.getRanksList(YQqConstants.game)
	// }
	//
	// @Get('rank/anime')
	// @ApiOperation({ summary: '获取 QQ 音乐 · 动漫音乐榜榜' })
	// async getAnimeRank() {
	// 	return await this.YqqService.getRanksList(YQqConstants.anime)
	// }
	//
	// @Get('rank/video')
	// @ApiOperation({ summary: '获取 QQ 音乐 · 影视金曲榜榜' })
	// async getVideoRank() {
	// 	return await this.YqqService.getRanksList(YQqConstants.video)
	// }
	//
	// @Get('rank/variety')
	// @ApiOperation({ summary: '获取 QQ 音乐 · 综艺新歌榜榜' })
	// async getVarietyRank() {
	// 	return await this.YqqService.getRanksList(YQqConstants.variety)
	// }
	//
	// @Get('rank/guofeng')
	// @ApiOperation({ summary: '获取 QQ 音乐 · 国风热歌榜榜' })
	// async getGuofengRank() {
	// 	return await this.YqqService.getRanksList(YQqConstants.guofeng)
	// }
	//
	// @Get('rank/kge')
	// @ApiOperation({ summary: '获取 QQ 音乐 · K歌金曲榜榜' })
	// async getKgeRank() {
	// 	return await this.YqqService.getRanksList(YQqConstants.kge)
	// }
	//
	// @Get('rank/douyin')
	// @ApiOperation({ summary: '获取 QQ 音乐 · 抖音热歌榜榜' })
	// async getDouyinRank() {
	// 	return await this.YqqService.getRanksList(YQqConstants.douyin)
	// }
	//
	// @Get('rank/dj')
	// @ApiOperation({ summary: '获取 QQ 音乐 · DJ舞曲榜榜' })
	// async getDjRank() {
	// 	return await this.YqqService.getRanksList(YQqConstants.dj)
	// }
	//
	// @Get('rank/network')
	// @ApiOperation({ summary: '获取 QQ 音乐 · 网络歌曲榜榜' })
	// async getNetworkRank() {
	// 	return await this.YqqService.getRanksList(YQqConstants.network)
	// }
	//
	// @Get('rank/billboard')
	// @ApiOperation({ summary: '获取 QQ 音乐 · 美国公告牌榜榜' })
	// async getBillboardRank() {
	// 	return await this.YqqService.getRanksList(YQqConstants.billboard)
	// }
	//
	// @Get('rank/melon')
	// @ApiOperation({ summary: '获取 QQ 音乐 · 韩国Melon榜榜' })
	// async getMelonRank() {
	// 	return await this.YqqService.getRanksList(YQqConstants.melon)
	// }
	//
	// @Get('rank/uk')
	// @ApiOperation({ summary: '获取 QQ 音乐 · 英国UK榜榜' })
	// async getUkRank() {
	// 	return await this.YqqService.getRanksList(YQqConstants.uk)
	// }
	//
	// @Get('rank/japan/public')
	// @ApiOperation({ summary: '获取 QQ 音乐 · 日本公信榜榜' })
	// async getJapanPublicRank() {
	// 	return await this.YqqService.getRanksList(YQqConstants.japan_public)
	// }
}
