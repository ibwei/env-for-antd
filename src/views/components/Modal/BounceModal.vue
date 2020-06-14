<template>
  <transition name="fade">
    <div class="bounce-mask" v-show="visible">
      <transition
        name="bounce"
        @after-enter="transitionStatus = true"
        @after-leave="transitionStatus = false"
      >
        <div class="bounce-box" v-show="visible" v-clickoutside="outClick">
          <slot></slot>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'BounceModal',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      transitionStatus: false
    }
  },
  methods: {
    outClick: function () {
      this.transitionStatus && this.hide()
    },
    hide: function () {
      this.transitionStatus = false
      this.$emit('update:visible', false)
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="less">
.bounce-mask {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9999;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .bounce-box {
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
  }
}
</style>
