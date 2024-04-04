import { Module, Global } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

@Global()
@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class HttpServerModule {}
