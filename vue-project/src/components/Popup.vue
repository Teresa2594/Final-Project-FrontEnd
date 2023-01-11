<template>
    <div class="popup">
        <div class="popup-inner">
            <div class="butClose">
                <i class="fa-sharp fa-solid fa-circle-xmark fa-2x"  @click="trigger()"></i>
        
        </div>
           <slot class="text-inside"></slot>  
        </div>
    </div>

</template>


<script>

export default{
props:['trigger']
}


</script>

<style>

.popup{
    position:fixed;
    top:0;
    left:0;
    right: 0;
    bottom:0;
    z-index:99;
    background-color: rgba(0,0,0,0.2);

    display: flex;
    align-items: center;
    justify-content: center;
}

.popup .popup-inner{
    background-color: aliceblue;
  width: 800px;
  height: 800px;
  padding:30px;
    background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                  url("../assets/fondoForm.jpeg");


}

.butClose{
    display: flex;
    justify-content: flex-end;
}

.fa-sharp{
    padding-top: 10px;
    color: rgba(219, 88, 88, 0.845);
 
}
</style>