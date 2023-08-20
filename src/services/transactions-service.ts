import HttpClient from './http-client'

interface ITransactionsService {
  httpClient: HttpClient
}

class TransactionsService implements ITransactionsService {
  httpClient: HttpClient

  constructor() {
    this.httpClient = new HttpClient('http://localhost:3000')
  }

  async listAll() {
    return this.httpClient.get(`/transactions`)
  }

  async getByQuery(query?: string) {
    if (!query) {
      return this.listAll()
    }

    return this.httpClient.get(`/transactions?q=${query}`)
  }
}

export default new TransactionsService()
