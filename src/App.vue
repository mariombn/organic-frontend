<template>
  <v-app id="inspire">
    <div>
      <v-navigation-drawer
        expand-on-hover
        rail
        >
        
        <v-list>
            <v-list-item
              prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
              title="Sandra Adams"
              subtitle="sandra_a88@gmailcom"
            ></v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
            <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
            <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
          </v-list>

      </v-navigation-drawer>

      <v-app-bar>
        <v-toolbar-title>Organic {{ drawer }}</v-toolbar-title>
      </v-app-bar>

      <v-main>
        <router-view />
      </v-main>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue 3!'
    }
  },
  methods: {
    updateMessage() {
      this.message = 'Message updated!'
    }
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
