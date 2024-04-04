import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Conductor } from './conductor.entity';
import { Pasajero } from './pasajero.entity';

@Entity({ synchronize: true })
export class Factura {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  total: number;

  @ManyToOne(() => Conductor, (conductor) => conductor.facturas)
  conductor: Conductor;

  @ManyToOne(() => Pasajero, (pasajero) => pasajero.facturas)
  pasajero: Pasajero;

  @Column()
  fechaCreacion: Date;

  @Column()
  fechaActualizacion: Date;
}
