### Desafio técnico - B8One

Este repositório contém o código-fonte de uma aplicação desenvolvida como teste técnico para a B8One, com foco em boas práticas de front-end moderno, performance, SEO e experiência do usuário.


## Tech Stack

**Client:** React, Typescript, Tailwindcss e DasyUI

**Server:** NextJS, Node 20.16.0


## Para rodar: 
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


O aplicativo contém uma página de "Ofertas" contendo:

- 🖼️ Banner principal estático

- 📱 Banners responsivos, renderizados de acordo com o tamanho da tela

- 🛒 Vitrine de produtos com dados consumidos via API

- 🔎 Filtros de produtos por:

  - Categoria

  - Faixa de preço

- ⚡ Lazy loading nas imagens dos produtos

- ⏳ Loader inicial até a página estar completamente pronta

- 📐 Layout totalmente responsivo

- 🔍 SEO otimizado, incluindo:

- Schema.org (ItemList / ListItem)

- Estrutura semântica adequada

- Otimização de imagens