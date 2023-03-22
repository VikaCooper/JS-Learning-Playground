<template>
  <div class="page">
    <button @click="click">EventBus</button>
    <HelloWorld
      msg="Welcome to Your Vue.js App"
      msgToTest="from app to test"
      @test-button-click="testButtonClick"
    />
    <div>{{ name }}</div>
    <a-button @click="back">Back</a-button>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld'
import { mutation, state } from '@/stores'
import { Button } from 'ant-design-vue'

export default {
  name: 'Page',
  components: {
    HelloWorld,
    'a-button': Button
  },
  provide() {
    return {
      msg: 'provide from app',
    }
  },
  computed: {
    name() {
      return state.name
    },
  },
  mounted() {
    // this.$tip({msg: 'hello world'})
  },
  errorCaptured(err,vm,info) {
    console.log(`cat EC: ${err.toString()}\ninfo: ${info}`);
    return false;
  },
  activated() {
    console.log('page has been activated')
  },
  deactivated() {
    console.log('page has been deactivated')
  },
  methods: {
    changeName: mutation.changeName,
    click() {
      this.changeName('stop')
      this.$bus.$emit('button-click', 'clicked')
    },
    testButtonClick() {
      console.log('test-button-click')
    },
    back() {
      this.$router.push('/')
    }
  },
}
</script>

<style scoped></style>
