<template>
<body class="bodyLogin">
   
    <form class="formularioLogin" @submit.prevent="handleLoginSubmit">
      <label class="labelLogin">Email</label>
      <input class="inputlogin" type="email" name="email" v-model="email" />
 
      <label class="labelLogin">Contraseña</label>
      <input class="inputlogin" type="password" name="password" v-model="password" />
 
      <button class="buttonInit" type="submit">Iniciar Sesión</button>
    </form>
 
    <p class="subtitlesOne">¿No tienes una cuenta todavía?</p>
    <RouterLink class="subtitlesTwo"  to="/signup">Crea una nueva cuenta</RouterLink>
    
    <router-link to="/"><i class="fa-solid fa-house"></i></router-link>

</body>

</template>


<script>

import authJS from '../stores/auth.js';
import {mapActions} from 'pinia';


export default{

    data(){
        return{
            email:"",
            password:"",
            

        }
    },

   
    methods:{
        ...mapActions(authJS,['login','authenticateUser']),
      
        async  handleLoginSubmit() {
     
        await this.login(this.email, this.password)
     
     await this.authenticateUser();
     
     this.$router.push({ path: '/Blog', replace: true })
    
    }
    },
    
  
}

</script>

<style>

.bodyLogin{
    background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url('../assets/wallpaperbetter.jpg');
    position: fixed;
    height:880px;
    width:1600px;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    
}

.formularioLogin{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:100px;
    
    
}

.formularioLogin .labelLogin{
    color: white;
    font-size:30px;  
    margin-bottom: 30px;
     
}

.subtitlesOne{
    color: white;
    font-size:20px;   
    text-decoration: none; 
    margin-bottom:30px;  
}

.subtitlesTwo{
    color: white;
    font-size:20px;   
    text-decoration: none; 
    margin-bottom:30px;  
    
} 

.subtitlesTwo:hover{
    color: rgb(50, 134, 194);
}

.formularioLogin .inputlogin{
    width:500px;
    height: 30px;
    margin-bottom:20px;
}

.formularioLogin .buttonInit{
    background-color: rgb(85, 202, 64);
    margin-bottom: 30px;
    width:150px;
    height:30px;
    border-radius:10px;
    color: aliceblue;
    
}

.formularioLogin .buttonInit:hover{
    box-shadow: 0 4px 16px rgb(85, 202, 64);
  transition: all 0.2s ease;
}



</style>