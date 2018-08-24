<template>
  <div class="app">
    <div class="block">
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="(item,index) in items" :key="index">
          <div>
          <img :src="item.img" style="width:450px;height:250px" alt="">
          <h3>{{ item.index }}</h3>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div>
      <table-info></table-info>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import img1 from '@/assets/img/1.jpg'
import img2 from '@/assets/img/2.jpg'
import img3 from '@/assets/img/3.jpg'
import img4 from '@/assets/img/4.jpg'
import tableInfo from '@/components/page21-table'
export default {
  data:function(){
    return{
      items:[
        {img:img1},
        {img:img2},
        {img:img3},
        {img:img4}]
    }
  },
  components:{
    'table-info':tableInfo
  },
  mounted:function(){
   // this.gitImgitems()
  },
  methods:{
    gitImgitems:function(){
      axios.get('http://localhost:8081/json/resourse.json').then((param)=>{
        debugger
      }).catch(function (param) {
        debugger
        })
    }
  }

}
</script>

<style>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>