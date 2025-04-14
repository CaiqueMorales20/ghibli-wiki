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
    description: string
    production: string
    details: string
    director_label: string
    producer_label: string
    release_date: string
    running_time: string
    running_time_tooltip: string
    rt_score: string
    rt_score_tooltip: string
    titles: Record<string, string>
    descriptions: Record<string, string>
  }
}
