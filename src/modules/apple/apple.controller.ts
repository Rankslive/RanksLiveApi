import { Controller, Get, Param } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { ApiDescription } from '@/common/decorator/api.description.decorator'
import { AppleAppStoreParamDto, AppleMusicParamDto } from '@/modules/apple/apple.dto'
import { SourceUrl } from '@/common/decorator/source.url.decorator'
import { ApiMaintainers } from '@/common/decorator/api.maintainers.decorator'
import { AppleService } from '@/modules/apple/apple.service'
import { AppleCategory } from '@/modules/apple/constants/apple.constants'
import { AppleMusicService } from '@/modules/apple/apple.music.service'
import { AppleMusicGenres } from '@/modules/apple/constants/apple.music.constants'

// https://podcasts.apple.com/cn/browse
// https://rss.marketingtools.apple.com/
// https://apps.apple.com/cn/charts/iphone
// https://music.apple.com/cn/new

// https://juejin.cn/post/7051512478630412301
// https://tophub.today/apple
// https://github.com/facundoolano/app-store-scraper/blob/master/lib/constants.js
// https://github.com/gonzoua/random-stuff/blob/master/appstorereviews.rb
// https://github.com/don9z/appstore/blob/master/rank.py
// https://github.com/chm994483868/iAppStore_Flutter/blob/main/iappstore_flutter/lib/enum/ranking_type.dart
// https://github.com/digitalmethodsinitiative/itunes-app-scraper/blob/master/itunes_app_scraper/util.py
// https://github.com/xiqi99520/fakeappstore/blob/master/http/modules/store.js

// iTunes U https://itunes.apple.com/cn/rss/topitunesucourses/limit=200/genre=40000000/json
// 播客 https://itunes.apple.com/cn/rss/toppodcasts/limit=200/genre=26/json
// 音乐 https://itunes.apple.com/us/rss/topalbums/limit=200/genre=34/json
// 图书 https://itunes.apple.com/us/rss/topebooks/limit=200/genre=38/json
// 教科书 https://itunes.apple.com/us/rss/toptextbooks/limit=200/genre=40/json
// 电影 https://itunes.apple.com/us/rss/topmovies/limit=200/genre=33/json
// 电视节目 https://itunes.apple.com/us/rss/toptvepisodes/limit=200/genre=32/json
// 有声读物 https://itunes.apple.com/us/rss/topaudiobooks/limit=200/genre=50000024/json
// 音乐视频 https://itunes.apple.com/us/rss/topmusicvideos/limit=200/genre=31/json

@Controller('apple')
@ApiTags('Apple')
export class AppleController {
    constructor(
        private readonly appleService: AppleService,
        private readonly appleMusicService: AppleMusicService
    ) {}

    @Get('rank/app.store/ios/:rankType/:country/:category')
    @ApiDescription('获取 iPhone & iPad AppStore 榜单')
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://apps.apple.com/cn/charts/iphone')
    async getIosAppStoreRank(@Param() param: AppleAppStoreParamDto) {
        const { rankType, country, category } = param

        return await this.appleService.getIosAppStoreRank(rankType, country, AppleCategory[category]['id'])
    }

    @Get('rank/apple.music/hot/songs/:country/:type')
    @ApiDescription('获取 Apple Music 热门歌曲排行')
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://music.apple.com/')
    async getMusicHotSongRank(@Param() param: AppleMusicParamDto) {
        const { country, type } = param
        return await this.appleMusicService.getMusicHotSongRank(country, AppleMusicGenres[type]['id'])
    }
}
