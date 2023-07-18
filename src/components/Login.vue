<template>
  <v-app>
    <loading :active="loading" />
    <v-main class="d-flex align-center justify-center min-vh-100">
      <v-card class="elevation-12" min-width="400">
        <v-card-title class="justify-center">
          <v-row>
            <v-col cols="12" sm="12">
              <h2>Entrar</h2>
            </v-col>
          </v-row>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="12">
              <v-form>
                <v-text-field label="E-mail" type="email" v-model="auth.email" required></v-text-field>
                <v-text-field label="Senha" type="password" v-model="auth.password" required></v-text-field>
                <v-btn color="primary" class="mt-3" block @click="submitForm">Entrar</v-btn>
                <v-btn text block color="primary" class="mt-3" @click="register">Cadastro</v-btn>
              </v-form>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-main>
  </v-app>
</template>
  
<script>
import api from '@/api'

export default {
  data() {
    return {
      loading: false,
      auth: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    submitForm() {
      this.loading = true;
      api.post('auth/signin', this.auth)
        .then((res) => {
          this.$store.commit('setUser', res.data.data)
        })
        .catch((error) => {
          console.log(error)
        }).finally(() => {
          this.loading = false;
        });
    },
    register() {
      // Aqui vai a lógica de redirecionamento para a página de cadastro
      console.log("Redirecionar para página de cadastro.");
    }
  }
};
</script>
  
<style scoped>
.min-vh-100 {
  min-height: 100vh;
}
</style>
  