import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ViewModule } from '../view/view.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {User} from '@mel-services-logistiques/models';
@Module({
  imports: [ViewModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5333,
    username: 'admin_user',
    password: 'admin_user',
    database: 'mel_delivery_service_db',
    entities: [
      User
    ],
    synchronize: true,
    retryAttempts: 10,
    retryDelay: 3000,
    autoLoadEntities: false,
    keepConnectionAlive: false,
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
