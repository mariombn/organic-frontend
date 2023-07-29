<template>
  <v-app id="inspire">
    <div v-if="this.$store.state.user == null">
      <login/>
    </div>
    <div v-else>
      <v-navigation-drawer
        expand-on-hover
        rail
        >
        
        <v-list>
            <v-list-item
              prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
              :title="this.$store.state.user.name"
              :subtitle="this.$store.state.user.email"
            ></v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list density="compact" nav>

            <v-list-group value="Área do Usuário">
              <template v-slot:activator="{ props }">
                <v-list-item
                  v-bind="props"
                  prepend-icon="mdi-card-account-details-outline"
                  title="Área do Usuário"
                ></v-list-item>
              </template>

              <v-list-item @click="logoff()" title="Logoff"></v-list-item>
              <v-list-item @click="goToRoute('/user/settings')" title="Configurações"></v-list-item>
            </v-list-group>
            
            <v-list-group :value="item.title" v-for="(item, key) in menu" :key="key">
              <template v-slot:activator="{ props }">
                <v-list-item
                  v-bind="props"
                  :prepend-icon="item.icon"
                  :title="item.title"
                ></v-list-item>
              </template>

              <v-list-item v-for="(subitem, subkey) in item.child" :key="subkey" @click="goToRoute(subitem.route)" :title="subitem.title"></v-list-item>
            </v-list-group>




          </v-list>

      </v-navigation-drawer>

      <v-app-bar>
        <v-toolbar-title>Organic</v-toolbar-title>
      </v-app-bar>

      <v-main>
        <router-view />
      </v-main>
    </div>
  </v-app>
</template>

<script>
import Login from '@/components/Login.vue'

export default {
  components: {
    Login,
  },
  data() {
    return {
      menu: [
        {
          "title": "Financeiro",
          "icon": "mdi-finance",
          "child": [
            {
              "title": "Cadastrar Fatura",
              "route": "/finance/transaction/create"
            },
            {
              "title": "Gerenciar Entradas e Saídas",
              "route": "/finance/input-output"
            },
            {
              "title": "Resumo do Mês",
              "route": "/finance/resume"
            },
          ]
        },
      ],
    }
  },
  methods: {
    goToRoute(route) {
      this.$router.push(route);
    },
    logoff() {
      this.$store.commit('logoff')
    },
  },
  mounted() {
    console.log('Component mounted')
  },
  watch: {
    message(newVal, oldVal) {
      console.log('Message changed from', oldVal, 'to', newVal)
    }
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('')
    }
  }
}
</script>
