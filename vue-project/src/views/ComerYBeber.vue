<template>
    <header>
        <NavBar></NavBar>
    </header>

    <body>
        <div class="wrapper">
            <div class="caja1">
                <img src="../assets/cateringaran.jpeg" />
                <div class="subtitle">
                    <h1>Catering d'Aran</h1>
                    <address>Ctra. Gausac, Ed. Matet</address>
                </div>
            </div>
            <div class="caja2">
                <img src="../assets/esarraitzes.jpeg" />
                <div class="subtitle">
                    <h1>Es Arraïtzes</h1>
                    <address>PLaça Major, 7 25539 - Garòs </address>
                </div>
            </div>
            <div class="caja3">
                <img src="../assets/pasteleríasetó.jpeg" />
                <div class="subtitle">
                    <h1>Pastelería Setó</h1>
                    <address>Mossen Condó, s/n , Bossost</address>
                </div>
            </div>
            <div class="caja4">
                <img src="../assets/hotelarán.jpeg" />
                <div class="subtitle">
                    <h1>Restaurant Aran</h1>
                    <address>Av. Castièro, 5</address>
                </div>
            </div>
            <div class="caja5">
                <img src="../assets/restaurantbasteret.jpeg" />
                <div class="subtitle">
                    <h1>Restaurant Basteret</h1>
                    <address>C/ Major, 6</address>
                </div>
            </div>
            <div class="caja6">
                <img src="../assets/restaurantebaresneres.jpeg" />
                <div class="subtitle">
                    <h1>Restaurant Bar Es Neres</h1>
                    <address>C/ Des Banhs, s/n</address>
                </div>
            </div>
            <div class="caja7">
                <img src="../assets/restaurantbrasad'aran.jpeg" />
                <div class="subtitle">
                    <h1>Restaurant Brasa d'Aran</h1>
                    <address>C/ Pas d'Arro 23</address>
                </div>
            </div>
            <div class="caja8">
                <img src="../assets/restaurantecabanaaran.gif" />
                <div class="subtitle">
                    <h1>Restaurant Cabana Daubàs</h1>
                    <address>N-230 Km 174</address>
                </div>
            </div>
            <div class="caja9">
                <img src="../assets/restaurantecanmanel.png" />
                <div class="subtitle">
                    <h1>Restaurant Cal Manel</h1>
                    <address>Ctra. N-230 Km 173</address>
                </div>
            </div>
        </div>
    </body>

    <footer>
        <Footer></Footer>
    </footer>


</template>

<script>
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue'

export default {
    components: {
        NavBar,
        Footer
    }
}

</script>

<style>

header{
    margin-bottom: 50px;
}

.wrapper{
    display: grid;
    grid-template-columns: 30% 30% 30%;
    justify-content: center;
    gap: 30px;
    padding-bottom: 60px;
    
}

.wrapper img{
    height: 130px;
    width: 250px;
    margin-left:100px;
}

.subtitle{
   background-color:  rgba(197, 242, 248, 0.986);
   width: 250px;
   padding: 10px;
   margin-left: 100px;
   
}
.subtitle h1{
    font-size: medium;
}

.subtitle address{
    font-size: small;
    color: darkgrey;
}



</style>