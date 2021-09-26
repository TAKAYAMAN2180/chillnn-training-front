<template>
    <div class="auth_signup_container">
        <div>
            <auth-title>新規登録</auth-title>
        </div>
        <div class="input_container">
            <auth-input v-model="email" label="Eメール" class="input_item" />
            <auth-input
                v-model="password"
                label="パスワード"
                type="password"
                class="input_item"
            />
        </div>
        <div class="button_container">
            <app-button :disabled="disabled">新規登録</app-button>
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
// component
import AuthTitle from '@/components/Organisms/Auth/AuthTitle.vue'
import AuthInput from '@/components/Organisms/Auth/AuthInput.vue'
import AppButton from '@/components/Atom/AppButton.vue'

@Component({
    layout: 'auth',
    components: {
        AuthInput,
        AppButton,
        AuthTitle,
    },
})
export default class SignUpPage extends Vue {
    public email: string = ''
    public password: string = ''

    public get disabled() {
        return !this.email || !this.password
    }
}
</script>
<style lang="stylus" scoped>
.auth_signup_container {
    padding: 80px;

    @media only screen and (max-width: $spSize) {
        padding: 50px 20px;
    }

    .input_container {
        .input_item {
            padding-bottom: 20px;
        }
    }

    .button_container {
        padding-top: 10px;
        text-align: center;
    }
}
</style>
