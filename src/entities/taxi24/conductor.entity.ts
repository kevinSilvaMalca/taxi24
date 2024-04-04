import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Viaje } from './viaje.entity';
import { columns } from 'mssql';
import { Factura } from './factura.entity';

@Entity({ synchronize: true })
export class Conductor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  edad: number;

  @Column()
  licenciaConducir: string;

  @Column()
  ubicacion: number;

  @Column()
  estado: boolean;

  @OneToMany(() => Viaje, (viaje) => viaje.conductor)
  viajes: Viaje[];

  @OneToMany(() => Factura, (factura) => factura.conductor)
  facturas: Factura[];

  @Column()
  fechaCreacion: Date;

  @Column()
  fechaActualizacion: Date;
}
