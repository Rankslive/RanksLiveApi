import { Injectable } from '@nestjs/common'
import { IAcfunChannel } from './types/acfun'
import { ResponseData } from '../../../types/response.data'
import { HttpClientService } from '../../common/service/http-client.service'
import { BASE_USER_AGENT } from '../../constants/base.constants'

@Injectable()
export class AcfunService {
    constructor(private readonly httpClientService: HttpClientService) {}

    async getRankList(channel: IAcfunChannel): Promise<ResponseData[] & []> {
        const { data } = await this.httpClientService.request({
            method: 'get',
            url: 'https://www.acfun.cn/rest/pc-direct/rank/channel',
            params: {
                channelId: channel.channelId,
                subChannelId: channel.subChannelId,
                rankLimit: 30,
                rankPeriod: 'DAY'
            },
            headers: {
                'User-Agent': BASE_USER_AGENT
            }
        })

        if (!data) {
            return []
        }

        return data?.rankList.map((item: any) => {
            return {
                title: item.contentTitle,
                view: item.viewCount,
                url: `https://www.acfun.cn/v/ac${item.contentId}`,
                create_time: item.contributeTime
            }
        })
    }
}
