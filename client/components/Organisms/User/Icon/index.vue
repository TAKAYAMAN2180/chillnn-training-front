<template>
    <div class="icon_container">
        <div class="icon">
            <!-- icon -->
            <img :src="userIconUrl" />
        </div>
        <div class="name">
            <!-- name -->
            <div>{{ userName }}さん</div>
        </div>
    </div>
</template>
<script lang="ts">
import { UserModel } from 'chillnn-training-abr'
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class UserIcon extends Vue {
    @Prop({ required: true }) userModel!: UserModel

    get userName() {
        return this.userModel.name
    }

    get userIconUrl() {
        return this.userModel.userIcon
    }
}
</script>
<style lang="stylus" scoped>
.icon_container {
    .icon {
        img {
            box-shadow: 0 0 5px $shadowColor;
            border-radius: 10000px;
            width: 100%;
        }
    }

    .name {
        padding-top: 10px;
        text-align: center;
        font-size: 14px;
    }
}
</style>
