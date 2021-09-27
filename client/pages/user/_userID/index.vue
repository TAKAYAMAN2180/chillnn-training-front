<template>
    <div class="user_detail_container">
        <div v-if="userModel" class="user_icon_wrapper">
            <!-- icon -->
            <user-icon :user-model="userModel" />
        </div>
        <div class="image_table_wrapper">
            <!-- images -->
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { UserModel } from 'chillnn-training-abr'
import { userInteractor } from '~/api'
// component
import UserIcon from '@/components/Organisms/User/Icon/index.vue'

@Component({
    components: {
        UserIcon,
    },
})
export default class UserPage extends Vue {
    public userModel: UserModel | null = null
    public async created() {
        const userID = this.$route.params.userID
        this.userModel = await userInteractor.fetchUserModelByUserID(userID)
    }

    public get isMyPage() {
        return (
            this.userModel &&
            this.userModel.userID === this.$route.params.userID
        )
    }
}
</script>
<style lang="stylus" scoped>
.user_detail_container {
    padding-top: 50px;

    .user_icon_wrapper {
        margin: 0 auto;
    }

    .image_table_wrapper {
        margin-top: 50px;
        border-top: 1px solid $borderColor;
    }
}
</style>
