<template>
    <div class="index-visitor-container">
      <section>     
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="我的星球" name="index-myplanet">
            <div class="index-tabcontent" v-loading="loading">
              <ul class="index-cards">
                <li class="index-card">
                  <header>
                    <img src="#">
                    <span class="clickable">taotao</span>
                    <span>posted in</span>
                    <span class="clickable">guice</span>
                    <time>2017-02-21</time>
                  </header>
                  <div class="index-card-content">
                    <h1>asdwqdqwdqw</h1>
                    <div class="preview-html">
                      asdasdasdasd<strong>strongtest</strong>asdasdasdasdwqdqwdqwdqwdwqdqwdqwasdadqwhdqiuwdgiquwdgqiwudgqiuwdgqwiudgqdwqdqwdoiqhwdoiqwdoiqwd
                    </div>
                    <div class="preview-imgs">
                      <img src="#">
                      <img src="#">
                    </div>
                  </div>
                  <footer>
                    <ul>
                      <li class="done">reviews 134</li>
                      <li>approves 134</li>
                      <li>collections 134</li>
                    </ul>
                  </footer>
                </li> 
                <li class="index-card">
                  <header>
                    <img src="#">
                    <span>taotao</span>
                    <span>posted in</span>
                    <span>guice</span>
                    <time>2017-02-21</time>
                  </header>
                  <div class="index-card-content">
                    <h1>asdwqdqwdqw</h1>
                    <div class="preview-html">
                      asdasdasdasd<strong>strongtest</strong>asdasdasdasdwqdqwdqwdqwdwqdqwdqwasdadqwhdqiuwdgiquwdgqiwudgqiuwdgqwiudgqdwqdqwdoiqhwdoiqwdoiqwd
                    </div>
                    <div class="preview-imgs">
                      <img src="#">
                      <img src="#">
                    </div>
                  </div>
                  <footer>
                    <ul>
                      <li class="done">reviews 134</li>
                      <li>approves 134</li>
                      <li>collections 134</li>
                    </ul>
                  </footer>
                </li> 
              </ul>
              <el-pagination
                layout="prev, pager, next"
                :total="1000">
              </el-pagination>
            </div>
          </el-tab-pane>
          <el-tab-pane label="最新话题" name="index-newtopic">
            <div class="index-tabcontent" v-loading="loading2">
              <ul class="index-cards">
                <li class="index-card">
                  <header>
                    <img src="#">
                    <span>taotao</span>
                    <span>posted in</span>
                    <span>guice</span>
                    <time>2017-02-21</time>
                  </header>
                  <div class="index-card-content">
                    <h1>asdwqdqwdqw</h1>
                    <div class="preview-html">
                      asdasdasdasd<strong>strongtest</strong>asdasdasdasdwqdqwdqwdqwdwqdqwdqwasdadqwhdqiuwdgiquwdgqiwudgqiuwdgqwiudgqdwqdqwdoiqhwdoiqwdoiqwd
                    </div>
                    <div class="preview-imgs">
                      <img src="#">
                      <img src="#">
                    </div>
                  </div>
                  <footer>
                    <ul>
                      <li class="done">reviews 134</li>
                      <li>approves 134</li>
                      <li>collections 134</li>
                    </ul>
                  </footer>
                </li>  
              </ul>
              <el-pagination
                layout="prev, pager, next"
                :total="1000">
              </el-pagination>
            </div>
          </el-tab-pane>
        </el-tabs>
      </section>
      <aside>
        <header>
          <h2>我加入的星球</h2>
        </header>
        <div class="aside-content">
          <div class="index-aside-card wuan-card">
            <img src="http://img.alicdn.com/bao/uploaded/i2/TB2x7C0nFXXXXbsXpXXXXXXXXXX_!!101742512.jpg">
            <div class="wuan-card__content">
              <h2>asdasdqwdqwdqasdasdasdasdasdwdqwdqwdqwd</h2>
              <p>asdadqwdqwdguiqasdasdwgdiuqwgdiuqwgdqiuw</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'index-visitor',
    data() {
      return {
        activeName: 'index-myplanet',
        loading: false,
      }
    },
    computed: {
      ...mapGetters([
        'user',
        'access_token',
      ])
    },
    mounted() {
      this.loading = true;
      this.loading2 = true;
      // simulate ajax loading
      setTimeout(() => {
        this.loading = false;
      }, 4000)
      setTimeout(() => {
        this.loading2 = false;
      }, 6000)

    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .index-visitor-container {
    display: flex;
    justify-content: space-between;
    margin: auto;
    max-width: 900px;
    min-width: 590px;
    @media screen and (max-width: 900px) {
      justify-content: center;
    }
    section {
      min-width: 0;
      flex: 0 0 590px;
    }
    aside {
      flex: 0 0 250px;
      @media screen and (max-width: 900px) {
        display: none;
      }
      header {
        h2 {
          margin: 20px 0;

          font-family:PingFangHK-Medium;
          font-weight: normal;
          font-size:14px;
          color:#5677fc;
        }
      }
      .aside-content {
        .index-aside-card {
          width: 250px;
          height: 70px;
        }
      }
    }

  }
  .index-tabcontent {
    min-height: 200px;
    margin-top: 5px;
    margin-bottom: 20px;
    .el-pagination {
      text-align: center;
    }
  }
  // post card style    
  .index-cards { 
    .index-card {   
      padding: 10px 16px 12px 16px;   
      background-color: #ffffff;  
      &:not(:first-child) {
        margin-top: 8px;
      }
      &:last-child {
        margin-bottom: 20px;
      }
      header {    
        display: flex;    
        align-items: center;    
        margin-bottom: 6px;
        font-size:12px;   
        color:#999999;
        & > .clickable {
          transition: all 0.2s ease-in-out;
          &:hover {
            color: #5677fc;
          }
        }
        img {
          width: 26px;    
          height: 26px;   
          border-radius: 100%;    
          margin-right: 10px;   
        }
        span {    
          &:not(:first-child) {   
            margin-left: 5px;   
          }
        }
        time {    
          margin-left: 12px;    
        }   
      }
      div.index-card-content {
        margin-bottom: 12px;
        h1 {
          display: inline-block;
          position: relative;
          cursor: pointer;
          margin-bottom: 6px;

          color: #2e5897;
          font-family:PingFangHK-Semibold;
          font-size:16px;
          // hover animation
          &::after {
            content: '';
            transition: all 0.5s ease-in-out;
            transform: scaleX(0);
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: 0;
            left: 0;
            background: #2e5897;
          }
          &:hover {
            &::after {
              transform: scaleX(1);
            }
          }
        }
        div.preview-html {
          margin-bottom: 12px;
          word-break: break-all;

          font-size:14px;
          color:#666666;
          letter-spacing:0;
          text-align:justify;
        }
        div.preview-imgs {
          display: flex;
          img {
            margin-right: 15px;
            width: 174px;
            height: 174px;
          }

        }
      }
      footer {
        ul {
          display: flex;
          li {

            transition: all 0.2s ease-in-out;
            cursor: pointer;
            color: #bcbcbc;
            &:not(:first-child):before{
              content:'\00B7';
              padding:0 8px;
            }
            &:hover {
              color: #a3b5fd;
            }
            &.done {
              color: #a3b5fd;
            }
          }
        }
      }  
    }   
  }
</style>
