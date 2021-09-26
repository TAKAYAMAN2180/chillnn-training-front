/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const fetchMyUserMast = /* GraphQL */ `
  query FetchMyUserMast {
    fetchMyUserMast {
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
export const fetchPostByPostID = /* GraphQL */ `
  query FetchPostByPostID($postID: ID!) {
    fetchPostByPostID(postID: $postID) {
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
export const fetchPostsByOwnerUserID = /* GraphQL */ `
  query FetchPostsByOwnerUserID($userID: ID!) {
    fetchPostsByOwnerUserID(userID: $userID) {
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
export const fetchUserMastByUserID = /* GraphQL */ `
  query FetchUserMastByUserID($userID: ID!) {
    fetchUserMastByUserID(userID: $userID) {
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
