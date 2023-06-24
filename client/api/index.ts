import {
    ModelFactory,
    RepositoryContainer,
    UserUsecase,
} from 'chillnn-training-abr'
import { postMastRepository } from './modules/GraphqlPostMastRepository'
import { userMastRepository } from './modules/GraphqlUserMastRepository'
import { s3Repository } from './modules/S3Repository'
import { commentMastRepository } from '~/api/modules/GraphqlCommentMastRepository'

const repositoryContainer = new RepositoryContainer(
    s3Repository,
    postMastRepository,
    userMastRepository,
    commentMastRepository
)

const modelFactory = new ModelFactory(repositoryContainer)

export const userInteractor = new UserUsecase(repositoryContainer, modelFactory)
