import { gql } from 'apollo-server';
import { Resolvers } from './generated/graphql';

export const typeDefs = gql`
  "Book that we can buy from the library"
  type Book {
    "book title"
    title: String
    "book author's name"
    author: String
  }

  type Query {
    """
    get book by id
    """
    book(id: Int!): Book @cacheControl(maxAge: 240)
    """
    get all books
    """
    books: [Book] @cacheControl(maxAge: 240)
  }
`;

export const resolvers: Resolvers = {
  Query: {
    book: (_, args, ctx) => ctx.dataSources.booksProvider.getBook(args),
    books: (_, __, ctx) => ctx.dataSources.booksProvider.getBooks()
  }
};
