<template>
  <div class="container__card">
    <div class="card">
      <div class="icon"></div>
      <div class="info__description">
        <h1 class="titleDescrip">{{ user.name }}</h1>
        <p class="textDescrip">{{ user.email }}</p>
        <div v-for="post in user.posts" :key="post.title" class="posts">
          {{ post.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: {
        name: "Usuario",
        email: "usuario@hotmail.com",
      },
    },
  },
};
</script>

<style>
.container__card {
  max-width: 1200px;
  padding: 20px;
  padding-bottom: 40px;
  margin: auto;
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.container__card .card {
  width: 200px;
  position: relative;
  margin: 20px;
  font-family: "Poppins", sans-serif;
  transition: all 300ms;
  border-radius: 20px;
}

.card:hover {
  box-shadow: 1px 1px 20px -10px #20202049;
}

.card:hover .info__description {
  margin-top: 0;
  border-radius: 0px 0px 20px 20px;
}

.card:hover .icon {
  margin-top: -110px;
  border-radius: 20px 20px 0px 0px;
}

.card .icon {
  background-image: url("https://static.vecteezy.com/system/resources/previews/014/602/457/non_2x/woman-wearing-ski-goggles-smiling-winter-avatar-character-portrait-colorful-cartoon-illustration-modern-fashion-warm-clothing-snowfall-snow-icon-snowboard-free-vector.jpg");
  background-repeat: none;
  background-size: 200px 210px;
}

.icon {
  height: 220px;
  background: rgb(204, 204, 204);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  transition: all 400ms cubic-bezier(0.5, 0, 0, 1);
  border-radius: 20px;
}

.icon i {
  font-size: 150px;
  color: rgb(204, 204, 204);
  transition: all 400ms cubic-bezier(0.5, 0, 0, 1);
}

.info__description {
  width: 100%;
  height: 220px;
  background: rgb(255, 255, 255);
  padding: 20px;
  margin-top: -220px;
  transition: all 400ms cubic-bezier(0.5, 0, 0, 1);
  border-radius: 20px;
}

.info__description .titleDescrip {
  color: black;
}

.info__description .textDescrip {
  font-size: 14px;
  margin-top: 10px;
  display: -webkit-box;
  display: -moz-box;
  display: box;
  -webkit-box-orient: vertical;
  -moz-box-orient: vertical;
  box-orient: vertical;
  -webkit-line-clamp: 5;
  line-clamp: 5;
  overflow: hidden;
  margin-bottom: 20px;
}

.info__description input {
  margin-top: 20px;
  padding: 10px 40px;
  background: #2196f3;
  color: white;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  border: none;
  border-radius: 20px;
  box-shadow: 1px 1px 30px -5px #20202049;
  transition: box-shadow 300ms;
}

.info__description input:hover {
  box-shadow: 1px 1px 30px -5px #20202070;
}

.imagen-perfil {
  border-radius: 20px;
  width: 150px;
}

.posts {
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  margin-top: 5px;
}
</style>
