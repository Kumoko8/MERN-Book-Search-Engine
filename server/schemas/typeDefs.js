//not sure about line 8
//also not sure if I put Books on here since it says its not a model but a subdocument
const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [String]!
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    books: [Book]!
    book(bookId: ID!): Book
    me: User
  }

  type Mutation {
    createUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth

    saveBook(bookId: ID!, authors: String!, description: String!, image: String!, link: String!, title: String!): Boook
    deleteBook: Book
  }
`;

module.exports = typeDefs;
