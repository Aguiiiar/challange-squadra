import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";

const env = process.env

@Injectable()
export default class SpotifyService {

  constructor(
    private readonly http: HttpService
  ) { }

  private async getAccessToken(): Promise<any> {
    const basicToken = Buffer.from(`${env.SPOTIFY_CLIENT_ID}:${env.SPOTIFY_CLIENT_SECRET}`).toString('base64')
    const spotifyRefreshToken = env.SPOTFY_REFRESH_TOKEN

    try {

      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          Authorization: `Basic ${basicToken}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `grant_type=refresh_token&refresh_token=${spotifyRefreshToken}`
      })

      return response.json()

    } catch (error) {

    }
  }

  public async getTrackName(genre: string) {

    const { access_token } = await this.getAccessToken();


    const response = await this.http.axiosRef.get(`https://api.spotify.com/v1/recommendations/?=limit=1&seed_genres=${genre}`, {
      headers: {
        Authorization: `Bearer ${access_token}`
      }
    })

    const { tracks } = response.data;

    const { name } = tracks.find(({ name }) => name)


    return name

  }
}
