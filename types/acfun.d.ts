export interface AcfunChannelType {
	name: string
	channelId: number | ''
	subChannelId: number | ''
}

export interface AcfunChannel {
	[key: string]: AcfunChannelType
}
