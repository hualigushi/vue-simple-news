<template>
  <div class="content mt40">
    <div class="newsList">
      <ul>
        <li v-for="(item, index) in arrList">
          <a href="javascript:;">
            <h2>{{index+1}} .{{item.title}}</h2>
            <p>{{item.detail}}</p>
          </a>
        </li>

      </ul>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        arrList:[]
      }
    },
    mounted(){
      //获取数据
      this.fetchData();
    },
    methods:{
      fetchData(){
        var _this = this;
        this.$http.get('src/data/follow.data').then(function(result){
          console.log(result.data);
          _this.arrList = result.data;
        }).catch(function(err){
          console.log('Follow',err);
        });
      }
    }
  }
</script>
<style scoped>
  .mt40{
    margin-top:40px;
  }
</style>
