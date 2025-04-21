import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { AcfunService } from '@/modules/acfun/acfun.service'
import { AcfunConstants } from '@/constants/acfun.constants'

@Controller('acfun')
@ApiTags('AcFun弹幕视频网')
export class AcfunController {
	constructor(private readonly AcfunService: AcfunService) {}

	@Get('rank/all')
	@ApiOperation({ summary: '获取 Acfun · 综合榜单' })
	async getAllRank() {
		return this.AcfunService.getRankList(AcfunConstants.all)
	}

	@Get('rank/drama')
	@ApiOperation({ summary: '获取 Acfun · 番剧' })
	async getDramaRank() {
		return this.AcfunService.getRankList(AcfunConstants.drama)
	}

	@Get('rank/drama/tv')
	@ApiOperation({ summary: '获取 Acfun · 番剧 · TV动画' })
	async getDramaTvRank() {
		return this.AcfunService.getRankList(AcfunConstants.drama_tv)
	}

	@Get('rank/drama/theater')
	@ApiOperation({ summary: '获取 Acfun · 番剧 · 剧场动画' })
	async getDramaTheaterRank() {
		return this.AcfunService.getRankList(AcfunConstants.drama_theater)
	}

	@Get('rank/drama/guochang')
	@ApiOperation({ summary: '获取 Acfun · 番剧 · 国产动画' })
	async getDramaGuochangRank() {
		return this.AcfunService.getRankList(AcfunConstants.drama_guochang)
	}

	@Get('rank/animation')
	@ApiOperation({ summary: '获取 Acfun · 动画' })
	async getAnimationRank() {
		return this.AcfunService.getRankList(AcfunConstants.animation)
	}

	@Get('rank/animation/synthesis')
	@ApiOperation({ summary: '获取 Acfun · 动画 · 动画综合' })
	async getAnimationSynthesisRank() {
		return this.AcfunService.getRankList(AcfunConstants.animation_synthesis)
	}

	@Get('rank/animation/short')
	@ApiOperation({ summary: '获取 Acfun · 动画 · 短片·手书·配音' })
	async getAnimationShortRank() {
		return this.AcfunService.getRankList(AcfunConstants.animation_short)
	}

	@Get('rank/animation/mad/amw')
	@ApiOperation({ summary: '获取 Acfun · 动画 · MAD·AMV' })
	async getAnimationMadAmwRank() {
		return this.AcfunService.getRankList(AcfunConstants.animation_mad_amw)
	}

	@Get('rank/animation/mmd')
	@ApiOperation({ summary: '获取 Acfun · 动画 · MMD·3D' })
	async getAnimationMmdRank() {
		return this.AcfunService.getRankList(AcfunConstants.animation_mmd)
	}

	@Get('rank/animation/virtual')
	@ApiOperation({ summary: '获取 Acfun · 动画 · 虚拟偶像' })
	async getAnimationVirtualRank() {
		return this.AcfunService.getRankList(AcfunConstants.animation_virtual)
	}

	@Get('rank/animation/news')
	@ApiOperation({ summary: '获取 Acfun · 动画 · 动画资讯' })
	async getAnimationNewsRank() {
		return this.AcfunService.getRankList(AcfunConstants.animation_news)
	}

	@Get('rank/animation/cosplay/voice')
	@ApiOperation({ summary: '获取 Acfun · 动画 · COSPLAY·声优' })
	async getAnimationCosplayVoiceRank() {
		return this.AcfunService.getRankList(AcfunConstants.animation_cosplay_voice)
	}

	@Get('rank/animation/tokusatsu')
	@ApiOperation({ summary: '获取 Acfun · 动画 · 特摄' })
	async getAnimationTokusatsuRank() {
		return this.AcfunService.getRankList(AcfunConstants.animation_tokusatsu)
	}

	@Get('rank/animation/drama')
	@ApiOperation({ summary: '获取 Acfun · 动画 · 番剧二创' })
	async getAnimationDramaRank() {
		return this.AcfunService.getRankList(AcfunConstants.animation_drama)
	}

