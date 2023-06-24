<template>
    <div class='comment_box_container'>
        <img class='comment_img_wrapper' :src='userIconUrl' />
        <div>
            <div class='comment_user_name_wrapper'>
                <span>{{ userName }}</span>
                <span :style='{marginLeft: "1em"}'>{{ time }}</span>
            </div>
            <div class='comment_content_wrapper'>{{ commentContent }}</div>
        </div>
    </div>

</template>


<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'nuxt-property-decorator'
import { PostModel, UserModel } from 'chillnn-training-abr'
import { CommentModel } from 'chillnn-training-abr/dist/entities/models/modules/commentModel'
import { userInteractor } from '~/api'

@Component({})
export default class index extends Vue {
    @Prop({ required: true }) commentModel!: CommentModel
    public commentUserMast: UserModel | null = null
    public time: string = ''

    public async created() {
        this.commentUserMast = await userInteractor.fetchUserModelByUserID(this.commentModel.commentUserID)

        // 時間を表示。時間を変換
        const timestamp = this.commentModel.createdAt
        const date = new Date(timestamp)

        let hours = date.getHours()
        let minutes: string | number = date.getMinutes()
        const ampm = hours >= 12 ? 'PM' : 'AM'

        hours = hours % 12
        hours = hours ? hours : 12 // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes

        this.time = ampm + ' ' + hours + ':' + minutes
    }

    get userIconUrl() {
        return this.commentUserMast?.userIcon
    }

    get userName() {
        return this.commentUserMast?.name
    }

    get commentContent() {
        return this.commentModel.comment
    }

}
</script>


<style scoped lang='stylus'>
.comment_box_container {
    display: flex;
    width: 100%;
    border-bottom: solid 1px gray;
    margin-bottom: 0.7em;
}

.comment_img_wrapper {
    width: 20px;
    height: 20px;
    object-fit: contain;
    margin-right: 5px;
}

.comment_user_name_wrapper {
    color: gray;
    font-size: 0.7em;
}

</style>
