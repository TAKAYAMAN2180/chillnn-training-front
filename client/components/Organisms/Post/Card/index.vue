<template>
    <div>
        <div
            class='image_wrapper'
            :style='{ backgroundImage: `url(${imgUrl})` }'
            @click='isShowModal = true'
        />
        <div> {{description}} </div>
        <app-modal v-model='isShowModal'>
            <div class='img_detail'>
                <img :src='imgUrl' />
                <div> {{description}} </div>
            </div>
        </app-modal>
    </div>
</template>
<script lang='ts'>
import { PostModel } from 'chillnn-training-abr'
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import AppModal from '@/components/Organisms/Common/AppModal/index.vue'

@Component({
    components: {
        AppModal
    }
})
export default class PostCardItem extends Vue {
    @Prop({ required: true }) postModel!: PostModel
    public isShowModal: boolean = false

    public get imgUrl() {
        return this.postModel.imageURL
    }

    public get description() {
        return this.postModel.description
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

.img_detail {
    img {
        width: 100%;
    }
}
</style>
