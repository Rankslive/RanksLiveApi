import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { NeteaseService } from '@/modules/netease/netease.service'
import { NeteaseConstants } from '@/constants/netease.constants'

@Controller('netease')
@ApiTags('网易云音乐')
export class NeteaseController {
	constructor(private readonly NeteaseService: NeteaseService) {}

	@Get('rank/surge')
	@ApiOperation({ summary: '获取网易云音乐 · 飙升榜' })
	async getSurgeRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.surge)
	}

	@Get('rank/new')
	@ApiOperation({ summary: '获取网易云音乐 · 新歌榜' })
	async getNewRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.new)
	}

	@Get('rank/original')
	@ApiOperation({ summary: '获取网易云音乐 · 原创榜' })
	async getOriginalRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.original)
	}

	@Get('rank/hot')
	@ApiOperation({ summary: '获取网易云音乐 · 热歌榜' })
	async getHotRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.hot)
	}

	@Get('rank/rap')
	@ApiOperation({ summary: '获取网易云音乐 · 云音乐说唱榜' })
	async getRapRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.rap)
	}

	@Get('rank/classical')
	@ApiOperation({ summary: '获取网易云音乐 · 云音乐古典榜' })
	async getClassicalRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.classical)
	}

	@Get('rank/electric')
	@ApiOperation({ summary: '获取网易云音乐 · 云音乐电音榜' })
	async getElectricRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.electric)
	}

	@Get('rank/trend')
	@ApiOperation({ summary: '获取网易云音乐 · 潮流风向榜' })
	async getTrendRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.trend)
	}

	@Get('rank/music/partner/recommend')
	@ApiOperation({ summary: '获取网易云音乐 · 音乐合伙人推荐榜' })
	async getMusicPartnerRecommendRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.music_partner_recommend)
	}

	@Get('rank/music/partner/hot')
	@ApiOperation({ summary: '获取网易云音乐 · 音乐合伙人热歌榜' })
	async getMusicPartnerHotRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.music_partner_hot)
	}

	@Get('rank/music/partner/naming')
	@ApiOperation({ summary: '获取网易云音乐 · 音乐合伙人留名榜' })
	async getMusicPartnerNamingRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.music_partner_naming)
	}

	@Get('rank/music/partner/high/new')
	@ApiOperation({ summary: '获取网易云音乐 · 音乐合伙人高分新歌榜' })
	async getMusicPartnerHighNewRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.music_partner_high_new)
	}

	@Get('rank/music/partner/high')
	@ApiOperation({ summary: '获取网易云音乐 · 音乐合伙人高分榜' })
	async getMusicPartnerHighRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.music_partner_high)
	}

	@Get('rank/black/vip/love')
	@ApiOperation({ summary: '获取网易云音乐 · 黑胶VIP爱听榜' })
	async getBlackVipLoveRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.black_vip_love)
	}

	@Get('rank/acg')
	@ApiOperation({ summary: '获取网易云音乐 · 云音乐ACG榜' })
	async getAcgRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.acg)
	}

	@Get('rank/Korean')
	@ApiOperation({ summary: '获取网易云音乐 · 云音乐韩语榜' })
	async getKoreanRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.Korean)
	}

	@Get('rank/uk/weekly')
	@ApiOperation({ summary: '获取网易云音乐 · UK排行榜周榜' })
	async getUkWeeklyRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.uk_weekly)
	}

	@Get('rank/us/billboard')
	@ApiOperation({ summary: '获取网易云音乐 · 美国Billboard榜' })
	async getUsBillboardRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.us_billboard)
	}

	@Get('rank/beatport')
	@ApiOperation({ summary: '获取网易云音乐 · Beatport全球电子舞曲榜' })
	async getBeatportRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.beatport)
	}

	@Get('rank/ktv')
	@ApiOperation({ summary: '获取网易云音乐 · KTV唛榜' })
	async getKtvRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.ktv)
	}

	@Get('rank/japan/oricon')
	@ApiOperation({ summary: '获取网易云音乐 · 日本Oricon榜' })
	async getJapanOriconRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.japan_oricon)
	}

	@Get('rank/europe/america/hot')
	@ApiOperation({ summary: '获取网易云音乐 · 云音乐欧美热歌榜' })
	async getEuropeAmericaHotRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.europe_america_hot)
	}

	@Get('rank/europe/america/new')
	@ApiOperation({ summary: '获取网易云音乐 · 云音乐欧美新歌榜' })
	async getEuropeAmericaNewRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.europe_america_new)
	}

	@Get('rank/france/nrj/vos/hits')
	@ApiOperation({ summary: '获取网易云音乐 · 法国 NRJ Vos Hits 周榜' })
	async getFranceNrjVosHitsRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.france_nrj_vos_hits)
	}

	@Get('rank/acg/animation')
	@ApiOperation({ summary: '获取网易云音乐 · 云音乐ACG动画榜' })
	async getAcgAnimationRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.acg_animation)
	}

	@Get('rank/acg/game')
	@ApiOperation({ summary: '获取网易云音乐 · 云音乐ACG游戏榜' })
	async getAcgGameRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.acg_game)
	}

	@Get('rank/acg/vocalised')
	@ApiOperation({ summary: '获取网易云音乐 · 云音乐ACG VOCALOID榜' })
	async getAcgVocalisedRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.acg_vocalised)
	}

	@Get('rank/japanese')
	@ApiOperation({ summary: '获取网易云音乐 · 云音乐日语榜' })
	async getJapaneseRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.japanese)
	}

	@Get('rank/rock')
	@ApiOperation({ summary: '获取网易云音乐 · 云音乐摇滚榜' })
	async getRockRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.rock)
	}

	@Get('rank/guofeng')
	@ApiOperation({ summary: '获取网易云音乐 · 云音乐国风榜' })
	async getGuofengRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.guofeng)
	}

	@Get('rank/potential')
	@ApiOperation({ summary: '获取网易云音乐 · 潜力爆款榜' })
	async getPotentialRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.potential)
	}

	@Get('rank/ballad')
	@ApiOperation({ summary: '获取网易云音乐 · 云音乐民谣榜' })
	async getBalladRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.ballad)
	}

	@Get('rank/identify')
	@ApiOperation({ summary: '获取网易云音乐 · 听歌识曲榜' })
	async getIdentifyRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.identify)
	}

	@Get('rank/network/hot')
	@ApiOperation({ summary: '获取网易云音乐 · 网络热歌榜' })
	async getNetworkHotRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.network_hot)
	}

	@Get('rank/russia')
	@ApiOperation({ summary: '获取网易云音乐 · 俄语榜' })
	async getRussiaRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.russia)
	}

	@Get('rank/vietnam')
	@ApiOperation({ summary: '获取网易云音乐 · 越南语榜' })
	async getVietnamRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.vietnam)
	}

	@Get('rank/chinese/dj')
	@ApiOperation({ summary: '获取网易云音乐 · 中文慢摇DJ榜' })
	async getChineseDjRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.chinese_dj)
	}

	@Get('rank/russia/hit')
	@ApiOperation({ summary: '获取网易云音乐 · 俄罗斯top hit流行音乐榜' })
	async getRussiaHitRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.russia_hit)
	}

	@Get('rank/thai')
	@ApiOperation({ summary: '获取网易云音乐 · 泰语榜' })
	async getThaiRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.thai)
	}

	@Get('rank/beat')
	@ApiOperation({ summary: '获取网易云音乐 · BEAT排行榜' })
	async getBeatRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.beat)
	}

	@Get('rank/nebula')
	@ApiOperation({ summary: '获取网易云音乐 · 星云榜VOL.28 NMIXX新专来袭，无数人将会与你同行' })
	async getNebulaRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.nebula)
	}

	@Get('rank/look')
	@ApiOperation({ summary: '获取网易云音乐 · LOOK直播歌曲榜' })
	async getLookRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.look)
	}

	@Get('rank/appreciate')
	@ApiOperation({ summary: '获取网易云音乐 · 赏音榜' })
	async getAppreciateRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.appreciate)
	}

	@Get('rank/black/vip/new')
	@ApiOperation({ summary: '获取网易云音乐 · 黑胶VIP新歌榜' })
	async getBlackVipNewRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.black_vip_new)
	}

	@Get('rank/black/vip/hot')
	@ApiOperation({ summary: '获取网易云音乐 · 黑胶VIP热歌榜' })
	async getBlackVipHotRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.black_vip_hot)
	}

	@Get('rank/black/vip/hot/search')
	@ApiOperation({ summary: '获取网易云音乐 · 黑胶VIP爱搜榜' })
	async getBlackVipHotSearchRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.black_vip_hot_search)
	}

	@Get('rank/real/time')
	@ApiOperation({ summary: '获取网易云音乐 · 实时热度榜' })
	async getRealTimeRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.real_time)
	}

	@Get('rank/heineken')
	@ApiOperation({ summary: '获取网易云音乐 · 喜力®星电音派对潮音榜' })
	async getHeinekenRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.heineken)
	}

	@Get('rank/le/xia')
	@ApiOperation({ summary: '获取网易云音乐 · 乐夏榜' })
	async getLeXiaRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.le_xia)
	}

	@Get('rank/tesla')
	@ApiOperation({ summary: '获取网易云音乐 · 特斯拉车友爱听榜' })
	async getTeslaRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.tesla)
	}

	@Get('rank/li')
	@ApiOperation({ summary: '获取网易云音乐 · 理想车友爱听榜' })
	async getLiRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.li)
	}

	@Get('rank/byd')
	@ApiOperation({ summary: '获取网易云音乐 · 比亚迪车友爱听榜' })
	async getBydRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.byd)
	}

	@Get('rank/nio')
	@ApiOperation({ summary: '获取网易云音乐 · 蔚来车友爱听榜' })
	async getNioRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.nio)
	}

	@Get('rank/zeekr')
	@ApiOperation({ summary: '获取网易云音乐 · 极氪车友爱听榜' })
	async getZeekrRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.zeekr)
	}

	@Get('rank/party')
	@ApiOperation({ summary: '获取网易云音乐 · 蛋仔派对听歌榜' })
	async getPartyRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.party)
	}

	@Get('rank/suno/ai')
	@ApiOperation({ summary: '获取网易云音乐 · Suno&nbsp;AI新歌榜' })
	async getSunoAiRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.suno_ai)
	}

	@Get('rank/hyptec')
	@ApiOperation({ summary: '获取网易云音乐 · 昊铂车友爱听榜' })
	async getHyptecRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.hyptec)
	}

	@Get('rank/aion')
	@ApiOperation({ summary: '获取网易云音乐 · 埃安车友爱听榜' })
	async getAionRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.aion)
	}

	@Get('rank/europe/r/b')
	@ApiOperation({ summary: '获取网易云音乐 · 欧美R&amp;B榜' })
	async getEuropeRBRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.europe_r_b)
	}

	@Get('rank/black/glue/vip/limit')
	@ApiOperation({ summary: '获取网易云音乐 · 黑胶VIP限免榜' })
	async getBlackGlueVipLimitRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.black_glue_vip_limit)
	}

	@Get('rank/geely')
	@ApiOperation({ summary: '获取网易云音乐 · 吉利车友爱听榜' })
	async getGeelyRank() {
		return await this.NeteaseService.getRankList(NeteaseConstants.geely)
	}
}
