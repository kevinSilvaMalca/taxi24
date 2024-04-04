/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConductorDTO } from './dto/conductor.dto';
import { ConfigService } from '@nestjs/config';
import { Conductor } from '../../entities/taxi24/conductor.entity';

@Injectable()
export class ConductorService {
  constructor(
    @InjectRepository(Conductor)
    private conductorRepository: Repository<Conductor>,
    private config: ConfigService,
  ) {}
  public async createConductor(requestDTO: ConductorDTO) {
    return this.conductorRepository.insert({
      ...requestDTO,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date(),
    });
  }

  public async listConductor() {
    return this.conductorRepository.find();
  }

  public async listConductorACtive(estado: string) {
    if (estado == 'true') {
      return this.conductorRepository.findBy({ estado: true });
    } else {
      return this.conductorRepository.findBy({ estado: false });
    }
  }

  public async listConductorId(id: string) {
    const idNumber = Number(id);
    return this.conductorRepository.findOne({
      where: { id: idNumber },
    });
  }

  public async listConductorRadio() {
    return this.conductorRepository
      .createQueryBuilder('conductor')
      .where('conductor.ubicacion < :ubicacion', { ubicacion: 30 })
      .getMany();
  }
}
