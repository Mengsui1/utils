<template>
  <div class="container">
    <!-- 背景canvas-->
    <div class="bgCanvas">
      <canvas ref="bgCanvas"></canvas>
    </div>
    <!-- 剪裁canvas-->
    <div class="cutCanvas">
      <canvas ref="cutCanvas"></canvas>
    </div>
    <!-- 遮罩-->
    <div class="shade"></div>
    <!-- 底部按钮-->
    <div class="slot_btn">
      <div class="success" @click="success">成功</div>
      <div class="cancel" @click="cancel">取消</div>
    </div>
  </div>
</template>

<script>
import CutImage from "../utils/CutImage";
export default {
  name: "CutImg",
  mounted() {
    this.CutImage = new CutImage({
      bgCanvas: this.$refs.bgCanvas,
      cutCanvas: this.$refs.cutCanvas,
      img: require("@/assets/images/2.jpg"),
      cutShape: "rect", //[arc,prismatic,rect]=[圆，棱形，矩形]
    });
  },
  methods: {
    success() {
      this.CutImage.toDataURL();
    },
    cancel() {
      this.CutImage.destroy();
    },
  },
};
</script>

<style scoped lang="less">
@vw: 7.5vw;
.container {
  width: 100%;
  height: 100%;
  position: relative;
}
.bgCanvas {
  width: 100%;
  height: 100%;
  background-color: #000000;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  canvas {
    width: 100%;
    height: 100%;
  }
}
.cutCanvas {
  width: 546 / @vw;
  height: 546 / @vw;
  position: absolute;
  left: 50%;
  margin-left: -273 / @vw;
  top: 50%;
  margin-top: -273 / @vw;
  z-index: 3;
  canvas {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
}
.slot_btn {
  position: absolute;
  bottom: 100 / @vw;
  left: 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80 / @vw;
  width: 100%;
}
.shade {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2;
}
.success,
.cancel {
  width: 150 / @vw;
  height: 80 / @vw;
  line-height: 80 / @vw;
  text-align: center;
  border: 1px solid #cccccc;
  color: #ffffff;
  border-radius: 20 / @vw;
}
.success {
  margin-right: 300 / @vw;
}
</style>
