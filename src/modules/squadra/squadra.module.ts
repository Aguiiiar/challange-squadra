import { Module } from '@nestjs/common';
import SquadraController from './controllers//squadra.controller';
import WeatherService from './services/weather.service'
import { HttpModule } from '@nestjs/axios';
import SpotifyService from './services/spotify.service';

@Module({
  imports: [HttpModule],
  controllers: [SquadraController],
  providers: [WeatherService, SpotifyService]
})
export class SquadraModule { }
