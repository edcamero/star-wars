export interface GetPerson {
  data: Data
}

export interface Data {
  person: Person
}

export interface Person {
  name: string
  birthYear: string
  eyeColor: string
  gender: string
  hairColor: string
  height: number
  mass: number
  skinColor: string
  homeworld: Homeworld
  filmConnection: FilmConnection
}

export interface FilmConnection {
  films: Film[]
}

export interface Film {
  title: string
  episodeID: number
  director: string
  planetConnection: PlanetConnection
}

export interface PlanetConnection {
  planets: Homeworld[]
}

export interface Homeworld {
  name: string
}
