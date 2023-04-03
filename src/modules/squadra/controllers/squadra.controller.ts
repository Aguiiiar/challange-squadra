import { Controller, Get, HttpCode, HttpStatus, Query } from "@nestjs/common";
import { CityDto } from '../dtos/city.dto';
import WheatherService from "../services/weather.service";
import { CoordsDto } from "../dtos/coords.dot";
import { ApiTags, ApiResponse, ApiQuery } from '@nestjs/swagger'


@ApiTags('Squadra')
@Controller('/api')
export default class SquadraController {

  constructor(
    private readonly weatherService: WheatherService
  ) { }

  @Get('/city')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: 200, type: String })
  @ApiQuery({
    name: 'name',
    type: String
  })
  private async getTrackByCity(@Query() { name }: CityDto) {

    const data = await this.weatherService.getTrackByCity({ name })

    return {
      track: data
    }
  }


  @Get('/coords')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: 200, type: String })
  @ApiQuery({
    name: 'lon',
    type: Number
  })
  @ApiQuery({
    name: 'lat',
    type: Number
  })
  private async getTrackByCoords(
    @Query() { lat, lon }: CoordsDto
  ) {

    const data = await this.weatherService.getTrackByCoords({ lat, lon })

    return {
      track: data
    }

  }
}