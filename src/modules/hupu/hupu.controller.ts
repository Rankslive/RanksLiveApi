import { Controller, Get, Query } from '@nestjs/common'
import { HupuService } from './hupu.service';

@Controller('hupu')
export class HupuController {
    constructor(private readonly hupuService: HupuService) {}

    @Get('hot')
    async getHupuHot(@Query('type') type: 'basketball' | 'football' | 'street') {
        return this.hupuService.getHupuHot(type)
    }
}
