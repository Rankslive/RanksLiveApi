import { Global, Module } from '@nestjs/common'
import { HttpClientService } from '../service/http-client.service'

@Global()
@Module({
    providers: [HttpClientService],
    exports: [HttpClientService]
})
export class CommonModule {}
