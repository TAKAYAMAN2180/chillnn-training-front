<template>
    <div class="app_container">
        <div class="app_header">
            <!-- header -->
            <app-header />
        </div>
        <div class="app">
            <!-- app -->
            <nuxt />
        </div>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import AppHeader from '@/components/Organisms/AppHeader/index.vue'
import { authInteractor } from '~/driver/amplify/auth'
@Component({
    components: {
        AppHeader,
    },
})
export default class DefaultLayout extends Vue {
    public async created() {
        const isSignIn = await authInteractor.isSignIn()
        if (!isSignIn) {
            this.$router.push({ name: 'auth-signin' })
        }
    }
}
</script>
<style lang="stylus" scoped>
.app_container {
    background-color: $backgroundColor;
    min-height: 100vh;

    .app_header {
        position: sticky;
        top: 0;
        box-shadow: 0 0 5px 0 $shadowColor;
    }

    .app {
        padding: 15px $sidePaddingPC;

        @media only screen and (max-width: $spSize) {
            padding: 15px $sidePaddingSP;
        }
    }
}
</style>
