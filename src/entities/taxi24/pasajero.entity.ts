import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Viaje } from './viaje.entity';
import { Factura } from './factura.entity';

@Entity()
export class Pasajero {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  edad: number;

  @OneToMany(() => Viaje, (viaje) => viaje.pasajero)
  viajes: Viaje[];

  @OneToMany(() => Factura, (factura) => factura.pasajero)
  facturas: Factura[];

  @Column()
  ubicacion: number;

  @Column()
  estado: boolean;

  @Column()
  fechaCreacion: Date;

  @Column()
  fechaActualizacion: Date;
}
