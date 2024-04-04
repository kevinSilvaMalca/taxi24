import { DataSource } from 'typeorm/data-source';
import { Conductor } from 'src/entities/taxi24/conductor.entity';
import { Pasajero } from 'src/entities/taxi24/pasajero.entity';
import { Viaje } from 'src/entities/taxi24/viaje.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'test',
  password: 'test',
  database: 'test',
  synchronize: true,
  logging: true,
  entities: [Conductor, Pasajero, Viaje],
  subscribers: [],
  migrations: [],
});
