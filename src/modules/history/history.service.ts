import { Injectable } from '@nestjs/common'
import { ResponseData } from '../../../types/response.data'
import dayjs from 'dayjs'
import { load } from 'cheerio'
import { HttpClientService } from '@/common/service/http-client.service'

@Injectable()
export class HistoryService {
	constructor(private readonly httpClientService: HttpClientService) {}

	async getHistory(month: string): Promise<ResponseData[] & []> {
		const day = dayjs().format('MMDD')

		const { data } = await this.httpClientService.request({
			method: 'get',
			url: `https://baike.baidu.com/cms/home/eventsOnHistory/${month}.json`,
			params: {
				_: Date.now()
			}
		})

		if (!data) {
			return []
		}

		return data?.[month]?.[day].map((item: any) => {
			return {
				title: load(item.title).text().trim(),
				view: 0,
				url: item.link,
				create_time: 0
			}
		})
	}
}
