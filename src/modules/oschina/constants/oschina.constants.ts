export const oschinaGroups = {
    ascend: {
        name: '昇腾Ascend',
        value: 'ascend',
        id: 51
    },
    'Llama2-Chinese': {
        name: 'Llama中文社区',
        value: 'Llama2-Chinese',
        id: 45
    },
    llm: {
        name: '大模型',
        value: 'llm',
        id: 44
    },
    cloud: {
        name: '云计算',
        value: 'cloud',
        id: 9
    },
    database: {
        name: '数据库',
        value: 'database',
        id: 10
    },
    skill: {
        name: '开发技能',
        value: 'skill',
        id: 27
    },
    'cross-front': {
        name: '大前端',
        value: 'cross-front',
        id: 28
    },
    'unstructured-data': {
        name: '非结构化数据',
        value: 'unstructured-data',
        id: 43
    },
    openharmony: {
        name: 'OpenHarmony专区',
        value: 'openharmony',
        id: 16
    },
    paddlepaddle: {
        name: '飞桨专区',
        value: 'paddlepaddle',
        id: 17
    },
    osgovernance: {
        name: '开源治理',
        value: 'osgovernance',
        id: 19
    },
    kylinos: {
        name: '银河麒麟专区',
        value: 'kylinos',
        id: 46
    },
    oneos: {
        name: 'OneOS',
        value: 'oneos',
        id: 41
    },
    programmer: {
        name: '程序人生',
        value: 'programmer',
        id: 14
    },
    'ai-bigdata': {
        name: 'AI & 大数据',
        value: 'ai-bigdata',
        id: 8
    },
    'hardware-iot': {
        name: '硬件 & IoT',
        value: 'hardware-iot',
        id: 11
    },
    trend: {
        name: '行业趋势',
        value: 'trend',
        id: 15
    },
    architecture: {
        name: '软件架构',
        value: 'architecture',
        id: 26
    },
    openvino: {
        name: 'OpenVINO 中文社区',
        value: 'openvino',
        id: 35
    },
    cloudwise: {
        name: '云智慧AIOps技术社区',
        value: 'cloudwise',
        id: 47
    },
    blockchain: {
        name: '区块链',
        value: 'blockchain',
        id: 6
    },
    devops: {
        name: 'DevOps',
        value: 'devops',
        id: 13
    },
    media: {
        name: '多媒体处理',
        value: 'media',
        id: 20
    },
    game: {
        name: '游戏开发',
        value: 'game',
        id: 21
    },
    network: {
        name: '网络技术',
        value: 'network',
        id: 22
    },
    test: {
        name: '软件测试',
        value: 'test',
        id: 23
    },
    ops: {
        name: '运维',
        value: 'ops',
        id: 24
    },
    'cyber-security': {
        name: '信息安全',
        value: 'cyber-security',
        id: 25
    },
    'edgex-foundry': {
        name: 'EdgeX 中文社区',
        value: 'edgex-foundry',
        id: 34
    },
    OSCTraining: {
        name: 'OSCTraining',
        value: 'OSCTraining',
        id: 36
    },
    lfossa: {
        name: 'LF开源软件学园',
        value: 'lfossa',
        id: 37
    },
    postgresql: {
        name: 'PostgreSQL',
        value: 'postgresql',
        id: 38
    },
    huawei: {
        name: 'HarmonyOS开发者社区',
        value: 'huawei',
        id: 40
    },
    fishfish: {
        name: '摸鱼专区',
        value: 'fishfish',
        id: 42
    }
} as const

// 开源博客排序方式
export const oschinaBlogRankSort = {
    time: {
        name: '最新推荐',
        value: 'time'
    },
    hot: {
        name: '每日创作',
        value: 'hot'
    }
} as const

// 开源博客文章分类类型
export const oschinaBlogArticle = {
    aiLlm: { name: 'AI & 大模型', id: 4, value: 'aiLlm' },
    cloudNative: { name: '云原生', id: 3, value: 'cloudNative' },
    frontEnd: { name: '大前端', id: 12, value: 'frontEnd' },
    architecture: { name: '软件架构', id: 10, value: 'architecture' },
    devSkill: { name: '开发技能', id: 11, value: 'devSkill' },
    hardwareIoT: { name: '硬件 & IoT', id: 6, value: 'hardwareIoT' },
    devOps: { name: 'DevOps', id: 9, value: 'devOps' },
    os: { name: '操作系统', id: 19, value: 'os' },
    programmer: { name: '程序人生', id: 8, value: 'programmer' },
    database: { name: '数据库', id: 5, value: 'database' },
    blockchainWeb3: { name: '区块链 & Web3 & 元宇宙', id: 2, value: 'blockchainWeb3' },
    testOps: { name: '软件测试 & 运维', id: 14, value: 'testOps' },
    infoSec: { name: '信息安全', id: 13, value: 'infoSec' },
    netTech: { name: '网络技术', id: 15, value: 'netTech' },
    industryTrend: { name: '行业趋势', id: 7, value: 'industryTrend' },
    osgovernance: { name: '开源治理', id: 1, value: 'osgovernance' },
    gameDev: { name: '游戏开发', id: 16, value: 'gameDev' },
    mediaProc: { name: '多媒体处理', id: 17, value: 'mediaProc' }
} as const
