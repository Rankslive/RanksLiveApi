import { Injectable } from '@nestjs/common'
import request from '@/utils/request'
import { ResponseData } from '../../../types/response.data'
import dayjs from 'dayjs'
import { load } from 'cheerio'

@Injectable()
export class HistoryService {
	async getHistory(month: string): Promise<ResponseData[] & []> {
		const day = dayjs().format('MMDD')

		const { data } = await request({
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
