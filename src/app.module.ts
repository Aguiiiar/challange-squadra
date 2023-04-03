import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { HttpModule } from '@nestjs/axios'
import { SquadraModule } from './modules/squadra/squadra.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SquadraModule,
  ],
})
export class AppModule { }
