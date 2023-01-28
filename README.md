# `@jsjoeio/lor-sdk` - an SDK to easily consume the Lord of the Rings API

![npm](https://img.shields.io/npm/v/@jsjoeio/lor-sdk)

## Install

```shell
yarn add @jsjoeio/lotr-sdk
```

```shell
npm install @jsjoeio/lotr-sdk
```

### Usage

```typescript
import LotrSDK from "@jsjoeio/lotr-sdk";

const apiToken = process.env.LOTR_API_TOKEN
const sdk = new LotrSDK(apiToken)

sdk.getMovies() // returns array of movies
sdk.getMovieById(id)  // returns movie
sdk.getMovieQuote(id) // returns array of quotes from movie

```

## LICENSE

MIT. Just make sure you give acknowledgements to this repo.
