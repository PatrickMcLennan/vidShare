import { Module } from '@nestjs/common';
import { VideosModule } from './videos/videos.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), VideosModule, AuthModule],
})
// @Module({
//   imports: [
//     // VideosModule,
//     AuthModule,
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
export class AppModule {}
