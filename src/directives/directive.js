import Vue from 'Vue';
const obj = 
      { //触发焦点
        'Focus' : {
          //当绑定元素插入到 Dom中
          inserted : (el) =>{
            //焦距元素
            el.focus()
            // el.addEventListener('focus',() =>{
            //   console.log(Vue)
            //   // Vue.$router.push('/city')
            // })
          }
        },
        //滚动 吸顶 显示隐藏
        'SrcollsShow' : {
          bind: function(el,binding){
            window.addEventListener('scroll',moveFn1);
            window.addEventListener("touchmove",moveFn1);
            // move 方法
            function moveFn1(){
              var scrollTop    = window.scrollY;  
              var offsetTop    = el.offsetTop;
              //显示 header
              if(scrollTop > 50 && scrollTop!=0){
                binding.value.headerFn(true);
              } else {
                binding.value.headerFn(false);
              }

              //显示 导航
              if(scrollTop > offsetTop - 110  && scrollTop!=0){
                binding.value.navigationFn(true);
              } else{
                binding.value.navigationFn(false);
              }
            }         
          }
        },
        //滚动底部  加载更多
        'LoadMore' : {
          inserted: function(el,binding){
            window.addEventListener('scroll',scrollFn);
            window.addEventListener("touchmove",scrollFn);
            //滚动
            function scrollFn () {
              var scrollTop = window.pageYOffset; 
              var boxH      = document.body.clientHeight  || document.documentElement.offsetHeight;
              var screenH   = window.screen.availHeight ;
              if(scrollTop+screenH>= boxH-10  && scrollTop!= 0){
                binding.value(true);
              } else{
                binding.value(false);
              }
            }
          }
        },
        //滚动 事件
        'ScrollMove' : {
          inserted: function(el,binding){
            var startY = 0,endY =0,scrollTop = 0;
            el.addEventListener("touchstart",function(event){
              var touch = event.targetTouches[0];
                  startY = touch.pageY;
                  scrollTop =  el.scrollTop;
            });
            el.addEventListener("touchmove",function(){
              var touch = event.targetTouches[0];
                  //手势滑动时，手势坐标不断变化，取最后一点的坐标为最终的终点坐标
                  endY = touch.pageY;
                  el.scrollTop = scrollTop - (endY - startY) ;
            });
          }
        }
      }

export default obj;