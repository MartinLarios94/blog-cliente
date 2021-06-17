import {gql} from '@apollo/client'

export const CREATE_BLOG = gql`
mutation{
    createBlog(blogInput: {$Title: String!, $Excerpt: String!, $Author: String!, $Tag: String!, $Image: String!}) {
      _id
      Excerpt
      Title
      Author
      Tag
    }
  }
`
export const UPDATE_BLOG = gql`
mutation{
    updateBlog(blogInputUpdate: {$id: String!, $Title: String!, $Excerpt: String!, $Author: String!, $Tag: String!, $Image: String!}) {
      _id
      Title
      Excerpt
      Author
      Tag
    }
  }
`
export const CREATE_BLOG = gql`
mutation{
    deleteBlog($blogId: String!)
  }
`

export const CREATE_USER = gql`
mutation{
    createUser(userInput: {$email: "martin@martin.com", $password: "martin"}) {
      _id
      email
    }
  }
`