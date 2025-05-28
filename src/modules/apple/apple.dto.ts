import {
    AppleCategoryType,
    AppleCountryType,
    AppleMusicDailyType,
    AppleMusicType,
    AppleRankType
} from '@/modules/apple/types/apple'
import { ApiPropertyEnumExtend } from '@/common/decorator/api.property.enum.extend.decorator'
import { IsEnum } from 'class-validator'
import { transformConstantsObjectToEnum } from '@/utils/helper'
import { validateMessage } from '@/utils/validation.prompts'
import { AppleCategory, AppleCountry, AppleRankList } from '@/modules/apple/constants/apple.constants'
import { AppleMusicDaily, AppleMusicGenres } from '@/modules/apple/constants/apple.music.constants'

export class AppleCountryParamDto {
    @ApiPropertyEnumExtend('国家归属', AppleCountry, 'us')
    @IsEnum(transformConstantsObjectToEnum(AppleCountry), { message: validateMessage('country') })
    country: AppleCountryType
}

export class AppleAppStoreParamDto extends AppleCountryParamDto {
    @ApiPropertyEnumExtend('榜单类型', AppleRankList, 'free')
    @IsEnum(transformConstantsObjectToEnum(AppleRankList), { message: validateMessage('rankType') })
    rankType: AppleRankType

    @ApiPropertyEnumExtend('app、游戏分类', AppleCategory, 'app-sport')
    @IsEnum(transformConstantsObjectToEnum(AppleCategory), { message: validateMessage('category') })
    category: AppleCategoryType
}

export class AppleMusicParamDto extends AppleCountryParamDto {
    @ApiPropertyEnumExtend('音乐类型', AppleMusicGenres, 'music')
    @IsEnum(transformConstantsObjectToEnum(AppleMusicGenres), { message: validateMessage('type') })
    type: AppleMusicType
}

export class AppleMusicDailyParamDto {
    @ApiPropertyEnumExtend('国家归属', AppleMusicDaily, 'global')
    @IsEnum(transformConstantsObjectToEnum(AppleMusicDaily), { message: validateMessage('country') })
    country: AppleMusicDailyType
}
