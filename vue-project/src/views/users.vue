<template>
  <header class="headerUsers">
    <NavBar></NavBar>
  </header>

  <body class="bodyUsers">
    <div class="atras">
      <router-link class="users" to="/Blog">
        <i class="fa-solid fa-arrow-left fa-2x"></i
      ></router-link>
    </div>

    <ul class="users-list">
      <li class="fila" v-for="user in users" :key="user.name">
        <UserCard :user="user"></UserCard>
      </li>
    </ul>
  </body>

  <footer>
    <Footer></Footer>
  </footer>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Footer from "../components/Footer.vue";
import UserCard from "../components/UserCard.vue";

export default {
  components: {
    NavBar,
    Footer,
    UserCard,
  },

  data() {
    return {
      users: [],
    };
  },

  async created() {
    const response = await fetch(`http://localhost:8082/api/users`);
    this.users = await response.json();

    for (let i = 0; i < this.users.length; i++) {
      const responsePost = await fetch(
        `http://localhost:8081/api/blog/user/${this.users[i].id}`
      );
      this.users[i].posts = await responsePost.json();
      this.users[i].posts = this.users[i].posts.posts;
    }

    console.log(this.users);
  },
};
</script>

<style>
.users-list {
  display: grid;
  grid-template-columns: 33% 33% 33%;
  list-style-type: none;
  margin-top: -25px;
}

.users .fa-solid {
  padding-left: 20px;
  color: white;
  padding-top: 10px;
  color: rgba(219, 88, 88, 0.845);
}

.users .fa-solid:hover {
  color: red;
  transition: all 0.2s ease;
}

.headerUsers {
  margin-bottom: 10px;
}
.bodyUsers {
  background-image: url("https://i.pinimg.com/originals/1d/5e/a5/1d5ea56f2d176395330f575e782adbc9.gif");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 1500px;
  margin-bottom: 60px;
}
</style>
