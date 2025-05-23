import {
    AppleCategory,
    AppleCountry,
    AppleDevice,
    AppleRankList,
    AppleSystem
} from '@/modules/apple/constants/apple.constants'
import { AppleMusicDaily, AppleMusicGenres } from '@/modules/apple/constants/apple.music.constants'

export type AppleCategoryType = keyof typeof AppleCategory
export type AppleCategoryValueType = (typeof AppleCategory)[AppleCategoryType]['value']

export type AppleDeviceType = keyof typeof AppleDevice
export type AppleSystemType = keyof typeof AppleSystem
export type AppleCountryType = keyof typeof AppleCountry

export type AppleRankType = keyof typeof AppleRankList

export type AppleMusicType = keyof typeof AppleMusicGenres
export type AppleMusicGenresType = (typeof AppleMusicGenresType)[AppleMusicType]['id']

export type AppleMusicDailyType = keyof typeof AppleMusicDaily
export type AppleMusicDailyValueType = (typeof AppleMusicDailyList)[AppleMusicDailyType]['value']
