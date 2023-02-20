<template>
  <div>
    Тест приложения {{ message }}
    <div>
      <button @click.prevent="getUsers">
        Get users
      </button>
      <button @click.prevent="clearUsers">
        Clear users
      </button>
    </div>
    <table v-if="users.length">
      <thead>
        <tr>
          <td>id</td>
          <td>email</td>
          <td>login</td>
          <td>password</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="index">
          <td>{{ user.id }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.login }}</td>
          <td>{{ user.password }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial',
  data () {
    return {
      message: '',
      users: []
    }
  },
  mounted () {
    fetch('/api/test')
      .then(res => res.json())
      .then((data) => {
        this.message = data
      })
  },
  methods: {
    getUsers () {
      fetch('/api/users')
        .then(res => res.json())
        .then((data) => {
          this.users = data
        })
    },
    clearUsers () {
      this.users = []
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  font-family: sans-serif;
}

table {
  border-spacing: 0;
}

table td {
  padding: 5px;
  border: 1px solid;
}
</style>