	@Get('rank/entertainment')
	@ApiOperation({ summary: '获取 Acfun · 娱乐' })
	async getEntertainmentRank() {
		return this.AcfunService.getRankList(AcfunConstants.entertainment)
	}

	@Get('rank/entertainment/funny')
	@ApiOperation({ summary: '获取 Acfun · 娱乐 · 搞笑' })
	async getEntertainmentFunnyRank() {
		return this.AcfunService.getRankList(AcfunConstants.entertainment_funny)
	}

	@Get('rank/entertainment/demon')
	@ApiOperation({ summary: '获取 Acfun · 娱乐 · 鬼畜' })
	async getEntertainmentDemonRank() {
		return this.AcfunService.getRankList(AcfunConstants.entertainment_demon)
	}

	@Get('rank/entertainment/star')
	@ApiOperation({ summary: '获取 Acfun · 娱乐 · 明星' })
	async getEntertainmentStarRank() {
		return this.AcfunService.getRankList(AcfunConstants.entertainment_star)
	}

	@Get('rank/life')
	@ApiOperation({ summary: '获取 Acfun · 生活' })
	async getLifeRank() {
		return this.AcfunService.getRankList(AcfunConstants.life)
	}

	@Get('rank/life/daily')
	@ApiOperation({ summary: '获取 Acfun · 生活 · 生活日常' })
	async getLifeDailyRank() {
		return this.AcfunService.getRankList(AcfunConstants.life_daily)
	}

	@Get('rank/life/cute')
	@ApiOperation({ summary: '获取 Acfun · 生活 · 萌宠' })
	async getLifeCuteRank() {
		return this.AcfunService.getRankList(AcfunConstants.life_cute)
	}

	@Get('rank/life/food')
	@ApiOperation({ summary: '获取 Acfun · 生活 · 美食' })
	async getLifeFoodRank() {
		return this.AcfunService.getRankList(AcfunConstants.life_food)
	}

	@Get('rank/life/travel')
	@ApiOperation({ summary: '获取 Acfun · 生活 · 旅行' })
	async getLifeTravelRank() {
		return this.AcfunService.getRankList(AcfunConstants.life_travel)
	}

	@Get('rank/life/manual')
	@ApiOperation({ summary: '获取 Acfun · 生活 · 手工·绘画' })
	async getLifeManualRank() {
		return this.AcfunService.getRankList(AcfunConstants.life_manual)
	}

	@Get('rank/life/beauty')
	@ApiOperation({ summary: '获取 Acfun · 生活 · 美妆·造型' })
	async getLifeBeautyRank() {
		return this.AcfunService.getRankList(AcfunConstants.life_beauty)
	}

	@Get('rank/music')
	@ApiOperation({ summary: '获取 Acfun · 音乐' })
	async getMusicRank() {
		return this.AcfunService.getRankList(AcfunConstants.music)
	}

	@Get('rank/music/cure')
	@ApiOperation({ summary: '获取 Acfun · 音乐 · 治愈系' })
	async getMusicCureRank() {
		return this.AcfunService.getRankList(AcfunConstants.music_cure)
	}

	@Get('rank/music/original')
	@ApiOperation({ summary: '获取 Acfun · 音乐 · 原创·翻唱' })
	async getMusicOriginalRank() {
		return this.AcfunService.getRankList(AcfunConstants.music_original)
	}

	@Get('rank/music/play')
	@ApiOperation({ summary: '获取 Acfun · 音乐 · 演奏·乐器' })
	async getMusicPlayRank() {
		return this.AcfunService.getRankList(AcfunConstants.music_play)
	}

	@Get('rank/music/vocal/oid')
	@ApiOperation({ summary: '获取 Acfun · 音乐 · Vocaloid' })
	async getMusicVocalOidRank() {
		return this.AcfunService.getRankList(AcfunConstants.music_vocal_oid)
	}

