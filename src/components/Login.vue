<template>
    <v-app>
      <v-main class="d-flex align-center justify-center min-vh-100">
        <v-card class="elevation-12" max-width="800">
          <v-card-title class="justify-center">
            <h1>Login</h1>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field
                label="E-mail"
                type="email"
                v-model="auth.email"
                required
              ></v-text-field>
              <v-text-field
                label="Senha"
                type="password"
                v-model="auth.password"
                required
              ></v-text-field>
              <v-btn color="primary" class="mt-3" block @click="submitForm">Entrar</v-btn>
              <v-btn text block color="primary" class="mt-3" @click="register">Cadastro</v-btn>
            </v-form>
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
        auth: {
          email: "",
          password: ""
        }
      };
    },
    methods: {
      submitForm() {
        api.post('auth/signin', this.auth)
          .then((res) => {
            this.$store.commit('setUser', res.data.data)
         })
         .catch((error) => {
           console.log(error)
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
  