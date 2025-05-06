import { ThreeSixKrConstants } from '@/modules/three.six.kr/constants/three.six.kr.constants'

export type ThreeSixKrType = (typeof ThreeSixKrConstants)[keyof typeof ThreeSixKrConstants]['value']
