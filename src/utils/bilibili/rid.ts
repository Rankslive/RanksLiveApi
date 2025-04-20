import request from '@/utils/request'
import { BASE_USER_AGENT } from '@/constants/base.constants'
import dayjs from 'dayjs'
import { md5 } from '@/utils/md5'

export const getImgFormatConfig = async (): Promise<{ imgKey: string; subKey: string }> => {
	const result = await request({
		method: 'get',
		url: 'https://api.bilibili.com/x/web-interface/nav',
		headers: {
			'User-Agent': BASE_USER_AGENT,
			Cookie: '__at_once=17312931139607680978;'
		}
	})

	const { img_url, sub_url } = result.data?.data?.wbi_img

	const getKeyFromURL = (url: string) => url.substring(url.lastIndexOf('/') + 1, url.length).split('.')[0]

	return {
		imgKey: getKeyFromURL(img_url) || '',
		subKey: getKeyFromURL(sub_url) || ''
	}
}
export const encodeRid = async (params: object): Promise<URLSearchParams> => {
	// 过滤特殊字符
	const chrFilter = /[!'()*]/g

	const query = new URLSearchParams()

	const { imgKey, subKey } = await getImgFormatConfig()

	// 添加时间戳参数
	const paramsWithTs: Record<string, string> = {
		...params,
		wts: dayjs().unix().toString()
	}
	// 按照字典序遍历参数
	const sortedKeys = Object.keys(paramsWithTs).sort()
	for (const key of sortedKeys) {
		const value = paramsWithTs[key].toString().replace(chrFilter, '')
		query.set(key, value)
	}

	const mixinKey = [
		46,
		47,
		18,
		2,
		53,
		8,
		23,
		32,
		15,
		50,
		10,
		31,
		58,
		3,
		45,
		35,
		27,
		43,
		5,
		49,
		33,
		9,
		42,
		19,
		29,
		28,
		14,
		39,
		12,
		38,
		41,
		13,
		37,
		48,
		7,
		16,
		24,
		55,
		40,
		61,
		26,
		17,
		0,
		1,
		60,
		51,
		30,
		4,
		22,
		25,
		54,
		21,
		56,
		59,
		6,
		63,
		57,
		62,
		11,
		36,
		20,
		34,
		44,
		52
	]
		.map((n) => `${imgKey}${subKey}`[n])
		.join('')
		.slice(0, 32)

	// 计算wbi签名
	const wbiSign = md5(query.toString() + mixinKey)

	query.set('w_rid', wbiSign)

	return query
}
