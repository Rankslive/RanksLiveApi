import {
    cloudTencentConstants,
    cloudTencentZoneConstants
} from '../constants/cloud.tencent.constants'

export type cloudTencentType = (typeof cloudTencentConstants)[keyof typeof cloudTencentConstants]['value']
export type cloudTencentTypeKey = keyof typeof cloudTencentConstants

export type cloudTencentZoneType = (typeof cloudTencentZoneConstants)[keyof typeof cloudTencentZoneConstants]['id']
export type cloudTencentZoneTypeKey = keyof typeof cloudTencentZoneConstants
