import { Injectable } from '@nestjs/common'
import { ResponseData } from '@/types/response.data'
import request from '@/utils/request'

@Injectable()
export class DouyinService {
	/**
	 * 获取热榜数据
	 */
	async getHotRankList(): Promise<ResponseData[] & []> {
		const { data } = await request({
			method: 'get',
			// https://aweme.snssdk.com/aweme/v1/hot/search/list/
			url: 'https://www.iesdouyin.com/web/api/v2/hotsearch/billboard/word/',
			params: {
				reflow_source: 'reflow_page',
				web_id: '7488166462781392438',
				device_id: '7488166462781392438',
				user_cip: '2a0f:7803:fae1:1::524',
				_zy_number: 12
			}
		})

		if (!data) {
			return []
		}

		return data.word_list.map((item: any) => {
			return {
				title: item.word,
				view: item.hot_value,
				url: `https://www.douyin.com/root/search/${encodeURIComponent(item.word)}`,
				create_time: 0
			}
		})
	}
}
