import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { enviroments } from './config/enviroments';
import config from './config/config';
import { PostgressServerModule } from './infrastructure/adapter/postgress-server.module';
import { HttpServerModule } from './infrastructure/adapter/http-server.module';
import { ConductorModule } from './app/conductor/conductor.module';
import { PasajeroModule } from './app/pasajero/pasajero.module';
import { ViajeModule } from './app/viajes/viajes.module';

@Module({
  imports: [
    PostgressServerModule,
    HttpServerModule,
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.string().required(),
        POSTGRESS_DB: Joi.string().required(),
        POSTGRESS_HOST: Joi.string().required(),
        POSTGRESS_USER: Joi.string().required(),
        POSTGRESS_PASSWORD: Joi.string().required(),
        POSTGRESS_PORT: Joi.string().required(),
      }),
    }),
    ConductorModule,
    PasajeroModule,
    ViajeModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
