import { Injectable } from '@nestjs/common'
import { sinaNewsType } from './types/sina.news'
import request from '@/utils/request'
import { ResponseData } from '../../../types/response.data'

@Injectable()
export class SinaNewsService {
	async getNewsRank(type: sinaNewsType): Promise<ResponseData[]> {
		const { data } = await request({
			method: 'get',
			url: 'https://newsapp.sina.cn/api/hotlist',
			params: {
				newsId: `HB-1-snhs/top_news_list-${type}`,
				localCityCode: 'CN00000000000000',
				wm: '',
				date: ''
			},
			headers: {
				'User-Agent':
					'Mozilla/5.0 (iPad; CPU OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148'
			}
		})

		if (!data) {
			return []
		}

		return data.data.hotList.map((item: any) => {
			return {
				title: item.info.title,
				view: item.info.hotValue,
				url: item.base.base.url,
				create_time: 0
			}
		})
	}
}
