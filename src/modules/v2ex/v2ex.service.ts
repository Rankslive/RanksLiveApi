import { Injectable } from '@nestjs/common'
import { BASE_USER_AGENT } from '@/constants/base.constants'
import { HttpClientService } from '@/common/service/http-client.service'

@Injectable()
export class V2exService {
	constructor(private readonly httpClientService: HttpClientService) {}

	async getRankHot() {
		const { data } = await this.httpClientService.request({
			method: 'get',
			url: 'https://www.v2ex.com/api/topics/hot.json',
			headers: {
				'User-Agent': BASE_USER_AGENT
			}
		})

		if (!data) {
			return []
		}

		return data.map((item: any) => {
			return {
				title: item.title,
				view: item.replies,
				url: item.url,

				create_time: item.last_modified
			}
		})
	}
}
