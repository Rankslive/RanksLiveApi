import { Module } from '@nestjs/common';
import { NeteaseNewController } from './netease.new.controller';
import { NeteaseNewService } from './netease.new.service';

@Module({
  controllers: [NeteaseNewController],
  providers: [NeteaseNewService]
})
export class NeteaseNewModule {}
