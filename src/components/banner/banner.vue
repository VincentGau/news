<template>
  <div class="swiper">
    <van-swipe
      :autoplay="2000"
      :loop="true"
      indicator-color="#000000"
      :show-indicators="true"
      class="van-swipe  recommend-swipe"
    >
      <van-swipe-item v-for="(item, index) in Swipers" :key="index">
        <router-link
          :to="{ path: '/articleDetails', query: { articleId: item.docId } }"
        >
          <img :src="item.coverUrl" class="imag" />
          <div class="introduce">
            <div class="swipe-img-tit">
              {{ item.title }}
            </div>
            <div class="swipe-img-info">
              <span class="swipe-img-name">{{ item.source }}</span>
              <span class="swipe-img-read">{{ item.readNum }}阅读</span>
              <span class="swipe-img-date">{{ item.publishTime }}</span>
            </div>
          </div>
        </router-link>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import '../../assets/css/master.css'
export default {
  props: {
    Swipers: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.introduce {
  z-index: 99;
  position: absolute;
  width: 6.86rem;
  left: 0;
  bottom: 0.58rem;
  padding-bottom: 0.16rem;
  text-align: left;
  background-image: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.71) 100%
  );
  border-radius: 0.1rem;
}
.swipe-img-tit {
  font-family: 'PingFangSC-Medium';
  font-size: 0.32rem;
  color: #ffffff;
  letter-spacing: 0;
  text-align: justify;
  padding-left: 0.2rem;
  line-height: 0.32rem;
  padding-bottom: 0.16rem;
  text-shadow: 0 0.02rem 0.02rem rgba(0, 0, 0, 0.5);
}
.swipe-img-info span {
  line-height: 0.26rem;
  letter-spacing: 0;
  padding-left: 0.2rem;
  font-family: 'PingFangSC-Regular';
  overflow: hidden;
  color: #ffffff;
}

.swipe-img-info .swipe-img-name {
  width: 1.3rem;
  font-size: 0.26rem;
  float: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
}

.swipe-img-info .swipe-img-read {
  width: 1.09rem;
  margin-left: 0.52rem;
  font-size: 0.26rem;
  float: left;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.swipe-img-info .swipe-img-date {
  margin-left: 0.2rem;
  width: 1.55rem;
  height: 0.26rem;
  font-size: 0.26rem;
  float: left;
}
.swiper {
  padding-top: 0.2rem;
  padding-left: 0.32rem;
  padding-right: 0.32rem;
  height: 3.54rem;
}
.van-swipe {
  width: 110%;
  height: 100%;
  margin-left: -0.3rem;
  margin-top: -0.2rem;
}
.imag {
  border-radius: 0.04rem;
  width: 100%;
  height: 2.96rem;
  pointer-events: none;
  display: block;
}
</style>
