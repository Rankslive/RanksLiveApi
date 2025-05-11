import { Injectable } from '@nestjs/common'
import { BASE_USER_AGENT } from '@/constants/base.constants'
import { ResponseData } from '../../../types/response.data'
import { encodeRid } from '@/utils/bilibili/rid'
import { BiliBiliSeasonType } from './types/bilibili'
import { HttpClientService } from '@/common/service/http-client.service'

@Injectable()
export class BilibiliService {
	constructor(private readonly httpClientService: HttpClientService) {}

	private async sendRequest(url: string, queryParams: any) {
		try {
			const query = await encodeRid(queryParams)

			const { data } = await this.httpClientService.request({
				method: 'get',
				url,
				headers: {
					'User-Agent': BASE_USER_AGENT
				},
				params: query
			})

			return data
		} catch (error) {
			console.error(`请求 ${url} 时出错:`, error)
			return null
		}
	}

	// 封装数据处理逻辑
	private processData(data: any): ResponseData[] {
		if (!data) {
			return []
		}

		const list = data.data?.list || data.result?.list

		return (
			list?.map((item: any) => {
				return {
					title: item.title,
					view: item.stat.view,
					url: item.url ? item.url : `https://www.bilibili.com/video/${item.bvid}`,
					create_time: item.ctime || 0
				}
			}) || []
		)
	}

	async getComprehensiveHotRankList(): Promise<ResponseData[]> {
		const data = await this.sendRequest('https://api.bilibili.com/x/web-interface/ranking/v2', {})
		return this.processData(data)
	}

	async getPopularPreciousRankList(): Promise<ResponseData[]> {
		const queryParams = {
			page_size: 100,
			page: 1,
			web_location: 333.934
		}

		const data = await this.sendRequest('https://api.bilibili.com/x/web-interface/popular/precious', queryParams)

		return this.processData(data)
	}

	async getWebRankList(type: BiliBiliSeasonType): Promise<ResponseData[]> {
		const queryParams = {
			day: 3,
			season_type: type,
			web_location: 333.934
		}
		const data = await this.sendRequest('https://api.bilibili.com/pgc/web/rank/list', queryParams)
		return this.processData(data)
	}

	async getSeasonRankList(type: BiliBiliSeasonType): Promise<ResponseData[]> {
		const queryParams = {
			day: 3,
			season_type: type,
			web_location: 333.934
		}

		const data = await this.sendRequest('https://api.bilibili.com/pgc/season/rank/web/list', queryParams)

		return this.processData(data)
	}

	async getRankListV2(type: BiliBiliSeasonType): Promise<ResponseData[]> {
		const queryParams = {
			rid: type,
			type: 'all',
			web_location: 333.934
		}
		const data = await this.sendRequest('https://api.bilibili.com/x/web-interface/ranking/v2', queryParams)

		return this.processData(data)
	}
}