	@Get('rank/music/comprehensive')
	@ApiOperation({ summary: '获取 Acfun · 音乐 · 综合音乐' })
	async getMusicComprehensiveRank() {
		return this.AcfunService.getRankList(AcfunConstants.music_comprehensive)
	}

	@Get('rank/music/radio')
	@ApiOperation({ summary: '获取 Acfun · 音乐 · 音乐选集·电台' })
	async getMusicRadioRank() {
		return this.AcfunService.getRankList(AcfunConstants.music_radio)
	}

	@Get('rank/dance')
	@ApiOperation({ summary: '获取 Acfun · 舞蹈·偶像' })
	async getDanceRank() {
		return this.AcfunService.getRankList(AcfunConstants.dance)
	}

	@Get('rank/dance/lamb')
	@ApiOperation({ summary: '获取 Acfun · 舞蹈·偶像 · 宅舞' })
	async getDanceLambRank() {
		return this.AcfunService.getRankList(AcfunConstants.dance_lamb)
	}

	@Get('rank/dance/integrated')
	@ApiOperation({ summary: '获取 Acfun · 舞蹈·偶像 · 综合舞蹈' })
	async getDanceIntegratedRank() {
		return this.AcfunService.getRankList(AcfunConstants.dance_integrated)
	}

	@Get('rank/dance/idol')
	@ApiOperation({ summary: '获取 Acfun · 舞蹈·偶像 · 偶像' })
	async getDanceIdolRank() {
		return this.AcfunService.getRankList(AcfunConstants.dance_idol)
	}

	@Get('rank/dance/chinese/dance')
	@ApiOperation({ summary: '获取 Acfun · 舞蹈·偶像 · 中国舞' })
	async getDanceChineseDanceRank() {
		return this.AcfunService.getRankList(AcfunConstants.dance_chinese_dance)
	}

	@Get('rank/game')
	@ApiOperation({ summary: '获取 Acfun · 游戏' })
	async getGameRank() {
		return this.AcfunService.getRankList(AcfunConstants.game)
	}

	@Get('rank/game/pvp')
	@ApiOperation({ summary: '获取 Acfun · 游戏 · 王者荣耀' })
	async getGamePvpRank() {
		return this.AcfunService.getRankList(AcfunConstants.game_pvp)
	}

	@Get('rank/game/mc')
	@ApiOperation({ summary: '获取 Acfun · 游戏 · 我的世界' })
	async getGameMcRank() {
		return this.AcfunService.getRankList(AcfunConstants.game_mc)
	}

	@Get('rank/game/gp')
	@ApiOperation({ summary: '获取 Acfun · 游戏 · 和平精英' })
	async getGameGpRank() {
		return this.AcfunService.getRankList(AcfunConstants.game_gp)
	}

	@Get('rank/game/id5')
	@ApiOperation({ summary: '获取 Acfun · 游戏 · 第五人格' })
	async getGameId5Rank() {
		return this.AcfunService.getRankList(AcfunConstants.game_id5)
	}

	@Get('rank/game/lol')
	@ApiOperation({ summary: '获取 Acfun · 游戏 · 英雄联盟' })
	async getGameLolRank() {
		return this.AcfunService.getRankList(AcfunConstants.game_lol)
	}

	@Get('rank/game/e/sports')
	@ApiOperation({ summary: '获取 Acfun · 游戏 · 电子竞技' })
	async getGameESportsRank() {
		return this.AcfunService.getRankList(AcfunConstants.game_e_sports)
	}

	@Get('rank/game/online')
	@ApiOperation({ summary: '获取 Acfun · 游戏 · 网络游戏' })
	async getGameOnlineRank() {
		return this.AcfunService.getRankList(AcfunConstants.game_online)
	}

	@Get('rank/game/stand/alone')
	@ApiOperation({ summary: '获取 Acfun · 游戏 · 主机单机' })
	async getGameStandAloneRank() {
		return this.AcfunService.getRankList(AcfunConstants.game_stand_alone)
	}

