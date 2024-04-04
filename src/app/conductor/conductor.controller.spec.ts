import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../../app.module';
import * as request from 'supertest';

describe('ConductorController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/conductor/estado/:estado (GET)', () => {
    return request(app.getHttpServer())
      .get('/conductor/estado/true')
      .expect(200);
  });

  it('/id/:id (GET)', () => {
    return request(app.getHttpServer()).get('/conductor/id/1').expect(200);
  });

  it('/radio (GET)', () => {
    return request(app.getHttpServer()).get('/conductor/radio').expect(200);
  });
});
