import { Injectable } from '@nestjs/common'
import { HttpClientService } from '../../common/service/http-client.service'
import { AppleCategoryValueType, AppleCountryType, AppleRankType } from './types/apple'
import { AppleRankList } from './constants/apple.constants'
import { BASE_USER_AGENT } from '../../constants/base.constants'

@Injectable()
export class AppleService {
    constructor(private readonly httpClientService: HttpClientService) {}

    /**
     * 获取 ios app store 排行榜
     * @param rankType
     * @param country
     * @param genre
     * @param limit
     */
    async getIosAppStoreRank(
        rankType: AppleRankType,
        country: AppleCountryType,
        genre: AppleCategoryValueType,
        limit: number = 100
    ) {
        const type = AppleRankList[rankType]['value']

        const { data } = await this.httpClientService.request({
            method: 'get',
            url: `https://itunes.apple.com/${country}/rss/${type}/limit=${limit}/genre=${genre}/json`,
            headers: {
                'User-Agent': BASE_USER_AGENT
            }
        })

        return (
            data?.feed?.entry.map((item: any) => {
                return {
                    title: item['title']['label'],
                    view: 0,
                    url: item['id']['label'],
                    create_time: 0
                }
            }) || []
        )
    }
}
