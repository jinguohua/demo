<template>
    <div id="pageId">
        <span style="width: 100%;
        display: block;
        background-color: #545c64;
        color: #ccc;">{{msg}},{{userName}}</span>
        <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
            <el-menu-item index="1"><router-link to="/page21">page21</router-link></el-menu-item>
            <el-menu-item index="2"><router-link to="/page22">page22</router-link></el-menu-item>
            <el-menu-item index="3"><router-link to="/page23">page23</router-link></el-menu-item>
            <el-menu-item index="4"><router-link to="/page24">page24</router-link></el-menu-item>
            <el-menu-item index=""><el-button type="text" @click="dialogVisible = true"><i class="el-icon-service"></i></el-button></el-menu-item>
            
        </el-menu>
        <div class="line"></div>
        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
             <audio-a :src='src'></audio-a> 
            </el-dialog>
        <keep-alive>
            <router-view v-on:playthisa='playthisb'></router-view>
        </keep-alive>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import audioA from './audio'
export default( {
  name: 'pageId',
  data () {
    return {
      msg: 'welcome to I Music', 
      userName:this.$route.params.userName||"",
      activeIndex: '1',
      activeIndex2: '1',
      src:'',
      dialogVisible: false
    }
  },
  mounted:function(){
      this.isLogin()
  },
  components:{
      'audio-a': audioA
  },
  methods:{
      isLogin:function (param) {
          if(!this.userName){
              this.$router.push('/')
          }else{
              this.$router.push({ path: 'page21' })
          }
        },
        playthisb(data){
            this.src =data
        },
         handleClose(done) {
            done();
      }
         
  }
})
</script>

<style scoped>
    a{ text-decoration:none} 
</style>
