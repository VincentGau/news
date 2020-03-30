<template>
  <div>
    <van-nav-bar
      title="文章详情"
      left-text=""
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <img
        class="share-icon"
        src="../../assets/img/icon-share@2x.png"
        alt=""
        slot="right"
      />
    </van-nav-bar>

    <div class="cm-article-page">
      <div class="cm-article-tit">
        富常波1.15黄金走势分析操作建议及解套现货黄金原油春节操作建议
      </div>

      <div class="cm-article-authorInfo">
        <div class="cm-author-img">
          <img src="../../assets/img/article-img.png" />
          <img src="../../assets/img/v-icon@2x.png" />
        </div>
        <div class="cm-author-nameInfo">
          <p>人民日报</p>
          <p>740.8万粉丝·人民日报官方账号</p>
        </div>
        <div class="cm-author-focus">已关注</div>
      </div>

      <div class="cm-article-content">
        <img class="cm-illustration-one" src="../../assets/img/news7-img.png" />
        <p>
          日前，全球最大的钻石开采公司戴比尔斯发布了年度《钻石行业洞察报告》(下称报告),
          报告称2018年度中国喝美国是钻石消费增长最快的地区,
          未来中国钻石婚戒市场仍有很大提升空间。戴比尔斯在报告中表示,
          过去的一年中国市场虽然受到贸易战的影响，但随着国内中产阶级的不断扩大，市场还将保持稳定增长的态势。
        </p>
        <p>
          戴比尔斯表示，2019年由于全球钻石行业提供求趋于平衡，整体行业逐渐向稳中有增的方向渡。随着钻石矿逐步关闭，预计未来全球钻石产量持续减少，将带来钻石价格的稳定增长。
        </p>
        <img src="../../assets/img/news5-img.png" alt="" />
        <p>
          报告中的历史数据显示，2018年全球钻石销售额按年增长2%，达到760亿美元，其中中国和美国是增长最快的地区，均同比增长5%。且在稳定经济环境支撑下，美国的钻石首饰销售额上涨至360亿美元，占全球市场份额的48%。全球抛光钻石市中，美国市场份额占比达49%，中国市场增长明显，达14%。
        </p>
      </div>
      <div class="cm-article-readdate">
        <span>1万阅读</span>
        <span>2020-3-22</span>
      </div>
      <div class="cm-article-praise">
        <img
          v-if="praise"
          src="../../assets/img/praise-icon@2x.png"
          @click="cancelPraise"
        />

        <img
          v-else
          src="../../assets/img/nopraise-icon@2x.png"
          @click="givePraise"
        />

        <span>500</span>
      </div>
      <div class="cm-statement-content">
        <p>
          免责声明: 本信息由第三方提供, 不代表农行立场, 本行对其所导
          致的结果不承担责任。
        </p>
      </div>
    </div>

    <div class="cm-bottom-box">
      <div class="cm-info-box">
        <p>相关资讯</p>

        <div class="cm-news-item cm-bottom-noborder">
          <div class="cm-news-abstract">
            <div class="cm-news-tit">
              <span>海通证券基金业绩排行榜 | 南华基金权益类产品年度平均…</span>
            </div>
            <div class="cm-news-info">
              <span class="cm-news-name">新财富杂志</span>
              <span class="cm-news-read">10万阅读</span>
              <span class="cm-news-date">2020-02-22</span>
            </div>
          </div>
          <div class="cm-news-img">
            <img src="../../assets/img/news5-img.png" />
          </div>
        </div>
      </div>

      <div class="cm-recommend-info">
        <p>为您推荐</p>
        <div class="recommend-box">
          <div class="cm-recommend-item">
            <ul>
              <li><span>17.86%</span><span>安信消费医药主题 000974</span></li>
              <li>
                <span>近一月涨幅</span><span>医药行业暖风颇现，消费至上</span>
              </li>
            </ul>
          </div>
          <div class="cm-recommend-item">
            <ul>
              <li><span>17.86%</span><span>大成策略回报 090007</span></li>
              <li><span>近一月涨幅</span><span>专注高成长低估值企业</span></li>
            </ul>
          </div>
          <div class="cm-recommend-item">
            <ul>
              <li><span>17.86%</span><span>农银汇理策略精选 660010</span></li>
              <li><span>近一月涨幅</span><span>多策略精选个股</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <van-popup v-model="shareShow" position="bottom" :style="{ height: '24%' }"
      >分享</van-popup
    >
  </div>
</template>

<script>
import '../../assets/css/master.css'
export default {
  data() {
    return {
      praise: true,
      shareShow: false
    }
  },
  mounted() {},
  methods: {
    onClickLeft() {
      // 返回
      this.$router.go(-1)
    },
    onClickRight() {
      // 分享
      this.shareShow = true
    },
    cancelPraise() {
      // 取消点赞
      this.praise = false
    },
    givePraise() {
      // 点赞
      this.praise = true
    }
  }
}
</script>
<style scoped>
.van-nav-bar__right {
  font-size: 0.6rem;
}
.share-icon {
  height: 0.4rem;
  width: 0.34rem;
}
.van-nav-bar__left .van-nav-bar__arrow {
  font-size: 0.4rem;
  color: #333333;
}
.van-nav-bar__title {
  font-size: 0.36rem;
  font-family: 'PingFangSC-Medium';
  color: #000000;
  letter-spacing: 0.58px;
  text-align: center;
}
.header .van-hairline--bottom::after {
  border-bottom-color: white;
}
</style>
