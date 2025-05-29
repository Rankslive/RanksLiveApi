import { Injectable } from '@nestjs/common'
import { HttpClientService } from '../../common/service/http-client.service'

@Injectable()
export class XiaohongshuService {
    constructor(private readonly httpClientService: HttpClientService) {}

    async getHotRankList() {
        const { data } = await this.httpClientService.request({
            method: 'get',
            url: 'https://edith.xiaohongshu.com/api/sns/v1/search/hot_list',
            headers: {
                'xy-direction': 22,
                'accept-language': 'zh-Hans-CN;q=1',
                shield: 'XYAAAAAQAAAAEAAABTAAAAUzUWEe4xG1IYD9/c+qCLOlKGmTtFa+lG434Oe+FTRagxxoaz6rUWSZ3+juJYz8RZqct+oNMyZQxLEBaBEL+H3i0RhOBVGrauzVSARchIWFYwbwkV',
                'xy-platform-info':
                    'platform=iOS&version=8.7&build=8070515&deviceId=C323D3A5-6A27-4CE6-AA0E-51C9D4C26A24&bundle=com.xingin.discover',
                'xy-common-params':
                    'app_id=ECFAAF02&build=8070515&channel=AppStore&deviceId=C323D3A5-6A27-4CE6-AA0E-51C9D4C26A24&device_fingerprint=20230920120211bd7b71a80778509cf4211099ea911000010d2f20f6050264&device_fingerprint1=20230920120211bd7b71a80778509cf4211099ea911000010d2f20f6050264&device_model=phone&fid=1695182528-0-0-63b29d709954a1bb8c8733eb2fb58f29&gid=7dc4f3d168c355f1a886c54a898c6ef21fe7b9a847359afc77fc24ad&identifier_flag=0&lang=zh-Hans&launch_id=716882697&platform=iOS&project_id=ECFAAF&sid=session.1695189743787849952190&t=1695190591&teenager=0&tz=Asia/Shanghai&uis=light&version=8.7',
                referer: 'https://app.xhs.cn/'
            }
        })

        return (
            data?.data?.items.map((item: any) => {
                return {
                    title: item.title,
                    view: item.score,
                    url: `https://www.xiaohongshu.com/search_result?keyword=${encodeURIComponent(item.title)}&source=web_explore_feed`,
                    create_time: 0
                }
            }) || []
        )
    }
}
