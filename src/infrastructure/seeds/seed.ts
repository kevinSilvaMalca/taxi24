// seed.ts
import { createConnection } from 'typeorm';
import { Pasajero } from '../../entities/taxi24/pasajero.entity';
import { Conductor } from '../../entities/taxi24/conductor.entity';
import { Viaje } from '../../entities/taxi24/viaje.entity';

async function seed() {
  const connection = await createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'taxi',
    password: 'PhZO90KL3Dt6fWmo9Y3XVz',
    database: 'taxi24',
    entities: ['src/entities/**/*.ts'],
    synchronize: true,
  });

  const pasajeroRepository = connection.getRepository(Pasajero);
  const conductorRepository = connection.getRepository(Conductor);
  const viajeRepository = connection.getRepository(Viaje);

  const pasajero1 = new Pasajero();
  pasajero1.nombre = 'John Doe';
  pasajero1.edad = 22;
  pasajero1.ubicacion = 20;
  pasajero1.estado = true;
  pasajero1.fechaCreacion = new Date();
  pasajero1.fechaActualizacion = new Date();

  const pasajero2 = new Pasajero();
  pasajero2.nombre = 'Jane Doe';
  pasajero2.edad = 25;
  pasajero2.ubicacion = 40;
  pasajero2.estado = true;
  pasajero2.fechaCreacion = new Date();
  pasajero2.fechaActualizacion = new Date();

  const pasajero3 = new Pasajero();
  pasajero2.nombre = 'Jane Doe';
  pasajero3.edad = 28;
  pasajero3.ubicacion = 10;
  pasajero3.estado = false;
  pasajero3.fechaCreacion = new Date();
  pasajero3.fechaActualizacion = new Date();

  const conductor1 = new Conductor();
  conductor1.nombre = 'Alice';
  conductor1.edad = 20;
  conductor1.licenciaConducir = 'ABC529';
  conductor1.ubicacion = 20;
  conductor1.estado = true;
  conductor1.fechaCreacion = new Date();
  conductor1.fechaActualizacion = new Date();

  const conductor2 = new Conductor();
  conductor2.nombre = 'Bob';
  conductor2.edad = 22;
  conductor2.licenciaConducir = 'A72834';
  conductor2.ubicacion = 30;
  conductor2.estado = true;
  conductor2.fechaCreacion = new Date();
  conductor2.fechaActualizacion = new Date();

  const viaje1 = new Viaje();
  viaje1.estado = 'pendiente';
  viaje1.pasajero = pasajero1;
  viaje1.conductor = conductor1;
  viaje1.costo = 100;
  viaje1.fechaInicio = new Date();
  viaje1.fechaFin = new Date();
  viaje1.fechaCreacion = new Date();
  viaje1.fechaActualizacion = new Date();

  const viaje2 = new Viaje();
  viaje2.estado = 'proceso';
  viaje2.pasajero = pasajero2;
  viaje2.conductor = conductor2;
  viaje2.costo = 200;
  viaje2.fechaInicio = new Date();
  viaje2.fechaFin = new Date();
  viaje2.fechaCreacion = new Date();
  viaje2.fechaActualizacion = new Date();

  await pasajeroRepository.save([pasajero1, pasajero2]);
  await conductorRepository.save([conductor1, conductor2]);
  await viajeRepository.save([viaje1, viaje2]);

  await connection.close();
}

seed().catch((error) => console.error(error));
