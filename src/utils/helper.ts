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
