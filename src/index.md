---
home: true
heroImage: /hero.png
features:
- title: Полное покрытие
  details: Наш модуль предоставляет полное покрытие API Фугапедии
- title: ООП
  details: В ответ на запросы возвращаются классы с которыми удобно работать
footer: Apache-2.0 License | Copyright © 2021 Synbulat Biishev
---

# Установка
## npm
```
npm i fugapedia.js
```
## Yarn
```
yarn add fugapedia.js
```
## pnpm
```
pnpm add fugapedia.js
```

# Пример использования
## JavaScript
```js
const Fugapedia = require('fugapedia.js');

const client = new Fugapedia.Client().setKey('myAPIKey');

const main = async () => {
  const article = await client.getArticle('Кирилл_Баранов', { limit: 100 });
  console.log(article);

  const url = Fugapedia.makeImageUrl('Syjalo', 'jpeg');
  console.log(url); 
}
```
## TypeScript
```ts
import { Client } from 'fugapedia.js';
import { makeImageUrl } from './Util';

const client = new Client().setKey('myAPIKey');

const main = async () => {
  const article = await client.getArticle('Кирилл_Баранов', { limit: 100 });
  console.log(article);

  const url = makeImageUrl('Syjalo', 'jpeg');
  console.log(url);
}
main();
```