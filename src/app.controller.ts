import { Controller, Get } from '@nestjs/common'
import { version } from '../package.json'
import { ApiOperation, ApiTags } from '@nestjs/swagger'
import { ApiMaintainers } from '@/common/decorator/api.maintainers.decorator'

@Controller('')
@ApiTags('ApiHub')
export class AppController {
	@Get()
	@ApiOperation({ summary: 'ApiHub' })
	@ApiMaintainers('lonewolfyx')
	getHello(): object {
		return {
			name: 'RanksLive ApiHub',
			version: version
		}
	}
}
