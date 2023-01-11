<template>
    <header>
        <NavBar></NavBar>
    </header>

    <body>
        <div class="wrapper">
            <div class="caja1">
                <img src="../assets/ACBaqueira.jpeg" />
                <div class="subtitle">
                    <h1>AC Baqueira Ski Resort, Autograph Collection</h1>
                    <address>Avda. Perimetral s/n</address>
                </div>
            </div>
            <div class="caja2">
                <img src="../assets/baqueira-beret.png" />
                <div class="subtitle">
                    <h1>Apartamentos Baqueira</h1>
                    <address>Nucli 1500</address>
                </div>
            </div>
            <div class="caja3">
                <img src="../assets/apartamentosvila.jpeg" />
                <div class="subtitle">
                    <h1>Apartamentos Cap de la Vila</h1>
                    <address>C/ Sarriulera, 41</address>
                </div>
            </div>
            <div class="caja4">
                <img src="../assets/feelfree.jpeg" />
                <div class="subtitle">
                    <h1>Apartamentos FeelFree | Holidays start here</h1>
                    <address>Avenguda de Garona, 31, FeelFree</address>
                </div>
            </div>
            <div class="caja5">
                <img src="../assets/totiaran.jpeg" />
                <div class="subtitle">
                    <h1>Apartamentos Toti Aran</h1>
                    <address>C/ Perimetrau s/n. Edif. Port de la Bonaigua</address>
                </div>
            </div>
            <div class="caja6">
                <img src="../assets/apartaments .jpeg" />
                <div class="subtitle">
                    <h1>Apartaments Deth Camin Reiau</h1>
                    <address>Ctra. Baquèira, s/n</address>
                </div>
            </div>
            <div class="caja7">
                <img src="../assets/apartahotel.jpeg" />
                <div class="subtitle">
                    <h1>Aparthotel Es De Don Joan</h1>
                    <address>Santa Eulàlia, s/n</address>
                </div>
            </div>
            <div class="caja8">
                <img src="../assets/aprtahotelirissa.jpeg" />
                <div class="subtitle">
                    <h1>Aparthotel Irissa</h1>
                    <address>Irissa, 4 Bl. C</address>
                </div>
            </div>
            <div class="caja9">
                <img src="../assets/apartahotellavall.jpeg" />
                <div class="subtitle">
                    <h1>Aparthotel La Vall Blanca</h1>
                    <address>Aneto,7</address>
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
   display: flex;
   flex-direction: column;
justify-content: center;
   
}
.subtitle h1{
    font-size: medium;
    
}

.subtitle address{
    font-size: small;
    color: darkgrey;
    display: flex;
    justify-content: center;
}



</style>