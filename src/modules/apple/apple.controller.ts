import { Controller, Get, Param } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { ApiDescription } from '@/common/decorator/api.description.decorator'
import { AppleAppStoreParamDto } from '@/modules/apple/apple.dto'
import { SourceUrl } from '@/common/decorator/source.url.decorator'
import { ApiMaintainers } from '@/common/decorator/api.maintainers.decorator'
import { AppleService } from '@/modules/apple/apple.service'
import { AppleCategory } from '@/modules/apple/constants/apple.constants'

// https://apps.apple.com/cn/charts/iphone
// https://juejin.cn/post/7051512478630412301
// https://tophub.today/apple
// https://github.com/facundoolano/app-store-scraper/blob/master/lib/constants.js
// https://github.com/gonzoua/random-stuff/blob/master/appstorereviews.rb
// https://github.com/don9z/appstore/blob/master/rank.py
// https://github.com/chm994483868/iAppStore_Flutter/blob/main/iappstore_flutter/lib/enum/ranking_type.dart
// https://github.com/digitalmethodsinitiative/itunes-app-scraper/blob/master/itunes_app_scraper/util.py
// https://github.com/xiqi99520/fakeappstore/blob/master/http/modules/store.js

@Controller('apple')
@ApiTags('Apple')
export class AppleController {
    constructor(private readonly appleService: AppleService) {
    }

    @Get('rank/app.store/ios/:rankType/:country/:category')
    @ApiDescription('获取 iPhone & iPad AppStore 榜单')
    @ApiMaintainers('lonewolfyx')
    @SourceUrl('https://apps.apple.com/cn/charts/iphone')
    async getIosAppStoreRank(@Param() param: AppleAppStoreParamDto) {
        const { rankType, country, category } = param
        // return { rankType, country, category, device }
        return await this.appleService.getIosAppStoreRank(rankType, country, AppleCategory[category]['id'])
    }
}
