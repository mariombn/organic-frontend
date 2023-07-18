<template>
  <div>
    <h1>User Information</h1>
    <p v-if="user">Username: {{ user.username }}</p>
    <button @click="setUser({username: 'Mario'})">Set User</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    //this.$store.state.user
    ...mapState(['user']),
  },
  methods: {
    //this.$store.commit('setUser', user)
    ...mapActions(['setUser']),
  },
}
</script>
