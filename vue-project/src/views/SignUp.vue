<template>

<body className="bodySign">

 
    <form class="formularioSign" @submit.prevent="handleSignupSubmit">
      <label class="labelSign">Email</label>
      <input class="inputSign" type="email" name="email" v-model="email" />
 
      <label class="labelSign">Contraseña</label>
      <input  class="inputSign" type="password" name="password" v-model="password" />
 
      <label class="labelSign" >Nombre </label>
      <input class="inputSign" type="text" name="name" v-model="name" />
 
      <button class="buttonReg" type="submit">Registrarse</button>
    </form>
 
    <p class="subtitles2">¿Tienes ya una cuenta?</p>
    <RouterLink class="subtitles2" to="/login"> Iniciar Sesión</RouterLink>
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
            name:"",

        }
    },
    methods:{
        ...mapActions(authJS, ['signup']) ,

        async handleSignupSubmit(){
           await this.signup(this.email,this.password,this.name)
           this.$router.push({ path: '/login', replace: true })
        }
    }
}


</script>

<style>


.bodySign{
    background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)), url('../assets/fondoSignup.jpg');
    position: fixed;
    height:880px;
    width:1600px;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    
}

.formularioSign{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:100px;
    width:400px;
}

.formularioSign .labelSign{
    color: white;
    font-size:30px;  
    margin-bottom: 30px;
}

.subtitles2{
    color: white;
    font-size:20px;   
    text-decoration: none; 
    margin-bottom:30px;  
    
} 

.formularioSign .inputSign{
    width:500px;
    height: 30px;
    margin-bottom:20px;
}

.formularioSign .buttonReg{
    background-color: rgb(50, 134, 194);
    margin-bottom: 30px;
    width:150px;
    height:30px;
    border-radius:10px;
    color: aliceblue;
    
}

.formularioSign .buttonReg:hover{
    box-shadow: 0 4px 16px  rgb(50, 134, 194);
  transition: all 0.2s ease;
}



</style>