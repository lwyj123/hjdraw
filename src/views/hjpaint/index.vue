<style lang="scss" src="./hjpaint.scss"></style>
<template>
    <div class="canvas-wrapper">
        <ul ref="colors" class="doodle-colors">
            <li data-color="black"></li>
            <li data-color="green"></li>
            <li data-color="yellow"></li>
            <li data-color="red"></li>
            <li data-color="white"></li>
        </ul>
        <ul ref="controllers" class="doodle-controllers">
            <li class="undo"></li>
            <li class="redo"></li>
            <li class="clear"></li>
        </ul>
        <canvas ref="canvas"
                class="doodle-content" 
                width='500' 
                height='500'
                @mousedown="canvasDown($event)" 
                @mouseup="canvasUp($event)"
                @mousemove="canvasMove($event)"
                @touchstart="canvasDown($event)" 
                @touchend="canvasUp($event)"
                @touchmove="canvasMove($event)">
        </canvas>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import {
    initCanvas
  } from './canvas.js'

  export default {
    name: 'index-visitor',
    data() {
      return {
        ctx: {},
        hasOnGoingStroke: false,
        canvasDOM: null,
        colorsDOM: null,
        controllersDOM: null,
      }
    },
    computed: {

     
    },
    mounted() {
      this.canvasDOM = this.$refs.canvas
      this.colorsDOM = this.$refs.colors
      this.controllersDOM = this.$refs.controllers
      this.ctx = this.canvasDOM.getContext('2d')
      initCanvas(this.canvasDOM, this.colorsDOM, this.controllersDOM, null)
    },
    methods: {
      canvasDown(e) {
        var x, y;
        switch (e.type) {
          case 'touchstart':
            x = e.touches[0].clientX - e.currentTarget.offset().left;
            y = e.touches[0].clientY - e.currentTarget.offset().top;
          break;
          default:
            x = e.offsetX;
            y = e.offsetY;
          break;
        }
        this.hasOnGoingStroke = true;
        // set style and begin paint
        //this.ctx.strokeStyle = selectedColor.opagueCode;
        this.ctx.strokeStyle = '#222'
        this.ctx.lineWidth = 5;
        this.ctx.lineCap = 'round';
        this.ctx.lineJoin = 'round';
        this.ctx.imageSmoothingEnabled = true;
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
      },
      canvasUp(e) {
        if (this.hasOnGoingStroke === true) {
          var x, y;
          switch (e.type) {
            case 'touchend':
              x = e.changedTouches[0].clientX - $canvas.offset().left;
              y = e.changedTouches[0].clientY - $canvas.offset().top;
            break;
            default:
              x = e.offsetX;
              y = e.offsetY;
            break;
          }
          //this.ctx.strokeStyle = selectedColor.regularCode;
          this.ctx.strokeStyle = '#222'
          this.ctx.lineTo(x, y);
          this.ctx.stroke();
          this.hasOnGoingStroke = false;
          // saveImageData();
        }
      },
      canvasMove(e) {
        if (this.hasOnGoingStroke === true) {
          var x, y;
          switch (e.type) {
            case 'touchmove':
              x = e.touches[0].clientX - e.currentTarget.offset().left;
              y = e.touches[0].clientY - e.currentTarget.offset().top;
            break;
            default:
              x = e.offsetX;
              y = e.offsetY;
            break;
          }
          this.ctx.lineTo(x, y);
          this.ctx.stroke();
        }
      },
    },
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
