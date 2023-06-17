<template>
    <div class='user_edit_container'>
        <div class='input_container'>
            <!-- user edit -->
            <user-edit :user-model='userModel' />
        </div>
        <div>
            <div class='button_container'>
                <textarea v-model='textFieldValue' rows='10' cols='60'>
                </textarea>
            </div>
        </div>
        <div class='button_container'>
            <!-- button -->
            <app-button @click='register'>更新する</app-button>
        </div>
    </div>
</template>
<script lang='ts'>
import { UserModel } from 'chillnn-training-abr'
import { Vue, Component, Prop } from 'nuxt-property-decorator'
// component
import UserEdit from './modules/UserEdit.vue'
import AppButton from '@/components/Atom/AppButton.vue'
import { AsyncLoadingAndErrorHandle } from '~/util/decorator/baseDecorator'

@Component({
    components: {
        UserEdit,
        AppButton
    }
})
export default class AppHeaderUserEdit extends Vue {
    @Prop({ required: true }) userModel!: UserModel
    public textFieldValue: string = this.userModel.introduction

    public get isShowLink() {
        return this.$route.params.userID !== this.userModel.userID
    }

    get introduction() {
        return this.userModel.introduction
    }

    @AsyncLoadingAndErrorHandle()
    public async register() {
        this.userModel.introduction=this.textFieldValue
        await this.userModel.register()
        this.$emit('registered')
    }


}
</script>
<style lang='stylus' scoped>
.user_edit_container {
    height: 100%;

    .title_container {
        text-align: center;
        padding-bottom: 30px;

        @media only screen and (max-width: $spSize) {
            padding-bottom: 10px;
        }
    }

    .input_container {
    }

    .button_container {
        padding-top: 10px;
        display: flex;
        justify-content: center;
    }
}
</style>
