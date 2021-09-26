<template>
    <div class="app_header_container">
        <div class="left_container">
            <!-- left -->
            <div class="logo">
                <img src="~/assets/img/logo.svg" />
            </div>
            <div class="title">
                <img src="~/assets/img/CHILLSTAGRAM.png" />
            </div>
        </div>
        <div class="right_container">
            <!-- right -->
            <div>〇〇さん</div>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
// components
import AppButton from '@/components/Atom/AppButton.vue'

@Component({
    components: {
        AppButton,
    },
})
export default class AppHeader extends Vue {}
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
        text-align: right;
    }
}
</style>
