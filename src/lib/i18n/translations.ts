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
    back_to_home: string
  }
  about: {
    title: string
    studioGhibli: string
    studioGhibliDescription: string
    thisWiki: string
    thisWikiDescription: string
    contribution: string
    contributionDescription: string
    creator: {
      text: string
      name: string
      description: string
    }
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
    search_placeholder: string
    titles: Record<string, string>
    descriptions: Record<string, string>
  }
  people: {
    collection: string
    gender: string
    age: string
    eye_color: string
    hair_color: string
    species: string
    unknown: string
    unspecified: string
    elderly: string
    adult: string
    middle_age: string
    late_teens: string
    really_old: string
    na: string
    genders: {
      Male: string
      Female: string
      NA: string
    }
    colors: {
      Green: string
      Black: string
      Brown: string
      Peach: string
      Blue: string
      Grey: string
      White: string
      Red: string
      Orange: string
      Yellow: string
      Blonde: string
      'Light Brown': string
      'Dark Brown': string
      'Reddish Brown': string
      'Light Gray': string
      'Light Orange': string
      Hazel: string
      Cyan: string
      Emerald: string
    }
    speciesTypes: {
      Human: string
      Dragon: string
      Spirit: string
      God: string
      Cat: string
      Totoro: string
      Wolf: string
      Deer: string
    }
  }
  not_found: {
    title: string
    description: string
    return_home: string
  }
  footer: {
    created_with_love: string
    all_rights_reserved: string
  }
}
