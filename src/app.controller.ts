import { Controller, Get } from '@nestjs/common'
import { version } from '../package.json'
import { ApiOperation } from '@nestjs/swagger'

@Controller('')
export class AppController {
	@Get()
	@ApiOperation({ summary: '' })
	getHello(): object {
		return {
			name: 'RanksLive ApiHub',
			version: version
		}
	}
}
