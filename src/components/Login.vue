<template>
    <div style="margin-top:100px">
        <el-tabs type="border-card">
            <el-tab-pane label="登录">
                <el-row :gutter="20">
                    <el-col :span="14" :offset="5">
                        <label for="userName">用户名</label> 
                        <el-input type="text" v-model="userName" class="" id='userName'></el-input>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="14" :offset="5">
                        <label for="password">密&nbsp;&nbsp;&nbsp;码</label>
                        <el-input type="password" v-model="password" id ="password" class=""></el-input>
                    </el-col>    
                </el-row>
                <el-row style="margin-top:20px">
                    <el-button type="primary" @click='login'>登录</el-button>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="注册">
                <el-row :gutter="20">
                    <el-col :span="14" :offset="5">
                        <label for="userName">用户名</label> 
                        <el-input type="text" v-model="userName" class="" id='userName1'></el-input>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="14" :offset="5">
                        <label for="password">输入初始密码</label>
                        <el-input type="password" v-model="password" id ="password1" class=""></el-input>
                    </el-col>    
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="14" :offset="5">
                        <label for="password">再次确认密码</label>
                        <el-input type="password" v-model="password" id ="password2" class=""></el-input>
                    </el-col>    
                </el-row>
                <el-row style="margin-top:20px">
                    <el-button type="primary" @click='login'>注册</el-button>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="游客身份">
                <el-button type="primary" @click='login'>进入</el-button>
            </el-tab-pane>
        </el-tabs>
        
    </div>
</template>

<script>
export default{
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods:{
      login:function(){
          console.log(this.userName+"!!"+this.password)
          if(this.userName==='晋国华'&&this.password==='123'){
              this.$router.push({name:'page2',
              params: { userName: this.userName,password:this.password }})
          }
      }
  }
}
</script>
