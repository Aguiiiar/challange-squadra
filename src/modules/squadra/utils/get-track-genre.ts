type trackGenre = {
  genre: string
  condition: boolean
}

export function getTrackGenre(temperature: number) {

  const genreMap: trackGenre[] = [
    { genre: 'party', condition: temperature > 30, },
    { genre: 'pop', condition: temperature >= 15 && temperature <= 30 },
    { genre: 'rock', condition: temperature >= 10 && temperature <= 14 },
    { genre: 'classical', condition: temperature < 10 }
  ]

  const { genre } = genreMap.find(({ condition }) => condition) || { genre: 'desconhecido' }

  return genre;
}