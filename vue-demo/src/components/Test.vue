<template>
  <div>
    <div>{{ msgToTest }}</div>
    <div>{{ providedMsg }}</div>
    <button @click="sendToApp">传递给APP</button>
  </div>
</template>
<script>
export default {
  name: 'Test',
  props: {
    msgToTest: String,
  },
  inject: {
    providedMsg: {
      from: 'msg',
      default: 'NO DATA',
    },
  },
  data() {
    return {
      providedMsg: this.providedMsg,
    }
  },
  created() {
    this.$bus.$on('button-click', this.clickHandler)
    this.$root.$on('click-button-in-hello-world', this.clickHandler4Brother)
  },
  mounted() {},
  methods: {
    clickHandler(msg) {
      console.log('[Test]: ', msg)
    },
    clickHandler4Brother() {
      console.log('click-button-in-hello-world')
    },
    sendToApp() {
      this.$emit('test-button-click')
    },
  },
}
</script>

<style scoped></style>
