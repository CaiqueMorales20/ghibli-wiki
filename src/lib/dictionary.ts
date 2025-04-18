export type Dictionary = {
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
}

export const dictionaries = {
  en: {
    about: {
      title: 'About Studio Ghibli',
      studioGhibli: 'Studio Ghibli',
      studioGhibliDescription:
        'Studio Ghibli is a Japanese animation film studio based in Koganei, Tokyo. Founded in 1985 by directors Hayao Miyazaki and Isao Takahata, along with producer Toshio Suzuki, the studio has produced some of the most beloved animated films in history, including "Spirited Away", "My Neighbor Totoro", and "Princess Mononoke".',
      thisWiki: 'This Wiki',
      thisWikiDescription: 'About this wiki',
      contribution: 'Contribution',
      contributionDescription:
        'If you would like to contribute or suggest improvements, please feel free to reach out.',
      creator: {
        text: 'This wiki was created by',
        name: 'Caique Morales',
        description:
          ", a passionate developer and Studio Ghibli enthusiast. It's a personal project built to share knowledge and appreciation for Studio Ghibli's incredible works.",
      },
    },
  },
  pt: {
    about: {
      title: 'Sobre o Studio Ghibli',
      studioGhibli: 'Studio Ghibli',
      studioGhibliDescription:
        'O Studio Ghibli é um estúdio de animação japonês sediado em Koganei, Tóquio. Fundado em 1985 pelos diretores Hayao Miyazaki e Isao Takahata, junto com o produtor Toshio Suzuki, o estúdio produziu alguns dos filmes de animação mais amados da história, incluindo "A Viagem de Chihiro", "Meu Amigo Totoro" e "Princesa Mononoke".',
      thisWiki: 'Esta Wiki',
      thisWikiDescription: 'Sobre esta wiki',
      contribution: 'Contribuição',
      contributionDescription:
        'Se você gostaria de contribuir ou sugerir melhorias, sinta-se à vontade para entrar em contato.',
      creator: {
        text: 'Esta wiki foi criada por',
        name: 'Caique Morales',
        description:
          ', um desenvolvedor apaixonado e entusiasta do Studio Ghibli. É um projeto pessoal construído para compartilhar conhecimento e apreciação pelas obras incríveis do Studio Ghibli.',
      },
    },
  },
}

export async function getDictionary(lang: string): Promise<Dictionary> {
  return dictionaries[lang as keyof typeof dictionaries] || dictionaries.en
}
