import { AppleCategoryType, AppleCountryType, AppleMusicType, AppleRankType } from '@/modules/apple/types/apple'
import { ApiPropertyEnumExtend } from '@/common/decorator/api.property.enum.extend.decorator'
import { IsEnum } from 'class-validator'
import { transformConstantsObjectToEnum } from '@/utils/helper'
import { validateMessage } from '@/utils/validation.prompts'
import { AppleCategory, AppleCountry, AppleRankList } from '@/modules/apple/constants/apple.constants'
import { AppleMusicGenres } from '@/modules/apple/constants/apple.music.constants'

export class AppleAppStoreParamDto {
    // @ApiPropertyEnumExtend('操作系统类型 ios、mac', AppleSystem, 'ios')
    // @IsEnum(transformConstantsObjectToEnum(AppleSystem), { message: validateMessage('system') })
    // system: AppleSystemType

    @ApiPropertyEnumExtend('榜单类型', AppleRankList, 'free')
    @IsEnum(transformConstantsObjectToEnum(AppleRankList), { message: validateMessage('rankType') })
    rankType: AppleRankType

    @ApiPropertyEnumExtend('国家归属', AppleCountry, 'us')
    @IsEnum(transformConstantsObjectToEnum(AppleCountry), { message: validateMessage('country') })
    country: AppleCountryType

    @ApiPropertyEnumExtend('app、游戏分类', AppleCategory, 'app-sport')
    @IsEnum(transformConstantsObjectToEnum(AppleCategory), { message: validateMessage('category') })
    category: AppleCategoryType

    // @ApiPropertyEnumExtend('设备', AppleDevice, 'iphone')
    // @IsEnum(transformConstantsObjectToEnum(AppleDevice), { message: validateMessage('device') })
    // device: AppleDeviceType
}

export class AppleMusicParamDto {
    @ApiPropertyEnumExtend('国家归属', AppleCountry, 'us')
    @IsEnum(transformConstantsObjectToEnum(AppleCountry), { message: validateMessage('country') })
    country: AppleCountryType

    @ApiPropertyEnumExtend('音乐类型', AppleMusicGenres, 'music')
    @IsEnum(transformConstantsObjectToEnum(AppleMusicGenres), { message: validateMessage('type') })
    type: AppleMusicType
}