	@Get('rank/game/mobile')
	@ApiOperation({ summary: '获取 Acfun · 游戏 · 手机游戏' })
	async getGameMobileRank() {
		return this.AcfunService.getRankList(AcfunConstants.game_mobile)
	}

	@Get('rank/game/board')
	@ApiOperation({ summary: '获取 Acfun · 游戏 · 桌游卡牌' })
	async getGameBoardRank() {
		return this.AcfunService.getRankList(AcfunConstants.game_board)
	}

	@Get('rank/science')
	@ApiOperation({ summary: '获取 Acfun · 科技' })
	async getScienceRank() {
		return this.AcfunService.getRankList(AcfunConstants.science)
	}

	@Get('rank/science/garage')
	@ApiOperation({ summary: '获取 Acfun · 科技 · 手办模玩' })
	async getScienceGarageRank() {
		return this.AcfunService.getRankList(AcfunConstants.science_garage)
	}

	@Get('rank/science/science')
	@ApiOperation({ summary: '获取 Acfun · 科技 · 科技制造' })
	async getScienceScienceRank() {
		return this.AcfunService.getRankList(AcfunConstants.science_science)
	}

	@Get('rank/science/humanities/popularization')
	@ApiOperation({ summary: '获取 Acfun · 科技 · 人文科普' })
	async getScienceHumanitiesPopularizationRank() {
		return this.AcfunService.getRankList(AcfunConstants.science_humanities_popularization)
	}

	@Get('rank/science/car')
	@ApiOperation({ summary: '获取 Acfun · 科技 · 汽车' })
	async getScienceCarRank() {
		return this.AcfunService.getRankList(AcfunConstants.science_car)
	}

	@Get('rank/science/numerical')
	@ApiOperation({ summary: '获取 Acfun · 科技 · 数码家电' })
	async getScienceNumericalRank() {
		return this.AcfunService.getRankList(AcfunConstants.science_numerical)
	}

	@Get('rank/science/speech')
	@ApiOperation({ summary: '获取 Acfun · 科技 · 演讲·公开课' })
	async getScienceSpeechRank() {
		return this.AcfunService.getRankList(AcfunConstants.science_speech)
	}

	@Get('rank/science/advertisement')
	@ApiOperation({ summary: '获取 Acfun · 科技 · 广告' })
	async getScienceAdvertisementRank() {
		return this.AcfunService.getRankList(AcfunConstants.science_advertisement)
	}

	@Get('rank/video')
	@ApiOperation({ summary: '获取 Acfun · 影视' })
	async getVideoRank() {
		return this.AcfunService.getRankList(AcfunConstants.video)
	}

	@Get('rank/video/k/pop')
	@ApiOperation({ summary: '获取 Acfun · 影视 · 影视混剪' })
	async getVideoKPopRank() {
		return this.AcfunService.getRankList(AcfunConstants.video_k_pop)
	}

	@Get('rank/video/preview')
	@ApiOperation({ summary: '获取 Acfun · 影视 · 预告·花絮' })
	async getVideoPreviewRank() {
		return this.AcfunService.getRankList(AcfunConstants.video_preview)
	}

	@Get('rank/video/movie')
	@ApiOperation({ summary: '获取 Acfun · 影视 · 电影杂谈' })
	async getVideoMovieRank() {
		return this.AcfunService.getRankList(AcfunConstants.video_movie)
	}

	@Get('rank/video/chasing')
	@ApiOperation({ summary: '获取 Acfun · 影视 · 追剧社' })
	async getVideoChasingRank() {
		return this.AcfunService.getRankList(AcfunConstants.video_chasing)
	}

	@Get('rank/video/show')
	@ApiOperation({ summary: '获取 Acfun · 影视 · 综艺show' })
	async getVideoShowRank() {
		return this.AcfunService.getRankList(AcfunConstants.video_show)
	}

	@Get('rank/video/short')
	@ApiOperation({ summary: '获取 Acfun · 影视 · 纪录片·短片' })
	async getVideoShortRank() {
		return this.AcfunService.getRankList(AcfunConstants.video_short)
	}

