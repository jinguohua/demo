<template>
    <audio id="audio" controls="controls">
        <source :src="src"  >
    </audio>
</template>

<script>
    export default{
        props:['src'],
    }
</script>

<style>

</style>
