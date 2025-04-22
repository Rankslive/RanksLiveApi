import { Injectable } from '@nestjs/common'
import request from '@/utils/request'
import { BASE_USER_AGENT } from '@/constants/base.constants'
import dayjs from 'dayjs'

@Injectable()
export class AliyunService {
	async getRealArticleList() {
		const { data } = await request({
			method: 'get',
			url: 'https://developer.aliyun.com/developer/api/index/202109/listIndexItemFeed',
			params: {
				type: 'comprehensive',
				tagType: 'recommend',
				pageNum: 1,
				pageSize: 50
			},
			headers: {
				'User-Agent': BASE_USER_AGENT
			}
		})

		if (!data) {
			return []
		}

		return data.data.list.map((item: any) => {
			return {
				title: item.title,
				url: item.url,
				view: item.viewCount,
				create_time: dayjs(item.gmtCreate).unix()
			}
		})
	}
}
