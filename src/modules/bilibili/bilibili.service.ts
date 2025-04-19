import { Injectable } from '@nestjs/common'
import request from '@/utils/request'
import { BASE_USER_AGENT } from '@/constants/base.constants'
import { ResponseData } from '@/types/response.data'
import { encodeRid } from '@/utils/bilibili/rid'
import { BiliBiliSeasonType } from '@/types/bilibili'

@Injectable()
export class BilibiliService {
	async getComprehensiveHotRankList(): Promise<ResponseData[] & []> {
		const { data } = await request({
			method: 'get',
			url: 'https://api.bilibili.com/x/web-interface/ranking/v2',
			headers: {
				'User-Agent': BASE_USER_AGENT
			}
		})

		if (!data) {
			return []
		}

		return data.data?.list.map((item: any) => {
			return {
				title: item.title,
				view: item.stat.view,

				url: `https://www.bilibili.com/video/${item.bvid}`,
				create_time: item.ctime
			}
		})
	}

	async getPopularPreciousRankList(): Promise<ResponseData[] & []> {
		const queryParams = {
			page_size: 100,
			page: 1,

			web_location: 333.934
		}

		const query = await encodeRid(queryParams)

		const { data } = await request({
			method: 'get',
			url: 'https://api.bilibili.com/x/web-interface/popular/precious',
			headers: {
				'User-Agent': BASE_USER_AGENT
			},
			params: query
		})

		if (!data) {
			return []
		}

		return data.data?.list.map((item: any) => {
			return {
				title: item.title,
				view: item.stat.view,
				url: `https://www.bilibili.com/video/${item.bvid}`,
				create_time: item.ctime
			}
		})
	}

	async getWebRankList(type: BiliBiliSeasonType) {
		const queryParams = {
			day: 3,
			season_type: type,
			web_location: 333.934
		}

		const query = await encodeRid(queryParams)

		const { data } = await request({
			method: 'get',
			url: 'https://api.bilibili.com/pgc/web/rank/list',
			headers: {
				'User-Agent': BASE_USER_AGENT
			},
			params: query
		})

		if (!data) {
			return []
		}

		return data?.result?.list.map((item: any) => {
			return {
				title: item.title,
				view: item.stat.view,
				url: item.url,
				create_time: 0
			}
		})
	}

	async getSeasonRankList(type: BiliBiliSeasonType) {
		const queryParams = {
			day: 3,
			season_type: type,
			web_location: 333.934
		}

		const query = await encodeRid(queryParams)

		const { data } = await request({
			method: 'get',
			url: 'https://api.bilibili.com/pgc/season/rank/web/list',
			headers: {
				'User-Agent': BASE_USER_AGENT
			},
			params: query
		})

		if (!data) {
			return []
		}

		return data?.data?.list.map((item: any) => {
			return {
				title: item.title,
				view: item.stat.view,
				url: item.url,
				create_time: 0
			}
		})
	}

	async getRankListV2(type: BiliBiliSeasonType) {
		const queryParams = {
			rid: type,
			type: 'all',
			web_location: 333.934
		}

		const query = await encodeRid(queryParams)

		const { data } = await request({
			method: 'get',
			url: 'https://api.bilibili.com/x/web-interface/ranking/v2',
			headers: {
				'User-Agent': BASE_USER_AGENT
			},
			params: query
		})

		if (!data) {
			return []
		}

		return data?.data?.list.map((item: any) => {
			return {
				title: item.title,
				view: item.stat.view,
				url: item.url,
				create_time: 0
			}
		})
	}
}
