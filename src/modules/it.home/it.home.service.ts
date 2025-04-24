import { Injectable } from '@nestjs/common'
import request from '@/utils/request'
import { ItHomeListRankType, ItHomeType } from '../../../types/it.home'
import { ItHomeList } from '@/constants/it.home.constants'
import { ResponseData } from '../../../types/response.data'

@Injectable()
export class ItHomeService {
	async getRankList(rankType: ItHomeType, type: ItHomeListRankType): Promise<ResponseData[] & []> {
		const { data } = await request({
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
