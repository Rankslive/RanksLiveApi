import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import * as process from 'node:process'
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core'
import { AllExceptionFilter } from '@/common/filters/all-exception.filter'
import { ResponseInterceptor } from '@/common/interceptor/response.interceptor'
import { AppController } from './app.controller'
import { BaiduModule } from '@/modules/baidu/baidu.module'
import { WeiboModule } from '@/modules/weibo/weibo.module'
import { JuejinModule } from '@/modules/juejin/juejin.module'
import { HupuModule } from '@/modules/hupu/hupu.module'
import { ToutiaoModule } from '@/modules/toutiao/toutiao.module'
import { ZhihuModule } from '@/modules/zhihu/zhihu.module'
import { CsdnModule } from '@/modules/csdn/csdn.module'
import { WeReadModule } from './modules/weread/we.read.module'
import { DouyinModule } from './modules/douyin/douyin.module'
import { BilibiliModule } from './modules/bilibili/bilibili.module'
import { YqqModule } from './modules/yqq/yqq.module'
import { AcfunModule } from './modules/acfun/acfun.module'
import { NeteaseModule } from './modules/netease/netease.module'
import { ThreeSixKrModule } from './modules/three.six.kr/three.six.kr.module'
import { V2exModule } from './modules/v2ex/v2ex.module'
import { ItHomeModule } from './modules/it.home/it.home.module'
import { ThePaperModule } from './modules/the.paper/the.paper.module'
import { SspaiModule } from './modules/sspai/sspai.module'
import { QqNewsModule } from './modules/qq.news/qq.news.module'
import { DoubanModule } from './modules/douban/douban.module'
import { AliyunModule } from './modules/aliyun/aliyun.module'
import { HistoryModule } from './modules/history/history.module'
import { SinaNewsModule } from './modules/sina.news/sina.news.module'
import { IfengNewsModule } from './modules/ifeng.news/ifeng.news.module'
import { OschinaModule } from './modules/oschina/oschina.module'
import { CommonModule } from './common/module/common.module'
import { CloudTencentModule } from './modules/cloud.tencent/cloud.tencent.module'

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: [`.env.${process.env.NODE_ENV}`]
		}),
		CommonModule,

		BaiduModule,
		HupuModule,
		WeiboModule,
		CsdnModule,
		JuejinModule,
		ToutiaoModule,
		ZhihuModule,
		WeReadModule,
		DouyinModule,
		BilibiliModule,
		YqqModule,
		AcfunModule,
		NeteaseModule,
		ThreeSixKrModule,
		V2exModule,
		ItHomeModule,
		ThePaperModule,
		SspaiModule,
		QqNewsModule,
		DoubanModule,
		AliyunModule,
		HistoryModule,
		SinaNewsModule,
		IfengNewsModule,
		OschinaModule,
		CloudTencentModule

	],
	providers: [
		// 全局 异常过滤器
		{ provide: APP_FILTER, useClass: AllExceptionFilter },
		// 全局 响应拦截器
		{ provide: APP_INTERCEPTOR, useClass: ResponseInterceptor }
	],
	controllers: [
		AppController
	]
})
export class AppModule {}
