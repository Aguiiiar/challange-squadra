import { HttpService } from "@nestjs/axios";
import { Injectable, NotFoundException } from "@nestjs/common";
import { getTrackGenre } from "../utils/get-track-genre";
import { CityDto } from "../dtos/city.dto";
import { CoordsDto } from "../dtos/coords.dot";
import SpotifyService from './spotify.service';

@Injectable()
export default class WheatherService {
  private wheaterUrl: string = 'https://api.openweathermap.org/data/2.5/weather/'
  private wheaterID: string = process.env.WHEATER_KEY

  constructor(
    private readonly http: HttpService,
    private readonly spotifySerive: SpotifyService
  ) { }

  public async getTrackByCity({ name }: CityDto): Promise<string> {

    try {

      const { data } = await this.http.axiosRef.get(`${this.wheaterUrl}?q=${name}&units=metric&appid=${this.wheaterID}`)

      const genre = getTrackGenre(Math.round(data.main.temp))

      const musicTrack = await this.spotifySerive.getTrackName(genre)

      return musicTrack

    } catch (error) {
      throw new NotFoundException('Not found city');
    }
  }

  public async getTrackByCoords({ lat, lon }: CoordsDto): Promise<string> {

    try {
      const { data } = (await this.http.axiosRef.get(`${this.wheaterUrl}?lat=${lat}&lon=${lon}&units=metric&appid=${this.wheaterID}`))

      const genre = getTrackGenre(Math.round(data.main.temp))

      const musicTrack = await this.spotifySerive.getTrackName(genre)

      return musicTrack
    } catch (error) {
      throw new NotFoundException('Not found city');
    }

  }
}