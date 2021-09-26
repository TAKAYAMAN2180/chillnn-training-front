/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addPost = /* GraphQL */ `
  mutation AddPost($input: PostMastInput!) {
    addPost(input: $input) {
      createdAt
      image {
        bucket
        key
        region
        url
      }
      ownerUserID
      postID
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost($postID: ID!) {
    deletePost(postID: $postID) {
      createdAt
      image {
        bucket
        key
        region
        url
      }
      ownerUserID
      postID
    }
  }
`;
export const updateUserMast = /* GraphQL */ `
  mutation UpdateUserMast($input: UserMastInput!) {
    updateUserMast(input: $input) {
      createdAt
      email
      name
      updatedAt
      userIcon {
        bucket
        key
        region
        url
      }
      userID
    }
  }
`;
