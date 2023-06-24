import {
    CommentMast,
    ICommentMastRepository,
    CommentMastRepositoryCacheAdaptor
} from 'chillnn-training-abr'
import { callApi } from '../base'
import * as query from '@/driver/amplify/graphql/queries'
import * as mutation from '@/driver/amplify/graphql/mutations'
import {
    AddCommentMutation,
    AddCommentMutationVariables,
    FetchCommentsByPostIDQuery,
    FetchCommentsByPostIDQueryVariables
} from '~/driver/amplify/graphql/API'

class GraphqlCommentMastRepository implements ICommentMastRepository {
    async addComment(input: CommentMast): Promise<CommentMast> {
        return (
            await callApi<AddCommentMutation, AddCommentMutationVariables>(
                mutation.addComment,
                {
                    input
                }
            )
        ).addComment
    }

    async fetchCommentsByPostID(postID: string): Promise<CommentMast[]> {
        return (
            await callApi<
                FetchCommentsByPostIDQuery,
                FetchCommentsByPostIDQueryVariables
            >(query.fetchCommentsByPostID, {
                postID
            })
        ).fetchCommentsByPostID
    }

}

export const commentMastRepository = new CommentMastRepositoryCacheAdaptor(
    new GraphqlCommentMastRepository()
)
