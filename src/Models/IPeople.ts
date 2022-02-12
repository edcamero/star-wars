export interface IPeople {
  allPeople: IPeopleData
}

export interface IPeopleData {
  people: IPerson[]
}

export interface IPerson {
  id: string
  name: string
  species: ISpecies | null
}

export interface ISpecies {
  name: string
}
