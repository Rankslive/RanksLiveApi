import { AcfunConstants } from '../constants/acfun.constants'

export interface IAcfunChannel {
    name: string
    channelId: number | ''
    subChannelId: number | ''
}

export interface AcfunChannel {
    [key: string]: IAcfunChannel
}

export type AcfunChanelType = keyof typeof AcfunConstants
