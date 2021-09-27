<template>
    <div class="app_header_container">
        <nuxt-link :to="{ name: 'index' }" tag="div" class="left_container">
            <!-- left -->
            <div class="logo">
                <img src="~/assets/img/logo.svg" />
            </div>
            <div class="title">
                <img src="~/assets/img/CHILLSTAGRAM.png" />
            </div>
        </nuxt-link>

        <div class="right_container" @click="openModal">
            <!-- right -->
            <div class="edit_button">{{ name }}さん</div>
            <div class="icon">
                <img :src="userModel.userIcon" />
            </div>
        </div>

        <app-modal v-model="showEditModal">
            <!-- modal -->
            <user-edit :user-model="userModel" />
        </app-modal>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from 'nuxt-property-decorator'
import { UserModel } from 'chillnn-training-abr'
// components
import UserEdit from './modules/UserEdit.vue'
import AppButton from '@/components/Atom/AppButton.vue'
import AppModal from '@/components/Organisms/Common/AppModal/index.vue'

@Component({
    components: {
        AppButton,
        AppModal,
        UserEdit,
    },
})
export default class AppHeader extends Vue {
    @Prop({ required: true }) userModel!: UserModel
    public showEditModal = false

    public get name() {
        return this.userModel.name
    }

    @Watch('$route')
    public isShowToggle() {
        this.showEditModal = false
    }

    public openModal() {
        this.showEditModal = true
    }
}
</script>
<style lang="stylus" scoped>
.app_header_container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px $sidePaddingPC;
    background-color: white;

    @media only screen and (max-width: $spSize) {
        padding: 15px $sidePaddingSP;
    }

    .left_container {
        display: flex;
        align-items: center;
        height: auto;
        cursor: pointer;

        .logo {
            width: 30px;
            height: 30px;

            @media only screen and (max-width: $spSize) {
                width: 20px;
                height: 20px;
            }

            img {
                width: 100%;
            }
        }

        .title {
            padding-left: 10px;
            width: 120px;
            height: auto;

            @media only screen and (max-width: $spSize) {
                padding-left: 5px;
                width: 100px;
            }

            img {
                width: 100%;
            }
        }
    }

    .right_container {
        display: flex;
        align-items: center;
        text-align: right;
        cursor: pointer;
        font-size: 14px;

        @media only screen and (max-width: $spSize) {
            font-size: 12px;
        }

        .icon {
            width: 40px;
            height: 40px;
            padding-left: 10px;
            border-radius: 100px;

            @media only screen and (max-width: $spSize) {
                width: 25px;
                height: 25px;
                padding-left: 5px;
                border-radius: 100px;
            }

            img {
                object-fit: cover;
                border-radius: 100px;
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>
