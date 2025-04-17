import { Injectable } from '@nestjs/common'
import request from '@/utils/request'
import { ResponseData } from '@/types/response.data'

@Injectable()
export class BaiduService {
	async getBaiduHot(type: string): Promise<ResponseData[]> {
		const result = await this.getData(type)

		return result.map((item: any) => {
			return {
				title: item.query,
				view: item.hotScore,
				url: `https://www.baidu.com/s?wd=${encodeURIComponent(item.query)}`,
				create_time: 0
			}
		})
	}

	private async getData(type: string) {
		const content = await request({
			method: 'get',
			url: `https://top.baidu.com/board?tab=${type}`,
			headers: {
				'User-Agent':
					'Mozilla/5.0 (iPhone; CPU iPhone OS 14_2_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) FxiOS/1.0 Mobile/12F69 Safari/605.1.15'
			}
		})

		const matchResult = content.data.match(/<!--s-data:(.*?)-->/s)
		return JSON.parse(matchResult[1]).cards[0].content
	}
}
