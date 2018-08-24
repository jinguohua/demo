<template>
    <div>
        <el-collapse v-model="activeNames" >
            <el-collapse-item :title=item.title :name=index v-for="(item,index) in items" :key=index >
                <div :style="{backgroundColor:'#d2cf92'}">{{item.title}}</div>
                <div v-html='item.content'></div>
            </el-collapse-item>
            </el-collapse>
    </div>
</template>

<script>
    import axios from 'axios'
    export default{
        name: 'tableInfo',
        data(){
            return{
                activeNames: ['1'],
                items:[],
            };
        },
        mounted:function() {
            if(this.items.length<=0){
                this.getTableInfo();
            }
        },
        methods: {
            getTableInfo:function(){
                axios.get('/api/open/xiaohua.json').then( (param)=> {
                    this.items = param.data
                   // return param.json();
                }).then((param)=> {
                    console.log(param);
                })
            }
        }
    }
</script>

<style>

</style>
