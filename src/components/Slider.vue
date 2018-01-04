<template>
  <div class="banner">
    <ul class="clearfix">
      <li><img src="../assets/images/img_1.jpg" alt=""/>
        <div class="text-box">
          <h2>开训即实战 空军航空兵某旅战机呼啸出征</h2>
          <p>中国新闻网 / 文</p>
        </div>
      </li>
      <li><img src="../assets/images/img_2.jpg" alt=""/>
        <div class="text-box">
          <h2>2018春运火车票开始售票</h2>
          <p>一个普通的号 / 文</p>
        </div>
      </li>
      <li><img src="../assets/images/img_3.jpg" alt=""/>
        <div class="text-box">
          <h2>80米长巨型雪雕亮相长春</h2>
          <p>中国新闻网 / 文</p>
        </div>
      </li>
      <li><img src="../assets/images/img_1.jpg" alt=""/>
        <div class="text-box">
          <h2>中央军委首次举行开训动员大会</h2>
          <p>新华网 / 文</p>
        </div>
      </li>
    </ul>
    <ol>
      <li class="active"></li>
      <li></li>
      <li></li>
      <li></li>
    </ol>
  </div>
</template>
<script>
 export default{
     mounted(){
         this.fnSlider();
     },
   methods:{
     fnSlider(){
       $(function (){
         var mySwipe=new Swipe($('.banner')[0],{
           auto:2000,
           continuous:true,
           stopPropation:true,
           callback:function (index,element){
             $('.banner ol li').removeClass('active');
             $('.banner ol li').eq(index).addClass('active');
           }
         });
       });
     }
   }
 }
</script>
