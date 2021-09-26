/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type PostMastInput = {
  createdAt: number,
  image: S3ObjectInput,
  ownerUserID: string,
  postID: string,
};

export type S3ObjectInput = {
  bucket: string,
  key: string,
  region: string,
  url: string,
};

export type PostMast = {
  __typename: "PostMast",
  createdAt: number,
  image: S3Object,
  ownerUserID: string,
  postID: string,
};

export type S3Object = {
  __typename: "S3Object",
  bucket: string,
  key: string,
  region: string,
  url: string,
};

export type UserMastInput = {
  createdAt: number,
  email: string,
  name: string,
  updatedAt: number,
  userIcon?: S3ObjectInput | null,
  userID: string,
};

export type UserMast = {
  __typename: "UserMast",
  createdAt: number,
  email: string,
  name: string,
  updatedAt: number,
  userIcon?: S3Object | null,
  userID: string,
};

export type AddPostMutationVariables = {
  input: PostMastInput,
};

export type AddPostMutation = {
  addPost:  {
    __typename: "PostMast",
    createdAt: number,
    image:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
      url: string,
    },
    ownerUserID: string,
    postID: string,
  },
};

export type DeletePostMutationVariables = {
  postID: string,
};

export type DeletePostMutation = {
  deletePost:  {
    __typename: "PostMast",
    createdAt: number,
    image:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
      url: string,
    },
    ownerUserID: string,
    postID: string,
  },
};

export type UpdateUserMastMutationVariables = {
  input: UserMastInput,
};

export type UpdateUserMastMutation = {
  updateUserMast:  {
    __typename: "UserMast",
    createdAt: number,
    email: string,
    name: string,
    updatedAt: number,
    userIcon?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
      url: string,
    } | null,
    userID: string,
  },
};

export type FetchMyUserMastQuery = {
  fetchMyUserMast?:  {
    __typename: "UserMast",
    createdAt: number,
    email: string,
    name: string,
    updatedAt: number,
    userIcon?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
      url: string,
    } | null,
    userID: string,
  } | null,
};

export type FetchPostByPostIDQueryVariables = {
  postID: string,
};

export type FetchPostByPostIDQuery = {
  fetchPostByPostID?:  {
    __typename: "PostMast",
    createdAt: number,
    image:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
      url: string,
    },
    ownerUserID: string,
    postID: string,
  } | null,
};

export type FetchPostsByOwnerUserIDQueryVariables = {
  userID: string,
};

export type FetchPostsByOwnerUserIDQuery = {
  fetchPostsByOwnerUserID:  Array< {
    __typename: "PostMast",
    createdAt: number,
    image:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
      url: string,
    },
    ownerUserID: string,
    postID: string,
  } >,
};

export type FetchUserMastByUserIDQueryVariables = {
  userID: string,
};

export type FetchUserMastByUserIDQuery = {
  fetchUserMastByUserID?:  {
    __typename: "UserMast",
    createdAt: number,
    email: string,
    name: string,
    updatedAt: number,
    userIcon?:  {
      __typename: "S3Object",
      bucket: string,
      key: string,
      region: string,
      url: string,
    } | null,
    userID: string,
  } | null,
};