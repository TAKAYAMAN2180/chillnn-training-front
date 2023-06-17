// driverの接続部分を記述
import { API, graphqlOperation } from '@aws-amplify/api'
// @ts-ignore
import { GraphQLResult } from '@aws-amplify/api/lib/types'
import { ChillnnTrainingError, ErrorCode } from 'chillnn-training-abr'
/**
 * 型付きのresponseを返す
 * QueryとMutationに用いる
 * @param query
 * @param variables
 */
export async function callApi<U, T>(query: any, variables: T): Promise<U> {
    try {
        const response = (await API.graphql(
            // @ts-ignore
            graphqlOperation(query, variables)
        )) as GraphQLResult<U>
        return response.data!
    } catch (err) {
        const errorCode = (err as any).errors[0].message as ErrorCode
        throw new ChillnnTrainingError(errorCode)
    }
}
