import bigInt from 'big-integer'
import CryptoJS from 'crypto-js'

/**
 * 感谢 kirklin/music-skyway 项目提供
 * @links https://github.com/kirklin/music-skyway
 */
export class NeteaseCrypto {
    // AES加密相关常量
    static readonly AES_NONCE: string = '0CoJUm6Qyw8W8jud' // AES第一次加密密钥，固定值
    static readonly AES_VI: string = '0102030405060708' // AES偏移量，固定值
    static readonly SECRET_KEY = 'TA3YiYCfY2dDJQgg' // AES第二次加密密钥
    static readonly ENC_SEC_KEY =
        '84ca47bca10bad09a6b04c5c927ef077d9b9f1e37098aa3eac6ea70eb59df0aa28b691b7e75e4f1f9831754919ea784c8f74fbfadf2898b0be17849fd656060162857830e241aba44991601f137624094c114ea8d17bce815b0cd4e5b8e2fbaba978c6d1d14dc3d1faf852bdd28818031ccdaaa13a6018e1024e2aae98844210'

    static secondKey: string = '' // AES第二次加密密钥在加密时随机获取

    // RSA加密相关常量
    static readonly RSA_MODULUS: string =
        '00e0b509f6259df8642dbc35662901477df22677ec152b5ff68ace615bb7b725152b3ab17a876aea8a5aa76d2e417629ec4ee341f56135fccf695280104e0312ecbda92557c93870114af6c9d05c4f7f0c3685b7a46bee255932575cce10b424d813cfe4875d3e82047b97ddef52741d546b8e289dc6935b3ece0462db0a22b8e7'
    static readonly RSA_PUBLIC_KEY: string = '010001' // RSA公钥

    /**
     * 生成指定长度的随机字符串
     * @param length 随机字符串长度，默认为16
     */
    public static generateRandomString(length: number = 16): string {
        const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
        let randomString = ''
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length)
            randomString += characters.charAt(randomIndex)
        }
        return randomString
    }

    /**
     * 使用AES加密并进行BASE64编码
     * @param data 待加密的数据
     * @param secretKey 加密密钥
     */
    public static aesEncrypt(data: string, secretKey: string): string {
        const key = CryptoJS.enc.Utf8.parse(secretKey) // 将密钥转换为Utf8格式
        const iv = CryptoJS.enc.Utf8.parse(this.AES_VI) // 将偏移量转换为Utf8格式
        const srcs = CryptoJS.enc.Utf8.parse(data)
        const encrypted = CryptoJS.AES.encrypt(srcs, key, { iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 })
        return encrypted.toString()
    }

    /**
     * 在字符串左侧填充指定字符，使其达到指定长度
     * @param str 原始字符串
     * @param targetLength 目标长度
     * @param padChar 填充字符，默认为'0'
     */
    public static leftPad(str: string, targetLength: number, padChar: string = '0'): string {
        while (str.length < targetLength) {
            str = padChar + str
        }
        return str
    }

    /**
     * RSA加密
     * @param text 加密内容
     * @param publicKey RSA公钥
     * @param modulus RSA模数
     */
    public static rsaEncrypt(text: string, publicKey: string, modulus: string): string {
        const reversedText = text.split('').reverse().join('') // 反转文本内容
        const biText = bigInt(CryptoJS.enc.Utf8.parse(reversedText).toString(), 16) // 将文本内容转换为BigInt
        const biEx = bigInt(publicKey, 16)
        const biMod = bigInt(modulus, 16)
        const biResult = biText.modPow(biEx, biMod) // 计算RSA加密结果
        return this.leftPad(biResult.toString(16), 256) // 将结果转换为16进制字符串并左侧填充至256位
    }

    /**
     * 加密算法入口
     * @param obj 待加密对象
     */
    public static encrypt(obj: any): { params: string; encSecKey: string } {
        const jsonString = JSON.stringify(obj) // 将对象转换为JSON字符串
        const aesSecondKey = this.generateRandomString(16) // 生成AES第二次加密密钥
        const aesFirstEncrypted = this.aesEncrypt(jsonString, this.AES_NONCE) // 使用AES加密（第一次）
        const aesSecondEncrypted = this.aesEncrypt(aesFirstEncrypted, aesSecondKey) // 使用AES加密（第二次）
        const rsaEncryptedSecondKey = this.rsaEncrypt(aesSecondKey, this.RSA_PUBLIC_KEY, this.RSA_MODULUS) // 对AES第二次密钥进行RSA加密
        return {
            params: aesSecondEncrypted,
            encSecKey: rsaEncryptedSecondKey
        }
    }
}
