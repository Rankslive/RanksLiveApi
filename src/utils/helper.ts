/**
 * 将常量对象转换为枚举
 * @param content
 */
export const transformConstantsObjectToEnum = (content: object) => {
	return Object.keys(content).reduce((o, k) => ({ ...o, [k]: k }), {} as Record<string, string>)
}

/**
 * 过滤对象
 * @param obj
 * @param keys
 */
export const filterObject = <T extends Record<string, any>, K extends keyof T>(
	obj: T,
	keys: readonly K[]
): Omit<T, K> => {
	return Object.fromEntries(Object.entries(obj).filter(([key]) => !keys.includes(key as K))) as Omit<T, K>
}

/**
 * 将常量对象转换为选项
 * @param obj
 */
export const transformConstantsToOptions = <
	T extends {
		[key: string]: {
			name: string
			[key: string]: any
		}
	}
>(
	obj: T
) => {
	return Object.keys(obj).map((item: string) => {
		const name = obj[item].name
		return {
			value: item,
			name,
			description: name
		}
	})
}

/**
 * 生成 UUID
 */
export const uuid = () => {
	// 生成 16 个随机字节（128 位）
	const bytes = new Uint8Array(16)
	crypto.getRandomValues(bytes)

	// 设置版本号（第 7 个字节的高 4 位为 4）
	bytes[6] = (bytes[6] & 0x0f) | 0x40 // 0100xxxx

	// 设置变体（第 9 个字节的高 2 位为 10）
	bytes[8] = (bytes[8] & 0x3f) | 0x80 // 10xxxxxx

	// 将字节数组转换为 UUID 格式的字符串
	const hex = Array.from(bytes)
		.map((byte) => byte.toString(16).padStart(2, '0'))
		.join('')

	return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`
}
