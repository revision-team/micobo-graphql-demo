import { RESTDataSource } from 'apollo-datasource-rest';
import { QueryBookArgs } from './generated/graphql';

export class BooksProvider extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:3001/';
  }

  public async getBook(args: QueryBookArgs) {
    return this.get(`/books/${args.id}`);
  }

  public async getBooks() {
    return this.get(`/books`);
  }
}
