import { ConductorService } from './conductor.service';
import { ConductorController } from './conductor.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Conductor } from '../../entities/taxi24/conductor.entity';
import { Pasajero } from '../../entities/taxi24/pasajero.entity';
import { Viaje } from '../../entities/taxi24/viaje.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Conductor, Pasajero, Viaje])],
  controllers: [ConductorController],
  providers: [ConductorService],
})
export class ConductorModule {}
