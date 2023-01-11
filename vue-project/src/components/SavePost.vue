<template>

<h1 class="titleForm">Agrega un nuevo post</h1>

<form @submit="sendForm" class="formulario">
    <label class="labels">Id del post</label>
    <input class="inputs" id="id" type="number" v-model="post.id" :max="getLength()+1" :min="getLength()+1">

    <label class="labels">Título</label>
    <input class="inputs" id="title" type="text" v-model="post.title" required>
    
    <label class="labels">Fecha de publicación</label>
    <input class="inputs" type="date" v-model="post.date" required>

    <label class="labels">Sección</label>
    <select class="inputs" type="text" v-model="post.section" required>
    <option>Nieve</option>
    <option>Ciclismo</option>
    <option>Entrenamiento</option>
    <option>Cultura</option>
    <option>Montaña</option>
    </select>

    <label class="labels">ID del usuario</label>
    
    <select class="inputs" type="number" v-model="post.userId" required> 
   
        <option>{{userId}}</option>
    </select>

    
    <label class="labels">Descripción</label>
    <textarea class="inputs" type="text" v-model="post.description" rows="10" cols="5" ></textarea>

    <label class="labels">Url de la imágen</label>
    <input class="inputs" id="urlImagen" type="url" v-model="post.urlImagen">
    
    <input type="submit" value="Enviar" class="enviar" >

</form>

</template>


<script>

import authJS from '../stores/auth.js';
import {mapState} from 'pinia';

export default{
    data(){
        return {
            post:{
                id:"",
                title:"",
                date:"",
                section:"",
                userId:"",
                description:"",
                urlImagen:"",
            },

            posts:[],
            users:[],
        }
    },
    methods:{

        sendForm(e){
            const id = this.post.id;
           const title=this.post.title;
           const date=this.post.date;
           const section=this.post.section;
           const userId=this.post.userId;
           const description=this.post.description;
            const urlImagen=this.post.urlImagen;
           
          
          fetch (`http://localhost:8083/api/posts`,{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body:JSON.stringify({id,title,date,section,userId,description,urlImagen})
            })
        },

        getLength(){
          return this.posts.length;
        }

        },

        async created() {
            const response = await fetch(`http://localhost:8083/api/posts`);
            this.posts = await response.json();  

            const responseUsers = await fetch(`http://localhost:8082/api/users`);
            this.users= await responseUsers.json(); 
    },

    computed:{
        ...mapState(authJS,["userId"])
    }
       
    }
</script>

<style>

.formulario{
    display:flex;
    flex-direction: column;
    justify-content: left;
}

.titleForm{
    color: aliceblue;
}

.labels{
    color: aliceblue;
}

.inputs{
    margin-bottom:30px;
}

.enviar{
    width: 50px;
}



</style>