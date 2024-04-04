import { PasajeroService } from './pasajero.service';
import { PasajeroController } from './pasajero.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Viaje } from '../../entities/taxi24/viaje.entity';
import { Pasajero } from '../../entities/taxi24/pasajero.entity';
import { Factura } from '../../entities/taxi24/factura.entity';
import { Conductor } from '../../entities/taxi24/conductor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Viaje, Pasajero, Conductor, Factura])],
  controllers: [PasajeroController],
  providers: [PasajeroService],
})
export class PasajeroModule {}
