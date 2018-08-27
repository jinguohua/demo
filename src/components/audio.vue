<template>
    <audio ref="audio" controls="controls" id ='audio'>
        <source   >
    </audio>
</template>

<script>
    export default{
        props:['src'],
        watch:{
            src:function(){
                this.$refs.audio.src = this.src;
                var audio = document.getElementById('audio');
                audio.play()
            }
        }
    }
</script>

<style>

</style>
