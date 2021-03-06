import { gql } from '@apollo/client'

export const GET_BLOGS = gql`
query($sort: SortBlogs, $pagination: PaginationBlogs){
    blogs(sort: $sort, pagination: $pagination) {
      blogs {
        _id
        Title
        Excerpt
        Author
        Tag
        Views
        Likes
        Image {
          Content
          Orientation
        }
        createdAt
      }
      total
    }
}
`

export const MOST_RECENTS = gql`
query {
  mostRecents {
    horizontals {
      _id
      Title
      Excerpt
      Author
      Tag
      Views
      Likes
      Image {
        Content
        Orientation
      }
      createdAt
    }
    verticals {
      _id
      Title
      Excerpt
      Author
      Tag
      Views
      Likes
      Image {
        Content
        Orientation
      }
      createdAt
    }
  }
}
`