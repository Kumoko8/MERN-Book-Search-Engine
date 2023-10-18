//not sure about line 8
//also not sure if I put Books on here since it says its not a model but a subdocument
const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
    bookId: ID
    authors: [String]
    description: String
    image: String
    link: String
    title: String
  }
  input BookInput {
    bookId: String, 
    authors: [String], 
    description: String,
    image: String, 
    link: String, 
    title: String
  }

 
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth

    login(email: String!, password: String!): Auth

    saveBook(bookData:BookInput!): User
    
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
