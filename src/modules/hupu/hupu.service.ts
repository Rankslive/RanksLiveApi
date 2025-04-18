import { Injectable } from '@nestjs/common'
import request from '@/utils/request'
import { ResponseData } from '@/types/response.data'
import { BASE_USER_AGENT } from '@/constants/base.constants'

const moduleName = {
	basketball: '篮球热榜',
	football: '足球热榜',
	street: '步行街热榜'
}

@Injectable()
export class HupuService {
	async getHupuHot(type: 'basketball' | 'football' | 'street'): Promise<ResponseData[]> {
		const data = await this.getData()
		return data
			.filter((item: any) => item.title === moduleName[type])[0]
			.hotList.map((item: { title: string; tid: string }) => ({
				title: item.title,
				view: null,
				url: `https://bbs.hupu.com/${item.tid}.html`,
				create_time: 0
			}))
	}

	async getData() {
		const content = await request({
			method: 'get',
			url: `https://www.hupu.com/`,
			headers: {
				'User-Agent': BASE_USER_AGENT
			}
		})
		const scriptMatches = [...content.data.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/gi)]
		let resultStr = ''

        for (const [, , scriptContent] of scriptMatches) {
            const dataMatch = scriptContent.match(/window\.\$\$data\s*=\s*([\s\S]*?)(?=\s*;|$)/)
            if (dataMatch) {
                resultStr = dataMatch[1]
                break
            }
        }
        return JSON.parse(resultStr).hotList
    }
}
