import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../app.module';
import * as request from 'supertest';

describe('PasajeroController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/pasajero (GET)', () => {
    return request(app.getHttpServer()).get('/pasajero').expect(200);
  });

  it('/pasajero/id/:id (GET)', () => {
    return request(app.getHttpServer()).get('/pasajero/id/1').expect(200);
  });

  it('/pasajero/radio (GET)', () => {
    return request(app.getHttpServer()).get('/pasajero/radio/2').expect(200);
  });
});
