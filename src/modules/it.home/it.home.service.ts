import { Injectable } from '@nestjs/common'
import { ItHomeListRankType, ItHomeType } from './types/it.home'
import { ItHomeList } from '@/modules/it.home/constants/it.home.constants'
import { ResponseData } from '../../../types/response.data'
import { HttpClientService } from '@/common/service/http-client.service'

@Injectable()
export class ItHomeService {
	constructor(private readonly httpClientService: HttpClientService) {}

	async getRankList(rankType: ItHomeType, type: ItHomeListRankType): Promise<ResponseData[] & []> {
		const { data } = await this.httpClientService.request({
			method: 'get',
			url: `https://napi.ithome.com/api/news/gethotbang/${rankType}`,
			headers: {
				'User-Agent': 'ITHomeClientMacOS/8.99.10 (iPad; iOS 18.0; Scale/2.00)'
			}
		})

		if (!data) {
			return []
		}

		// 0,12
		// 12,24
		// 24,36
		const slice = ItHomeList[type]
		return data.data.list
			.filter((item) => item.feedType === 10011)
			.slice(slice[0], slice[1])
			.map((item: any) => {
				return {
					title: item.feedContent.newsData.title,
					view: item.feedContent.newsData.commentCount,
					url: item.feedContent.newsData.shareUrl,
					create_time: item.feedContent.newsData.lastUpdateTimeStamp
				}
			})
	}
}
