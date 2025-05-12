import { Injectable } from '@nestjs/common'
import { NeteaseCrypto } from '@/utils/netease.crypto'
import { BASE_USER_AGENT } from '@/constants/base.constants'
import { NeteaseChannelType } from './types/netease'
import { ResponseData } from '../../../types/response.data'
import { HttpClientService } from '@/common/service/http-client.service'

@Injectable()
export class NeteaseService {
    constructor(private readonly httpClientService: HttpClientService) {}

    async getRankList(channel: NeteaseChannelType): Promise<ResponseData[] & []> {
        const { data } = await this.httpClientService.request({
            method: 'post',
            url: 'https://music.163.com/weapi/v6/playlist/detail',
            params: NeteaseCrypto.encrypt({
                id: channel,
                n: 100,
                csrf_token: ''
            }),
            headers: {
                'User-Agent': BASE_USER_AGENT
            }
        })

        if (!data) {
            return []
        }

        return data?.playlist?.tracks?.map((item: any) => {
            return {
                title: item.name,
                view: 0,
                url: `https://music.163.com/#/song?id=${item.id}`,
                create_time: item.publishTime
            }
        })
    }
}
