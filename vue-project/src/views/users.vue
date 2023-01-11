<template>
    <header class="headerUsers">
        <NavBar></NavBar>
    </header>

    <body class="bodyUsers">
        
        <div class="atras">
            <router-link class="users" to="/Blog">
                <i class="fa-solid fa-arrow-left fa-2x"></i></router-link>
    </div>

        <ul class="users-list">
            <li v-for="user in users" :key="user.name">
                <UserCard :user="user"></UserCard>
            </li>
        </ul>

    </body>

  <footer>
    <Footer></Footer>
  </footer>

</template>

<script>

import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
import UserCard from '../components/UserCard.vue'

export default{
    components:{
        NavBar,
        Footer,  
        UserCard
    },
    
    data(){
        return {
            users:[]
        }
    },


    async created() {
            const response = await fetch(`http://localhost:8082/api/users`);
            this.users = await response.json();    
            
            for (let i=0; i<this.users.length; i++){
                const responsePost = await fetch(`http://localhost:8081/api/blog/user/${this.users[i].id}`);
                this.users[i].posts= await responsePost.json();
                this.users[i].posts= this.users[i].posts.posts;
            }

            console.log(this.users)
    },
}


</script>


<style>

.users-list{
    display: grid;
    grid-template-columns: 33% 33% 33%;
    list-style-type: none;
    gap: none;
}

.users .fa-solid{
    padding-left: 20px;
    color: white;
    padding-top: 10px;
}


.headerUsers{
    margin-bottom:10px;
}
.bodyUsers{
    background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url('https://wallpaperstock.net/monta%C3%B1a-nevada-wallpapers_13746_1920x1200.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size:  1900px;
    margin-bottom: 30px;

}


</style>