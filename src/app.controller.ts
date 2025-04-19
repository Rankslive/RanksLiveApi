import { Controller, Get } from '@nestjs/common'
import { version } from '../package.json'
import { ApiOperation, ApiTags } from '@nestjs/swagger'

@Controller('')
@ApiTags('ApiHub')
export class AppController {
	@Get()
	@ApiOperation({ summary: 'ApiHub' })
	getHello(): object {
		return {
			name: 'RanksLive ApiHub',
			version: version
		}
	}
}
