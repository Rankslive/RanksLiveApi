import { Injectable } from '@nestjs/common'
import dayjs from 'dayjs'
import { HttpClientService } from 'src/common/service/http-client.service'
import { uuid } from '../../utils/helper'

@Injectable()
export class IfengNewsService {
    constructor(private readonly httpClientService: HttpClientService) {}

    async getHotNewsRank() {
        const uid = uuid().split('-').join('')
        const { data } = await this.httpClientService.request({
            method: 'post',
            url: 'https://nine.ifeng.com/hotspotlistv2',
            params: {
                gv: '7.83.5',
                av: 0,
                proid: 'ifengnews',
                os: 'ios_18.0',
                df: 'iPad8%2C6',
                vt: 5,
                screen: '375x667',
                publishid: 4002,
                uid: uid,
                uid2: uid,
                vuid: uid,
                nw: 'wifi',
                ps: 1,
                sessionStartTime: Date.now(),
                st: Date.now()
            }
        })

        if (!data) {
            return []
        }

        return data.data.list
            .filter((item: any) => item.type === 'doc' && item.title)
            .map((item: any) => {
                return {
                    title: item.title,
                    view: item.hotLabel.hotGrade,
                    url: item.link.weburl,
                    create_time: dayjs(item.updateTime).unix()
                }
            })
    }
}
