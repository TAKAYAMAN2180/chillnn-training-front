<template>
    <div class="user_edit_container">
        <div v-show="isShowLink" class="title_container">
            <!-- title -->
            <link-button
                :to="{
                    name: 'user-userID',
                    params: { userID: userModel.userID },
                }"
                >マイページへ</link-button
            >
        </div>
        <div class="input_container">
            <!-- user edit -->
            <user-edit :user-model="userModel" />
        </div>
        <div class="button_container">
            <!-- button -->
            <app-button @click="register">更新する</app-button>
        </div>
    </div>
</template>
<script lang="ts">
import { UserModel } from 'chillnn-training-abr'
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { AsyncLoadingAndErrorHandle } from '~/util/decorator/baseDecorator'
// component
import UserEdit from '@/components/Organisms/User/Icon/UserEdit.vue'
import AppButton from '@/components/Atom/AppButton.vue'
import LinkButton from '@/components/Atom/LinkButton.vue'

@Component({
    components: {
        UserEdit,
        AppButton,
        LinkButton,
    },
})
export default class AppHeaderUserEdit extends Vue {
    @Prop({ required: true }) userModel!: UserModel

    public get isShowLink() {
        return this.$route.params.userID !== this.userModel.userID
    }

    @AsyncLoadingAndErrorHandle()
    public async register() {
        await this.userModel.register()
    }
}
</script>
<style lang="stylus" scoped>
.user_edit_container {
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
