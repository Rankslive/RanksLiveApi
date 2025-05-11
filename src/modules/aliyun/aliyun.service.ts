import { Injectable } from '@nestjs/common'
import { BASE_USER_AGENT } from '@/constants/base.constants'
import dayjs from 'dayjs'
import { HttpClientService } from '@/common/service/http-client.service'

@Injectable()
export class AliyunService {
	constructor(private readonly httpClientService: HttpClientService) {}

	async getRealArticleList() {
		const { data } = await this.httpClientService.request({
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
