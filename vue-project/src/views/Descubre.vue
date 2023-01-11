<template>
    <header>
        <NavBar></NavBar>
    </header>

    <body>

        <div class="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/gH25c4RW17c"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </div>

        <div class="contenedor">
                <div class="situacion">
                    <h1>Situación</h1>
                    <img src="../assets/situacion.png" />
                    <div class="textDesc">
                        <p>La Val d’Aran tiene una extensión de 620 Km. y el 30% del territorio está por</p>
                        <p>encima de los 2.000 m de altitud. Limita al norte con Francia, al sur con la Alta</p>
                        <p>Ribagorza y Aragón, al este con el Pallars Sobirà, y al oeste, de nuevo, con</p>
                        <p>Aragón y Francia.</p>
                    </div>
                </div>
                <div class="historia">
                    <h1>Historia</h1>
                    <img src="../assets/Historia.png" />
                    <div class="textDesc">
                        <p>La historia de Val d’Aran está íntimamente ligada a la cultura occitana del sur</p>
                        <p>de Francia, cuyos vínculos han sido siempre más fuertes que con la</p>
                        <p>Península ibérica a causa de la compleja orografía que ha actuado como una</p>
                        <p>frontera natural durante siglos.</p>
                    </div>
                </div>
            
                <div class="comoLlegar">
                    <h1>Como llegar</h1>
                    <img src="../assets/comollegar.png" />
                    <div class="textDesc">
                        <p>Desde aquí podrás saber cuál es el camino más corto para poder llegar a</p>
                        <p>Vielha, la capital de Val d’Aran . Introduce cuál es tu localidad de origen y la</p>
                        <p>web te hará el resto.</p>

                    </div>
                </div>
             
            </div>
       

    </body>

    <footer>
        <HomePageFooter></HomePageFooter>
    </footer>

</template>

<script>

import NavBar from '../components/NavBar.vue';
import HomePageFooter from '../components/Footer.vue'

export default {
    components: {
        NavBar,
        HomePageFooter,

    }
}

</script>


<style>

header{
    margin-bottom: 30px;
}
.video {
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
}

.video iframe {
    width: 1000px;
    height: 600px;
}

.contenedor{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
   
}
.contenedor img{
    height: 130px;
    width: 250px;
    margin-left:130px;
}

.textDesc{
    font-size: smaller;
    padding-left:20px;
    padding-right:20px;
    padding-top:10px;
    margin-bottom:30px;
}


h1{
    font-family: 'montserrat', sans-serif;
    padding-bottom:10px;
}




</style>