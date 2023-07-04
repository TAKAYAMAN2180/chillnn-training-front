<template>
    <div>
        <div
            class='image_wrapper'
            :style='{ backgroundImage: `url(${imgUrl})` }'
            @click='onImgClicked'
        />
        <div> {{ description }}</div>
        <app-modal v-model='isShowModal'>
            <div class='detail_img_wrapper'>
                <div class='left_side_wrapper'>
                    <img :src='imgUrl' />
                </div>
                <div class='right_side_wrapper'>
                    <div class='right_side_content'>
                        <div class='explain_wrapper'>
                            <h2> 説明 </h2>
                            <p>{{ description }}</p>
                        </div>
                        <div class='comments_wrapper'>
                            <div><h2>コメント</h2></div>
                            <div class='comments_content'>
                                <div v-if='commentModels.length === 0'>
                                    <p>何もコメントされていません</p>
                                </div>
                                <div v-else>
                                    <div
                                        v-for='(commentModel,idx) in commentModels'
                                        :key='commentModel.commentID'
                                        class='comment_element'
                                    >
                                        <comment-box :comment-model='commentModel' />
                                    </div>
                                </div>
                            </div>
                            <div class='btn_parent_wrapper'>
                                <div class='btn_flex_wrapper'>
                                    <app-button class='comment_modal_btn' :disabled='false' @click='openCommentModal'>
                                        コメントする
                                    </app-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <app-modal v-model='isShowCommentModal'>
                    <add-comment
                        v-if='blancComment'
                        :comment-model='blancComment'
                        @registeredComment='registered'
                    />
                </app-modal>
            </div>
        </app-modal>
    </div>
</template>
<script lang='ts'>
import { PostModel } from 'chillnn-training-abr'
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import AppModal from '@/components/Organisms/Common/AppModal/index.vue'
import { CommentModel } from 'chillnn-training-abr/dist/entities/models/modules/commentModel'
import { userInteractor } from '~/api'
import AppButton from '~/components/Atom/AppButton.vue'
import { AsyncLoadingAndErrorHandle } from '~/util/decorator/baseDecorator'
import UserEdit from '~/components/Organisms/User/Edit/index.vue'
import AddComment from '~/components/Organisms/Comment/AddComment/index.vue'
import CommentBox from '~/components/Organisms/Comment/CommentBox/index.vue'

@Component({
    components: {
        UserEdit,
        AppButton,
        AppModal,
        AddComment,
        CommentBox
    }
})
export default class PostCardItem extends Vue {
    @Prop({ required: true }) postModel!: PostModel
    public isShowModal: boolean = false
    public isShowCommentModal: boolean = false
    public commentModels: CommentModel[] = []


    public async getComments() {
        this.commentModels = await this.postModel.fetchThisComments()

    }

    public get imgUrl() {
        return this.postModel.imageURL
    }

    public get description() {
        return this.postModel.description
    }

    public closeModal() {
        this.isShowModal = false
    }

    public async onImgClicked() {
        this.isShowModal = true
        this.commentModels = await this.postModel.fetchThisComments()
        console.log(this.commentModels)

    }


    public blancComment: CommentModel | null = null

    @AsyncLoadingAndErrorHandle()
    public async openCommentModal() {
        if (this.postModel) {
            this.blancComment = await this.postModel.createNewComments()
            this.isShowCommentModal = true
        }
    }

    @AsyncLoadingAndErrorHandle()
    public async registered() {
        this.blancComment = null
        this.commentModels = await this.postModel.fetchThisComments()
        this.isShowCommentModal = false
    }


}
</script>
<style lang='stylus' scoped>
.image_wrapper {
    width: 100%;
    padding-bottom: 100%;
    background-size: cover;
    cursor: pointer;

    img {
        width: 100%;
    }
}

h2 {
    margin: 0;
    padding: 10px 0;

}

.detail_img_wrapper {
    width: 80vw;
    height: 80vh;
    display: flex;
    justifyContent: center;
}

.left_side_wrapper {
    width: 50%;
    height: 100%;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
}

.right_side_wrapper {
    width: 40%;
    height: 100%;
}

.right_side_content {
    height: 100%;
    width: 100%;

    whiteSpace: nowrap;
    padding: 0 1em;
    margin: 1vh 1em;
    border-left: solid 5px black;

    display: flex;
    flex-direction: column;
}

.comment_modal_btn {
    width: 12em;
    whiteSpace: nowrap;
    display: block;
}

.btn_flex_wrapper {
    display: flex;
    justify-content: center;
}

.comments_wrapper {
    width: 100%;
    height: calc(100% - 113.6px);

    display: flex;
    flex-direction: column;
}

.comments_content {
    height: calc(100% - 90px);
    overflow-y: scroll;

    flex-grow: 1;
}


.btn_parent_wrapper {
    margin-top: 1vh;
}

.explain_wrapper {
    border-bottom: solid 2px black;
}

.comment_header_wrapper {
    margin-bottom: -15px;
}

</style>
