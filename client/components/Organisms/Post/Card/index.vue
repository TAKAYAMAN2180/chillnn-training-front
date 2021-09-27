<template>
    <div>
        <img :src="imgUrl" />
    </div>
</template>
<script lang="ts">
import { PostModel } from 'chillnn-training-abr'
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component({})
export default class PostCardItem extends Vue {
    @Prop({ required: true }) postModel!: PostModel

    public get imgUrl() {
        return this.postModel.imageURL
    }
}
</script>
