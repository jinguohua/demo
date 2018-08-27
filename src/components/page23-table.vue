<template>
    <div>
        <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
        prop="songname"
        label="歌曲名"
        >
        </el-table-column>
        <el-table-column
        prop="singername"
        label="歌手名"
        >
        </el-table-column>
        <el-table-column
        prop="duration"
        label="时长">
        </el-table-column>
        <el-table-column
        prop="album_name"
        label="操作">
        <template slot-scope="scope">
            <el-button type="text" size="small" @click="plays(scope.$index,scope.row)">播放</el-button>
        </template>
        </el-table-column>
    </el-table>
    
    </div>
</template>

<script>
import axios from 'axios'
import audioA from './audio'
  export default {
    name:'page23-table',
    props:['lists'] ,
    data() {
      return {
          ok:false,
          src:''
      }
    },
 
    methods: {
        plays(index,row) {
            axios.get("/kg/yy/index.php?r=play/getdata&hash="+row.hash)
                .then((data)=>{
                    this.src = data.data.data.play_url;
                    this.$emit('playthis',this.src)
                }).catch((data)=>{

            })
        }
    },
    computed: {
        tableData() {
            return this.lists
        },
        lsrc() {
            return this.src;
        }
    },
    // watch: {
    //     src: {
            
    //   handler: function (val, oldVal) { 
    //       debugger
    //    },
    //   deep: true
    // }
    // }
  }
  
</script>
<style>
    .is-leaf{
        text-align: center !important
    }
</style>
