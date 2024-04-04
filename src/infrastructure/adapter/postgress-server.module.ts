import { Module, Global } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import config from '../../config/config';
import { Conductor } from '../../entities/taxi24/conductor.entity';
import { Pasajero } from '../../entities/taxi24/pasajero.entity';
import { Viaje } from '../../entities/taxi24/viaje.entity';
import { Factura } from '../../entities/taxi24/factura.entity';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        const { db, host, user, pass, port } = configService.postgress;
        console.log(
          'db',
          db,
          'host',
          host,
          'user',
          user,
          'pass',
          pass,
          'port',
          port,
        );
        return {
          type: 'postgres',
          host,
          port,
          username: user,
          password: pass,
          database: db,
          entities: [Conductor, Pasajero, Viaje, Factura],
          options: {
            trustServerCertificate: true,
          },
          autoLoadEntities: true,
          synchronize: true,
          logging: true,
        };
      },
    }),
  ],
  controllers: [],
  providers: [],
  exports: [TypeOrmModule],
})
export class PostgressServerModule {}
