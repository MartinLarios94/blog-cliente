import {gql} from '@apollo/client'

export const CREATE_BLOG = gql`
mutation createBlog(
      $Title: String!, 
      $Excerpt: String!, 
      $Author: String!, 
      $Tag: String!, 
      $Image: BlogImage!
      ) {
        createBlog(blogInput: {
          Title: $Title
          Excerpt: $Excerpt
          Author: $Author
          Tag: $Tag
          Image: $Image
        }) {
              _id
              Excerpt
              Title
              Author
              Tag
          }
        }
`