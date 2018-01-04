<template>
  <div id="app">
    <Loading v-show="loading"></Loading>
    <NavView v-show="headerShow"></NavView>
    <transition name="slide-down">
      <keep-alive>
        <router-view class="router-view"></router-view>
      </keep-alive>
    </transition>
    <FooterView v-show="footerShow"></FooterView>
  </div>
</template>

<script>
  import NavView from '@/components/Nav.vue'
  import FooterView from '@/components/Footer.vue'
  import Loading from '@/components/Loading.vue'

  import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'app',
  computed:mapGetters([
    'headerShow',
    'loading',
    'footerShow'
  ]),
  mounted(){
    var path=this.$route.path.substring(1);
    this.headerChange(path);
    this.footerChange(path);
  },
  watch:{
    $route(to,from){
      var path=to.path.substring(1);
      this.headerChange(path);
      this.footerChange(path);
    }
  },
  methods:{
    headerChange(path){
      if(path=='user-info' || path=='user-reg' || path=='user-login' || path.indexOf('article')!=-1){
        this.$store.dispatch('hideHeader')
      }else{
        this.$store.dispatch('showHeader')
      }
    },
    footerChange(path){
      if(path.indexOf('article')==-1){
        this.$store.dispatch('showFooter');
      }else{
        this.$store.dispatch('hideFooter');
      }
    }
  },
  components:{
      NavView,
     FooterView,
    Loading
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 40px;
}
.slide-up-enter-active, .slide-up-leave-active {
  transition: all .4s cubic-bezier(0, 1.2, 1, 0.5);
  opacity: .7;
  transform: translate3d(0, 4em, 0);
}
.slide-up-enter, .slide-up-leave-active {
  opacity: .3;
  transform: translate3d(0, 4em, 0);
}

.slide-down-enter-active, .slide-down-leave-active {
  transition: all .4s cubic-bezier(0, 1.2, 1, 0.5);
  opacity: .7;
  transform: translate3d(0, 6em, 0);
}
.slide-down-enter, .slide-down-leave-active {
  opacity: .1;
  transform: translate3d(0, 6em, 0);
}

.slide-left-enter-active, .slide-left-leave-active {
  transition: all .2s cubic-bezier(0, 1.2, 1, 0.5);
  opacity: .5;
  transform: translate3d(2em, 0, 0);
}

.slide-left-enter, .slide-left-leave-active {
  opacity: .3;
  transform: translate3d(2em, 0, 0);
}

.slide-right-enter-active, .slide-right-leave-active {
  transition: all .4s cubic-bezier(0, 1.2, 1, 0.5);
  opacity: .5;
  transform: translate3d(5em, 0, 0);
}
.slide-right-enter, .slide-right-leave-active {
  opacity: .3;
  transform: translate3d(5em, 0, 0);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .4s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
