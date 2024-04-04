import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../app.module';
import * as request from 'supertest';

describe('ViajesController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/viaje/estado/:estado (GET)', () => {
    return request(app.getHttpServer())
      .get('/viaje/estado/pendiente')
      .expect(200);
  });

  it('/viaje/id/:id (GET)', () => {
    return request(app.getHttpServer()).get('/viaje/id/2').expect(200);
  });

  it('/viaje/estado/:estado/id/:id (PUT)', () => {
    return request(app.getHttpServer())
      .put('/viaje/estado/proceso/id/2')
      .expect(200);
  });
});
