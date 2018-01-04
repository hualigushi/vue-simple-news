import getters from './getters'

const state={
  headerShow:true,
  loading:false,
  footerShow:true
};

const mutations={
  /*头部*/
  showHeader(state){
    state.headerShow=true;
  },
  hideHeader(state){
    state.headerShow=false;
  },
  /*loading*/
  hideLoading(state){
    state.loading=false;
  },
  showLoading(state){
    state.loading=true;
  },
  /*footer*/
  hideFooter(state){
    state.footerShow=false;
  },
  showFooter(state){
    state.footerShow=true;
  }
};


export default{
  state,
  mutations,
  getters
}
