import { User } from '@mel-services-logistiques/models';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { ViewModule } from '../view/view.module';
import { AppController } from './app.controller';

@Module({
  imports: [ViewModule,
    AuthModule,
    TypeOrmModule.forRoot({
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
    })],
  controllers: [AppController],
})
/**
 * The main module of the server application.
 * @with_decorator
 */
export class AppModule { }
