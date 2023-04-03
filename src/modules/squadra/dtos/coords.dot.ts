import { IsString } from 'class-validator';

export class CoordsDto {
  @IsString()
  lat: string

  @IsString()
  lon: string
}