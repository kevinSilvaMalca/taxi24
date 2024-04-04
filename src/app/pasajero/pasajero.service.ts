/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PasajeroDTO } from './dto/pasajero.dto';
import { ConfigService } from '@nestjs/config';
import { Pasajero } from '../../entities/taxi24/pasajero.entity';
import { Conductor } from '../../entities/taxi24/conductor.entity';

@Injectable()
export class PasajeroService {
  constructor(
    @InjectRepository(Pasajero)
    private pasajeroRepository: Repository<Pasajero>,
    @InjectRepository(Conductor)
    private conductorRepository: Repository<Conductor>,
    private config: ConfigService,
  ) {}
  public async createPasajero(requestDTO: PasajeroDTO) {
    return this.pasajeroRepository.insert({
      ...requestDTO,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date(),
    });
  }

  public async listPasajero() {
    return this.pasajeroRepository.find();
  }

  public async listPasajeroACtive(estado: string) {
    if (estado == 'true') {
      return this.pasajeroRepository.findBy({ estado: true });
    } else {
      return this.pasajeroRepository.findBy({ estado: false });
    }
  }

  public async listPasajeroId(id: string) {
    const idNumber = Number(id);
    return this.pasajeroRepository.findOne({
      where: { id: idNumber },
    });
  }

  public async listPasjeroConductorRadio(id: string) {
    const idNumber = Number(id);
    const ubicacionPasajero = await this.pasajeroRepository.findOne({
      select: ['ubicacion'],
      where: { id: idNumber },
    });

    const rangoMenor = ubicacionPasajero.ubicacion - 10;
    const rangoMayor = ubicacionPasajero.ubicacion + 10;

    return this.conductorRepository
      .createQueryBuilder('conductor')
      .where('conductor.ubicacion BETWEEN :minUbicacion AND :maxUbicacion', {
        minUbicacion: rangoMenor,
        maxUbicacion: rangoMayor,
      })
      .limit(3)
      .getMany();
  }
}
