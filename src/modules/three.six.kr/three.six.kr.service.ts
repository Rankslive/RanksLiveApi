import { Injectable } from '@nestjs/common'
import { ThreeSixKrType } from './types/three.six.kr'
import { HttpClientService } from '../../common/service/http-client.service'
import { ThreeSixKrConstants } from './constants/three.six.kr.constants'

@Injectable()
export class ThreeSixKrService {
    constructor(private readonly httpClientService: HttpClientService) {}

    async getHotRankList(type: ThreeSixKrType) {
        const { data } = await this.httpClientService.request({
            method: 'post',
            url: `https://gateway.36kr.com/api/mis/nav/home/nav/rank/${type}`,
            data: {
                partner_id: 'wap',
                param: {
                    siteId: 1,
                    platformId: 2
                },
                timestamp: Date.now()
            },
            headers: {
                'User-Agent': ' 36kr-iOS/11.5.3 (iPhone12_Pro_Max); Build 10; iOS 14.5; Scale/3.0;'
            }
        })

        if (!data) {
            return []
        }

        return data?.data[ThreeSixKrConstants[type]['list']].map((item: any) => {
            const { templateMaterial } = item
            return {
                title: templateMaterial.widgetTitle,
                view: templateMaterial.statRead,
                url: `https://www.36kr.com/p/${templateMaterial.itemId}`,
                create_time: templateMaterial.publishTime
            }
        })
    }
}
