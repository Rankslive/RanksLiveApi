// 数据源 post https://cloud.tencent.com/developer/api/column/get-classify-list-by-scene {"scene":0}
export const cloudTencentConstants = {
    cloud: { name: '云计算', value: '1' },
    ai: { name: '人工智能', value: '2' },
    front_end: { name: '前端', value: '3' },
    back_end: { name: '后端', value: '4' },
    programmer: { name: '编程语言', value: '5' },
    database: { name: '数据库', value: '6' },
    big_data: { name: '大数据', value: '7' },
    audio_video: { name: '音视频', value: '8' },
    science: { name: '安全', value: '9' },
    internet: { name: '物联网', value: '10' },
    hardware: { name: '硬件', value: '11' },
    operation: { name: '运维', value: '12' },
    test: { name: '测试', value: '13' },
    network: { name: '网络与通信', value: '14' },
    architecture: { name: '架构设计', value: '16' },
    development_tools: { name: '开发工具', value: '19' },
    operating_system: { name: '操作系统', value: '20' },
    career_development: { name: '职业发展', value: '21' },
    algorithm: { name: '算法', value: '23' }
} as const

// 数据源：https://cloud.tencent.com/developer/zone/list
export const cloudTencentZoneConstants = {
    tencentcloudsmartadvisor: {
        name: '腾讯云顾问专区',
        value: 'tencentcloudsmartadvisor',
        id: 17
    },
    tm: {
        name: '腾讯云架构师技术同盟交流圈',
        value: 'tm',
        id: 37
    },
    tencentcloudedgeone: {
        name: '腾讯云边缘安全加速平台EO专区',
        value: 'tencentcloudedgeone',
        id: 31
    },
    ipaas: {
        name: '腾讯轻联专区',
        value: 'ipaas',
        id: 5
    },
    deepseek: {
        name: '玩转 DeepSeek 交流区',
        value: 'deepseek',
        id: 38
    },
    cloudnative: {
        name: '腾讯云原生专区',
        value: 'cloudnative',
        id: 3
    },
    lightgame: {
        name: '腾讯轻量云游戏服专区',
        value: 'lightgame',
        id: 25
    },
    activity: {
        name: '腾讯云开发者社区精选动态',
        value: 'activity',
        id: 34
    },
    lighthouse: {
        name: '腾讯云轻量应用服务器专区',
        value: 'lighthouse',
        id: 24
    },
    tencentdb: {
        name: '腾讯云数据库专区',
        value: 'tencentdb',
        id: 9
    },
    codingdevops: {
        name: '腾讯云CODING专区',
        value: 'codingdevops',
        id: 2
    },
    tencentcloudbase: {
        name: '腾讯云开发专区',
        value: 'tencentcloudbase',
        id: 28
    },
    tencenthunyuan: {
        name: '腾讯混元专区',
        value: 'tencenthunyuan',
        id: 18
    },
    tencentcloudcodeanalysis: {
        name: '腾讯云代码分析专区',
        value: 'tencentcloudcodeanalysis',
        id: 35
    },
    tapd: {
        name: '腾讯云TAPD敏捷协作平台专区',
        value: 'tapd',
        id: 33
    },
    hunyuandit: {
        name: '腾讯混元-Dit专区',
        value: 'hunyuandit',
        id: 30
    },
    tencentecosystemarchitecture: {
        name: '腾讯云生态技术赋能专区',
        value: 'tencentecosystemarchitecture',
        id: 29
    },
    tencentweda: {
        name: '腾讯云微搭专区',
        value: 'tencentweda',
        id: 27
    },
    dnspod: {
        name: '腾讯云dnspod专区',
        value: 'dnspod',
        id: 23
    },
    opencloudos: {
        name: '腾讯国产开源操作系统专区',
        value: 'opencloudos',
        id: 21
    },
    tencentcouldbockchain: {
        name: '腾讯云区块链专区',
        value: 'tencentcouldbockchain',
        id: 20
    },
    hai: {
        name: '腾讯高性能应用服务专区',
        value: 'hai',
        id: 19
    },
    tcdevopssalon: {
        name: '腾讯云运维技术沙龙专区',
        value: 'tcdevopssalon',
        id: 15
    },
    mediaservices: {
        name: '腾讯云音视频专区',
        value: 'mediaservices',
        id: 13
    },
    bigdata: {
        name: '腾讯云大数据专区',
        value: 'bigdata',
        id: 10
    },
    ai: {
        name: '腾讯云智能专区',
        value: 'ai',
        id: 22
    },
    tcandon: {
        name: '腾讯云安灯专区',
        value: 'tcandon',
        id: 14
    },
    cos: {
        name: '腾讯云存储专区',
        value: 'cos',
        id: 12
    },
    tce: {
        name: '腾讯云TCE专区',
        value: 'tce',
        id: 11
    },
    cloudstudio: {
        name: '腾讯云Cloud Studio专区',
        value: 'cloudstudio',
        id: 1
    },
    steam: {
        name: '游戏服务器部署交流圈',
        value: 'steam',
        id: 8
    },
    't-spark': {
        name: '腾讯星火计划',
        value: 't-spark',
        id: 16
    }
}
