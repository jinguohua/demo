<template>
  <div class="app">
    <time class="time">{{ currentDate }}</time>
    <el-row>
      <el-col :span="24" v-for="(item, index) in items" :key="index" >
        <el-card :body-style="{ padding: '0px' }">
          <img :src='item.thumburl'  class="image" style="width:380px;height:360px">
          <div style="padding: 14px;">
            <span>{{item.title}}</span>
            <div class="bottom clearfix">
              
            </div>
          </div>
        </el-card>
      </el-col>
</el-row>
  </div>
</template>  

<script>
import axios from 'axios'
export default {
    data() {
    return {
      currentDate: new Date(),
      items:[]
    };
  },
  mounted() {
    if(this.items<=0){
      this.getImgList()
    }
  },
  methods:{
    getImgList(){
      axios.get('/apiopen/tupian.json').then( (param)=> {  
        this.items = param.data
      }).then(param=>
        console.log(param)
      )
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