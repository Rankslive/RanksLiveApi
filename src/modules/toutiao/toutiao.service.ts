import { Injectable } from '@nestjs/common'
import { ResponseData } from '../../../types/response.data'
import { HttpClientService } from '../../common/service/http-client.service'
import { BASE_USER_AGENT } from '../../constants/base.constants'

@Injectable()
export class ToutiaoService {
    constructor(private readonly httpClientService: HttpClientService) {}

    async getHotRankList(): Promise<ResponseData[] & []> {
        const { data } = await this.httpClientService.request({
            method: 'get',
            url: 'https://www.toutiao.com/hot-event/hot-board/',
            params: {
                origin: 'toutiao_pc'
            },
            headers: {
                'User-Agent': BASE_USER_AGENT
            }
        })

        if (!data) {
            return []
        }

        return data.data.map((item: any) => {
            return {
                title: item.Title,
                view: item.HotValue,
                url: item.Url,
                create_time: 0
            }
        })
    }
}
