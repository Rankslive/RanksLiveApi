import { ThreeSixKrConstants } from '../constants/three.six.kr.constants'

export type ThreeSixKrType = (typeof ThreeSixKrConstants)[keyof typeof ThreeSixKrConstants]['value']
