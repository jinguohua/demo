<template>
  <div class="app">
    <div>
      <el-input placeholder="请输入内容" v-model="keyword" >
        <template slot="append"><i class="el-icon-search" @click="getInfoByTable"></i></template>
      </el-input>
    </div>
    <div>
      <page23-table :lists= "lists"></page23-table>
    </div>
  </div>
</template>

<script>
import  axios from 'axios'
import  page23Table from './page23-table'
export default {
  data:function(){
    return{
      keyword:'',
      lists:[]
    }
  },
  components:{
    'page23-table': page23Table
  },
  methods:{
    getInfoByTable(){
      axios.get('/mkg/api/v3/search/song?format=jsonp&keyword='+this.keyword)
      .then((param)=>{
        var data= eval('(' + param.data + ')')
        var datas = [];
        datas = data.data.info;
        this.lists = datas
      }).catch((param)=>{
      })
    }
  },
  watch: {
    lists: {
      handler(val, oldVal) { 
        console.log(val)
       },
      deep: true
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