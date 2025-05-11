import { Injectable } from '@nestjs/common'
import { BASE_USER_AGENT } from '@/constants/base.constants'
import { douBanType } from './types/douban'
import { HttpClientService } from '@/common/service/http-client.service'

// 数据源 https://m.douban.com/home_guide

@Injectable()
export class DoubanService {
	constructor(private readonly httpClientService: HttpClientService) {}

	/**
	 * 获取实时热门数据
	 * 数据来源 https://m.douban.com/subject_collection/subject_real_time_hotest
	 * @param type
	 */
	async getRealRankList(type: douBanType) {
		const { data } = await this.httpClientService.request({
			method: 'get',
			url: `https://m.douban.com/rexxar/api/v2/subject_collection/${type}_real_time_hotest/items`,
			params: {
				type: type,
				start: 0,
				count: 10,
				for_mobile: 1
			},
			headers: {
				'User-Agent': BASE_USER_AGENT,
				Referer: `https://m.douban.com/subject_collection/${type}_real_time_hotest`
			}
		})

		if (!data) {
			return []
		}

		return data.subject_collection_items.map((item: any) => {
			return {
				title: item.title,
				view: item.score,
				url: `https://movie.douban.com/subject/${item.id}/`,
				create_time: 0
			}
		})
	}
}
