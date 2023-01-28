import { describe, expect, it } from 'vitest'
import { LotrSDK } from "../src/index"

function getApiTokenFromEnv() {
  // TODO@jsjoeio - fix so you can load environment vars blah blah
  const apiToken = "your-api-token"
  return apiToken
}

describe("LotrSDK", () => {
  it("should return an instance of the sdk", () => {
    const apiToken = "fakeapitoken"
    const sdk = new LotrSDK(apiToken)
    expect(sdk).toBeInstanceOf(LotrSDK)
  })
  it("should throw and error if string is empty", () => {
    const apiToken = ""
    expect(() => new LotrSDK(apiToken)).toThrowError("Missing api token. Is the string empty?")
  })
  it("should have a method called getMovies that returns all LOTR movies", async () => {
    const apiToken = getApiTokenFromEnv()
    const sdk = new LotrSDK(apiToken)
    expect('getMovies' in sdk).toBe(true);

    const movies = await sdk.getMovies()
    expect(movies.length).toBe(8)
  })
  it("should have a method called getMovieById that returns a specific movie", async () => {
    const apiToken = getApiTokenFromEnv()
    const sdk = new LotrSDK(apiToken)
    expect('getMovieById' in sdk).toBe(true);

    const movieId = "5cd95395de30eff6ebccde56"
    const movie = await sdk.getMovieById(movieId)
    expect(movie.name).toBe("The Lord of the Rings Series")
  })
  it("should have a method called getMovieQuote that returns a quote from a specific movie", async () => {
    const apiToken = getApiTokenFromEnv()
    const sdk = new LotrSDK(apiToken)
    expect('getMovieQuote' in sdk).toBe(true);

    const movieId = "5cd95395de30eff6ebccde5c"
    const quotes = await sdk.getMovieQuote(movieId)
    expect(quotes[0].dialog).not.toBeNull()
  })
})