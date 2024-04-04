/*
https://docs.nestjs.com/providers#services
*/

import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ViajeDTO } from './dto/viajes.dto';
import { ConfigService } from '@nestjs/config';
import { Viaje } from '../../entities/taxi24/viaje.entity';
import { Pasajero } from '../../entities/taxi24/pasajero.entity';
import { Conductor } from '../../entities/taxi24/conductor.entity';
import { Factura } from '../../entities/taxi24/factura.entity';

@Injectable()
export class ViajeService {
  constructor(
    @InjectRepository(Viaje)
    private viajeRepository: Repository<Viaje>,
    @InjectRepository(Pasajero)
    private pasajeroRepository: Repository<Pasajero>,
    @InjectRepository(Conductor)
    private conductorRepository: Repository<Conductor>,
    @InjectRepository(Factura)
    private facturaRepository: Repository<Factura>,
    private config: ConfigService,
  ) {}
  public async createViaje(requestDTO: ViajeDTO) {
    const pasajero = await this.pasajeroRepository.findOne({
      select: ['estado'],
      where: { id: requestDTO.pasajeroId },
    });

    console.log(pasajero);

    const conductor = await this.conductorRepository.findOne({
      select: ['estado'],
      where: { id: requestDTO.conductorId },
    });

    if (
      pasajero === undefined ||
      conductor === undefined ||
      pasajero === null ||
      conductor === null
    ) {
      throw new BadRequestException('El pasajero o el conductor no existen');
    }

    if (pasajero.estado === true && conductor.estado === true) {
      return this.viajeRepository.insert({
        ...requestDTO,
        conductor: { id: requestDTO.conductorId },
        pasajero: { id: requestDTO.pasajeroId },
        fechaCreacion: new Date(),
        fechaActualizacion: new Date(),
        estado: 'pendiente',
      });
    } else {
      throw new BadRequestException(
        'El pasajero o el conductor no están activos',
      );
    }
  }

  public async listViaje(estado: string) {
    return this.viajeRepository.find({
      relations: ['conductor', 'pasajero'],
      where: { estado },
    });
  }

  public async listViajeId(id: string) {
    const idNumber = Number(id);
    console.log(idNumber);
    return this.viajeRepository.findOne({
      relations: ['conductor', 'pasajero'],
      where: { id: idNumber },
    });
  }

  public async updateStatusViaje(id: string, estado: string) {
    const idNumber = Number(id);
    let fechafin = null;
    const viaje = await this.viajeRepository.findOne({
      relations: ['conductor', 'pasajero'],
      where: { id: idNumber },
    });

    console.log(viaje);
    if (estado === 'completado') {
      await this.facturaRepository.insert({
        conductor: { id: viaje.conductor.id },
        pasajero: { id: viaje.pasajero.id },
        total: Number(viaje.costo),
        fechaCreacion: new Date(),
        fechaActualizacion: new Date(),
      });

      fechafin = new Date();
    }
    await this.viajeRepository.update(
      { id: idNumber },
      { estado, fechaActualizacion: new Date(), fechaFin: fechafin },
    );

    return this.viajeRepository.findOne({
      relations: ['conductor', 'pasajero'],
      where: { id: idNumber },
    });
  }
}
