<template>
    <section id="blog" class="section-100">
        <div class="container">
            <div class="row">
                <div class="col-md-4 offset-md-4">
                    <div class="blog-card">
                        <img :src="post.urlImagen" alt="" class="blog-thumbnail" />
                        <div class="blog-container">
                            <a href="" class="blog-category text-uppercase dark-link">{{
                                post.title}}</a>
                            <p class="blog-desc">{{ post.description }}</p>
                            <div class="blog-footer">
                                <div class="blog-author">{{ post.section }}</div>

                                <div class="date">
                                    <small>{{ post.date }}</small>
                                </div>
                                <div v-if="userId==post.userId" class="iconsPost">
                                   
                                    <small class="trash-icon"><i class="fa-solid fa-trash"
                                            @click="deletePost(post.id)"></i></small>
                                    
                                            <small class="pen-icon">
                                        <i @click="trigger()" class="fa-solid fa-pen"></i>
                                    </small>

                                    <PopUp v-if="buttonTrigger" :trigger="() => (this.buttonTrigger = false)">
                                        <h1 class="titleForm">Modifica aquí tu post</h1>
                                        
                                        <form @submit="sendForm" class="formulario2">
                                            
                                            <label class="labels2">Identificador del post</label>
                                            <input class="inputs2"  type="number" v-model="post.id" readonly >

                                            <label class="labels2">Título</label>
                                            <input class="inputs2"  type="text" v-model="post.title" >

                                            <label class="labels2">Fecha de publicación</label>
                                            <input class="inputs2" type="date" v-model="post.date" required>

                                            <label class="labels2">Sección</label>
                                            <input class="inputs2" type="text" v-model="post.section" required>

                                            <label class="labels2">Identificador del usuario</label>
                                            <input class="inputs2" type="text" v-model="post.userId" required>

                                            <label class="labels2">Descripción</label>
                                            <textarea class="inputs2" type="text" v-model="post.description" rows="10" cols="5"></textarea>

                                            <label class="labels2">Dirección web de la imágen</label>
                                            <input class="inputs2" type="text" v-model="post.urlImagen" >

                                            <input type="submit" value="Enviar" class="enviar">

                                        </form>
                                    </PopUp>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import PopUp from '../components/Popup.vue';
import authJS from '../stores/auth.js';
import {mapState} from 'pinia';

export default {

    components: {
        PopUp
    },

    data() {
        return {
            buttonTrigger: false,
        }
    },

    props: {
        post: {
            type: Object,
            default: {
                title: "Nieve y más nieve",
                date: "2022-05-03",
                section: "Nieve",
                description:
                    "Un viaje a la nieve que estuvo muy pero que muy muy muy muy guachiiii",
                urlImagen:
                    "https://services.meteored.com/img/article/que-es-la-nieve-tipos-y-prediccion-304931-1_1280.jpg",
                id: "null",
            },
        },
    },
    methods: {
        deletePost(id) {
            if (confirm("¿Quieres borrar este post?")) {
                fetch(`http://localhost:8083/api/posts/${id}`, {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                })
                .then(()=>{
                    window.location.reload();
                });
            }
        },

        trigger() {
            this.buttonTrigger = true;
        },

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
        }
    },
    computed:{
        ...mapState(authJS,["userId"])
    }
};
</script>

<style>
.container {
    display: flex;
    align-items: center;
    margin-left: 30px;
}

.primary-color {
    color: #007bff;
}

.section-100 {
    padding-bottom: 20px;
}

.blog-card {
    background: #fff;
    border-radius: 5px;
    margin-bottom: 30px;
    overflow: hidden;
    box-shadow: 0 12px 17px rgba(129, 140, 151, 0.1);
    width: 400px;
    height: max-content;
}

.blog-card .blog-thumbnail {
    width: 400px;
    height: 220px;
    object-fit: cover;
}

.blog-card .blog-container {
    padding: 30px;
    position: relative;
    padding-bottom: 70px;
}

.blog-card .blog-container a:hover {
    text-decoration: none;
    color: #0062cc;
}

.blog-card .blog-container .dark-link {
    color: darkturquoise;
    text-decoration: none;
}

.blog-card .blog-container .blog-desc {
    color: #8b949d;
}

.blog-card .blog-container .blog-author {
    height: 30px;
    width: 30px;
    border-radius: 30px;
    margin-right: 5px;
}

.blog-card .blog-container .blog-footer {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding: 15px 30px;
    border-top: 1px solid #ddd;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
}

.blog-footer {
    display: flex;
}

.blog-desc {
    padding-top: 15px;
    padding-bottom: 25px;
}

.blog-thumbnail {
    transition: transform 0.5s;
}

.blog-thumbnail:hover {
    transform: scale(1.1);
    filter: brightness(50%);
}

.trash-icon:hover {
    color: red;
    cursor: pointer;
}

.pen-icon:hover {
    color: darkturquoise;
    cursor: pointer;
}

.formulario2{
    display:flex;
    flex-direction: column;
    
   
}

.formulario2 .titleForm{
    color: aliceblue;
    font-size:30px;
    margin-top: -10px;
}

.formulario2 .labels2{
    color: aliceblue;
  display: flex;
  font-size: 20px;
    
}

.formulario2 .inputs2{
    margin-bottom:30px;
    font-size: 15px;
}

.enviar{
    width: 50px;
    margin-top:-15px;
}





</style>
