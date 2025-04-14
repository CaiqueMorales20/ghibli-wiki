export interface Translation {
  metadata: {
    title: string
    description: string
  }
  nav: {
    home: string
    films: string
    characters: string
    about: string
  }
  hero: {
    title: string
    description: string
  }
  films: {
    collection: string
    director: string
    titles: Record<string, string>
    descriptions: Record<string, string>
  }
}
