import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Conductor } from './conductor.entity';
import { Pasajero } from './pasajero.entity';

@Entity()
export class Viaje {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Conductor, (conductor) => conductor.viajes)
  conductor: Conductor;

  @ManyToOne(() => Pasajero, (pasajero) => pasajero.viajes)
  pasajero: Pasajero;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fechaInicio: Date;

  @Column({ type: 'timestamp', nullable: true })
  fechaFin: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  costo: number;

  @Column()
  estado: string;

  @Column()
  fechaCreacion: Date;

  @Column()
  fechaActualizacion: Date;
}
