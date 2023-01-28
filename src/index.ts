import fetch from "node-fetch"

const API_ENDPOINT = "https://the-one-api.dev/v2"

type QuotesResponse = {
  docs: Quote[]
  total: number
  limit: number
  page: number
  pages: number
}

type MoviesRespone = {
  docs: Movie[]
  total: number
  limit: number
  page: number
  pages: number
}

type Quote = {
  _id: string
  dialog: string
  movie: Movie["_id"]
  character: string
  id: string
}

type Movie = {
  _id: string,
  name: string,
  runtimeInMinutes: number,
  budgetInMillions: number,
  boxOfficeRevenueInMillions: number,
  academyAwardNominations: number,
  academyAwardWins: number,
  rottenTomatoesScore: number

}

export class LotrSDK {
  apiToken: string;

  constructor(apiToken: string) {
    if (apiToken === "") {
      throw new Error("Missing api token. Is the string empty?")
    }
    this.apiToken = apiToken;
  }

  public async getMovies(): Promise<Movie[]> {
    // make fetch call
    // return movies
    const resp = await fetch(`${API_ENDPOINT}/movie`, {
      headers: {
        "Authorization": `Bearer ${this.apiToken}`
      }
    })

    const json = await resp.json() as MoviesRespone
    return json.docs
  }

  public async getMovieById(id: string): Promise<Movie> {
    // make fetch call
    // return specific movie
    const resp = await fetch(`${API_ENDPOINT}/movie/${id}`, {
      headers: {
        "Authorization": `Bearer ${this.apiToken}`
      }
    })

    const json = await resp.json() as MoviesRespone
    return json.docs[0]
  }

  public async getMovieQuote(id: string): Promise<Quote[]> {
    // make fetch call
    // return specific movie
    const resp = await fetch(`${API_ENDPOINT}/movie/${id}/quote`, {
      headers: {
        "Authorization": `Bearer ${this.apiToken}`
      }
    })

    const json = await resp.json() as QuotesResponse
    return json.docs
  }
}