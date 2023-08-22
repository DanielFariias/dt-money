/* eslint-disable @typescript-eslint/no-explicit-any */
import HttpClient from './http-client'

interface ITransactionsService {
  httpClient: HttpClient
}

interface IParams {
  [key: string]: string
}

class TransactionsService implements ITransactionsService {
  httpClient: HttpClient

  constructor() {
    this.httpClient = new HttpClient('http://localhost:3000')
  }

  async listAll(params?: IParams) {
    if (!params) {
      return this.httpClient.get(`/transactions`)
    }

    let queryParams = ''
    Object.entries(params).forEach(([key, value]) => {
      queryParams = queryParams + `&${key}=${value}`
    })

    return this.httpClient.get(`/transactions?${queryParams}`)
  }

  async getByQuery(query?: string, params?: IParams) {
    if (!query) {
      return this.listAll(params)
    }

    return this.httpClient.get(`/transactions?q=${query}`)
  }

  async create(transaction: any) {
    return this.httpClient.post(`/transactions`, {
      body: transaction,
    })
  }
}

export default new TransactionsService()