	@Get('rank/sport')
	@ApiOperation({ summary: '获取 Acfun · 体育' })
	async getSportRank() {
		return this.AcfunService.getRankList(AcfunConstants.sport)
	}

	@Get('rank/sport/comprehensive')
	@ApiOperation({ summary: '获取 Acfun · 体育 · 综合体育' })
	async getSportComprehensiveRank() {
		return this.AcfunService.getRankList(AcfunConstants.sport_comprehensive)
	}

	@Get('rank/sport/football')
	@ApiOperation({ summary: '获取 Acfun · 体育 · 足球' })
	async getSportFootballRank() {
		return this.AcfunService.getRankList(AcfunConstants.sport_football)
	}

	@Get('rank/sport/basketball')
	@ApiOperation({ summary: '获取 Acfun · 体育 · 篮球' })
	async getSportBasketballRank() {
		return this.AcfunService.getRankList(AcfunConstants.sport_basketball)
	}

	@Get('rank/sport/combat')
	@ApiOperation({ summary: '获取 Acfun · 体育 · 搏击健身' })
	async getSportCombatRank() {
		return this.AcfunService.getRankList(AcfunConstants.sport_combat)
	}

	@Get('rank/sport/speed')
	@ApiOperation({ summary: '获取 Acfun · 体育 · 极限竞速' })
	async getSportSpeedRank() {
		return this.AcfunService.getRankList(AcfunConstants.sport_speed)
	}

	@Get('rank/fish')
	@ApiOperation({ summary: '获取 Acfun · 鱼塘' })
	async getFishRank() {
		return this.AcfunService.getRankList(AcfunConstants.fish)
	}

	@Get('rank/fish/law')
	@ApiOperation({ summary: '获取 Acfun · 鱼塘 · 普法安全' })
	async getFishLawRank() {
		return this.AcfunService.getRankList(AcfunConstants.fish_law)
	}

	@Get('rank/fish/military')
	@ApiOperation({ summary: '获取 Acfun · 鱼塘 · 国防军事' })
	async getFishMilitaryRank() {
		return this.AcfunService.getRankList(AcfunConstants.fish_military)
	}

	@Get('rank/fish/history')
	@ApiOperation({ summary: '获取 Acfun · 鱼塘 · 历史' })
	async getFishHistoryRank() {
		return this.AcfunService.getRankList(AcfunConstants.fish_history)
	}

	@Get('rank/fish/positive')
	@ApiOperation({ summary: '获取 Acfun · 鱼塘 · 新鲜事·正能量' })
	async getFishPositiveRank() {
		return this.AcfunService.getRankList(AcfunConstants.fish_positive)
	}

	@Get('rank/article')
	@ApiOperation({ summary: '获取 Acfun · 文章' })
	async getArticleRank() {
		return this.AcfunService.getRankList(AcfunConstants.article)
	}

	@Get('rank/article/anime')
	@ApiOperation({ summary: '获取 Acfun · 文章 · 动漫' })
	async getArticleAnimeRank() {
		return this.AcfunService.getRankList(AcfunConstants.article_anime)
	}

	@Get('rank/article/information')
	@ApiOperation({ summary: '获取 Acfun · 文章 · 资讯' })
	async getArticleInformationRank() {
		return this.AcfunService.getRankList(AcfunConstants.article_information)
	}

	@Get('rank/article/life')
	@ApiOperation({ summary: '获取 Acfun · 文章 · 生活' })
	async getArticleLifeRank() {
		return this.AcfunService.getRankList(AcfunConstants.article_life)
	}

	@Get('rank/article/game')
	@ApiOperation({ summary: '获取 Acfun · 文章 · 游戏' })
	async getArticleGameRank() {
		return this.AcfunService.getRankList(AcfunConstants.article_game)
	}

	@Get('rank/article/advertisement')
	@ApiOperation({ summary: '获取 Acfun · 文章 · 广而告之' })
	async getArticleAdvertisementRank() {
		return this.AcfunService.getRankList(AcfunConstants.article_advertisement)
	}
}
