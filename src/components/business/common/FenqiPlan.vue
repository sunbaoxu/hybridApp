<template>
  <div class="plan-wrap" @click.self="closePlan(false)">
    <main class="main">
      <section class="box">
        <h6>已选方案：“{{obj.planName}}”</h6>
        <div class="list-box g-border">
          <ul class="list-box-ul g-box-duo">
            <li 
              class="g-cen-y" 
              v-for="(m,i) in planArr" 
              :key="i"
              :class="{
                'list-li-lef':i%3==0,
                'list-li-cen':i%3==1,
                'list-li-rig':i%3==2,
                'on'         :obj.planId == m.planId
              }"
              @click="listFn(m)"
            ><span>{{m.planName}}</span></li>
          </ul>
          <!-- 分期 类别 -->
          <div class="fenqi-list g-fen-cen">
            <p>
              <span>机构代偿期：</span>
              <span>{{obj.orgNper}}期</span>
            </p>
            <p>
              <span>低额还款期：</span>
              <span class="line" v-if="obj.lowRate<=0"><i>{{obj.lowNper}}期</i>0期</span>
              <span v-else>{{obj.lowNper}}期</span>
            </p>
            <p>
              <span>高额还款期：</span>
              <span class="line" v-if="obj.highRate<=0"><i>{{obj.highNper}}期</i>0期</span>
              <span v-else>{{obj.highNper}}期</span>
            </p>
          </div>
        </div>
        <div class="text g-fen-cen">
          <p>个人还款期数：</p>
          <p>
            <span>{{obj.userNper}}期</span>
            <span v-if="(obj.lowRate>0 && obj.highRate>0)">{{obj.userNper}}期</span>
            <span v-else-if="obj.lowRate>0">{{obj.lowNper}}期</span>
            <span v-else-if="obj.highRate>0">{{obj.highNper}}期</span>
            <span v-else>0期</span>
          </p>
        </div>
      </section>
      <p><button @click.prevent="closePlan(true)">确定</button></p>
    </main>
  </div>
</template>

<script>
export default {
  name: 'plan',
  props : {
    planObj : {
      type:Object,
      default : function(){return {}}
    },
    planArr : {
      type :Array ,
      default :function(){return []}
    }
  },
  data () {
    return {
      obj: ''
    }
  },
  methods : {
    //关闭方案弹窗
    closePlan (async) {
      this.$emit('closePlan',async,this.obj);
    },
    //点击每个 list
    listFn (obj) {
      this.obj = obj;
    }
  },
  created () {
    // this.obj = 
    JSON.stringify(this.planObj) =='{}'? this.obj= this.planArr[0]: this.obj=this.planObj;
    console.log(this.planArr,this.planObj)
  }
}
</script>
<style lang="scss" scoped>
.plan-wrap{
  position: fixed;
  top:0;
  left:0;
  bottom:0;
  right:0;
  background: rgba(0,0,0,0.6);
  display: flex;
  align-items: flex-end;
  z-index:1010;
  .main{
    background: $col-f;
    flex:1;
    &>p{
      button{
        background: $col-blue;
        color:$col-f;
        font-size: 36px;
        border:none;
        width:100%;
        height: 100px;
      }
    }
    &>.box{
      padding: 20px 50px 0;
      &>.text{
        height: 90px;
        font-size: 28px;
        p{
          &:first-child{
            color:$col-3;
          }
          &:last-child{
            span{
              &:first-child{
                color:$col-9;
                text-decoration:line-through;
              }
              &:last-child{
                color:$col-ori;
                margin-left: 20px;
                font-size: 30px;
              }
            }
          }
        }
      }
      &>h6{
        line-height: 44px;
        font-size: 24px;
      }
      &>.list-box{
        padding-bottom: 14px;
        .fenqi-list{
          height: 60px;
          font-size: 24px;
          p{
            span{
              &:first-child{
                color:$col-9;
              }
              &:last-child{
                color:$col-3;
              }
              &.line{
                i{
                  text-decoration: line-through;
                  color:$col-9;
                  font-style: normal;
                  margin-right: 4px;
                }
              }
            }
          }
        }
        .list-box-ul{
          max-height: 334px;
          overflow:scroll;
          li{
            width: 33.333%;
            height: 112px;
            span{
              height: 80px;
              width: 180px;
              background: $col-f0;
              color:$col-6;
              font-size: 24px;
              line-height: 80px;
              text-align: center;
              border-radius: 8px;
            }
            &.on{
              span{
                background: $col-blue;color:$col-f;
              }
            }
          }
          .list-li-lef{
            justify-content: flex-start;
          }
          .list-li-cen{
            justify-content: center;
          }
          .list-li-rig{
            justify-content: flex-end;
          }
        }
      }
    }
  }
}
</style>
