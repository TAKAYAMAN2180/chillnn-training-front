<template>
    <div :style='{marginTop: "-30px"}'>
        <div :style='{backgroundColor: "white"} '>
            <!--<user-edit :user-model="" @registered="closeModal" />-->
            <h3>コメントを追加する</h3>
            <div>
                <p>コメント内容を入力してください。</p>
                <input v-model='inputStr' :style='{width: "70vh",height:"2.5em"}' />
                <button class='comment-regist-btn' :disabled='false' @click='register'>
                    <img :style='{height: "1.5em",width: "1.5em"}' src='@/static/send_btn.webp' />
                </button>
            </div>
        </div>
    </div>
</template>
<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { CommentModel } from 'chillnn-training-abr/dist/entities/models/modules/commentModel'
import AppButton from '~/components/Atom/AppButton.vue'
import { AsyncLoadingAndErrorHandle } from '~/util/decorator/baseDecorator'


@Component({
        components: {
            AppButton
        }
    }
)
export default class AddComment extends Vue {
    @Prop({ required: true }) commentModel!: CommentModel
    public inputStr: string = ''

    @AsyncLoadingAndErrorHandle()
    public async register() {
        if (this.inputStr == '') {
            window.alert('コメントが何も入力されていません')
        } else {
            this.commentModel.comment = this.inputStr
            await this.commentModel.register()
            this.$emit('registeredComment')
        }
    }



}
</script>

<style scoped lang='stylus'>
.comment-regist-btn {
    padding: 0;
    background-color: #efefef;
    border-radius: 0.3em;


    width: 2.5em;
    height: 2.5em;

    display: inline-block;
    position: relative;
    right: 3.3em;
    top: 0.3em;


    // reset default
    border: none;
    cursor: pointer;
    outline: none;
    appearance: none;

    &:hover {
        background-color: gray;
    }

}
</style>
