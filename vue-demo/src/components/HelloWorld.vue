<template>
  <div>
    <h1>{{ msg }}</h1>
    <Test v-bind="$attrs" v-on="$listeners" ref="test" />
    <button @click="clickButton">共同父组件</button>
  </div>
</template>

<script>
import Test from './Test'

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components: {
    Test,
  },
  data() {
    return {
      test: 1,
    }
  },
  created() {
    this.$bus.$on('button-click', this.clickHandler)
    console.log('$attrs: ', JSON.stringify(this.$attrs))
  },
  mounted() {},
  methods: {
    clickHandler(msg) {
      console.log('[HelloWorld]: ', msg)
    },
    clickButton() {
      console.log(this.$root)
      this.$root.$emit('click-button-in-hello-world')
    },
  },
}
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
