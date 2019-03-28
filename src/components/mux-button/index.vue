<!-- ©Copyright 2018 China Eastern Airlines. All rights reserved -->
<!-- Created by bryan on 2018.10.30 -->
<template>
  <div class="" disabled @click="onClicked" :class="mergeBtnClass" :style="mergeBtnStyle">
    <text :class="mergeTextClass" :style="mergeTextStyle">{{text}}</text>
  </div>
</template>
<style scoped lang="scss">
@import "style";
</style>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default' // default outlint custom
    },
    color: {
      type: String,
      default: 'primary' //
    },
    text: {
      type: String,
      default: 'button'
    },
    enabled: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: 'large'
    },
    btnStyle: {
      type: Object,
      default: null
    },
    textStyle: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      style: {},
      isMounted: false
    }
  },
  created () {
  },
  watch: {
    enabled (newValue, oldValue) {
      this.$forceUpdate()
    }
  },
  mounted () {
    this.isMounted = true
  },
  computed: {
    btnEnabled () {
      if (!this.isMounted) {
        return true
      }
      return this.enabled
    },
    mergeBtnClass () {
      if (this.type === 'custom') {
        const enabledClass = []
        enabledClass.push('mux-button')
        enabledClass.push('mux-button-' + this.type)
        enabledClass.push('mux-button-' + this.size)
        enabledClass.push('mux-button-' + this.type + '-enabled')

        const disabledClass = []
        disabledClass.push('mux-button')
        disabledClass.push('mux-button-' + this.type)
        disabledClass.push('mux-button-' + this.size)
        disabledClass.push('mux-button-' + this.type + '-disabled')
        if (!this.isMounted) {
          return enabledClass
        } else if (this.enabled) {
          return enabledClass
        } else {
          return disabledClass
        }
      } else {
        const enabledClass = []
        enabledClass.push('mux-button')
        enabledClass.push('mux-button-' + this.type)
        enabledClass.push('mux-button-' + this.size)
        enabledClass.push('mux-button-' + this.type + '-enabled')
        enabledClass.push('mux-button-' + this.type + '-' + this.color + '-enabled')

        const disabledClass = []
        disabledClass.push('mux-button')
        disabledClass.push('mux-button-' + this.type)
        disabledClass.push('mux-button-' + this.size)
        disabledClass.push('mux-button-' + this.type + '-disabled')
        disabledClass.push('mux-button-' + this.type + '-' + this.color + '-disabled')
        if (!this.isMounted) {
          return enabledClass
        } else if (this.enabled) {
          return enabledClass
        } else {
          return disabledClass
        }
      }
    },
    mergeTextClass () {
      if (this.type === 'custom') {
        const enabledClass = []
        enabledClass.push('mux-button-text-' + this.size)
        enabledClass.push('mux-button-text-' + this.type + '-enabled')

        const disabledClass = []
        disabledClass.push('mux-button-text-' + this.size)
        disabledClass.push('mux-button-text-' + this.type + '-disabled')
        if (!this.isMounted) {
          return enabledClass
        } else if (this.enabled) {
          return enabledClass
        } else {
          return disabledClass
        }
      } else {
        const enabledClass = []
        enabledClass.push('mux-button-text-' + this.size)
        enabledClass.push('mux-button-text-' + this.type + '-' + this.color + '-enabled')

        const disabledClass = []
        disabledClass.push('mux-button-text-' + this.size)
        disabledClass.push('mux-button-text-' + this.type + '-' + this.color + '-disabled')
        if (!this.isMounted) {
          return enabledClass
        } else if (this.enabled) {
          return enabledClass
        } else {
          return disabledClass
        }
      }
    },
    mergeBtnStyle () {
      return this.btnStyle || {}
    },
    mergeTextStyle () {
      return this.textStyle || {}
    }
  },
  methods: {
    onClicked (e) {
      if (!this.enabled) {
        return
      }
      // const { type, disabled } = this;
      this.$emit('muxClick', { e })
    }
  }
}
</script>
