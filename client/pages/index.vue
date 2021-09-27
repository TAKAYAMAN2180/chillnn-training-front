<template>
    <div class="user_list_container">
        <div
            v-for="(user, idx) in registeredUsers"
            :key="user.userID"
            class="user_icon_wrapper"
            :class="{ three: !((idx + 1) % 3) }"
        >
            <nuxt-link
                :to="{ name: 'user-userID', params: { userID: user.userID } }"
                tag="div"
                class="link"
            >
                <user-icon :user-model="user" class="user_icon_item" />
            </nuxt-link>
        </div>
    </div>
</template>
<script lang="ts">
import { UserModel } from 'chillnn-training-abr'
import { Component, Vue } from 'nuxt-property-decorator'
import { userInteractor } from '~/api'
// component
import UserIcon from '@/components/Organisms/User/Icon/index.vue'
@Component({
    components: {
        UserIcon,
    },
})
export default class Top extends Vue {
    public registeredUsers: UserModel[] = []
    public async created() {
        this.registeredUsers = await userInteractor.fetchAllUser()
    }
}
</script>
<style lang="stylus" scoped>
.user_list_container {
    display: flex;
    padding-top: 100px;
    flex-wrap: wrap;

    @media only screen and (max-width: $spSize) {
        padding-top: 50px;
    }

    .user_icon_wrapper {
        width: 30%;
        margin-right: 5%;
        cursor: pointer;

        &.three {
            margin-right: none;
        }
    }
}
</style>
