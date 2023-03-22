<template>
  <div class="page1">
    <a-button @click="back">Back</a-button>
    <a-row style="width: 500px">
      <div>trim修饰符</div>
      <a-input v-model.trim="value"></a-input>
      <div>number修饰符</div>
      <a-input v-model.number="value1"></a-input>
      <div>lazy修饰符</div>
      <a-input v-model.lazy="value2"></a-input>
    </a-row>

    <a-row>
      <div @click="clickMessage(2)" style="background: #eee;">
        <a-button @click.stop="clickMessage('stop')">stop修饰符</a-button>
        <a-button @click.self="clickMessage('self')">self修饰符</a-button>
        <a-button @click.once="clickMessage('once')">once修饰符</a-button>
      </div>
      <a-button @click.native="clickMessage('native')">native修饰符</a-button>
    </a-row>
  </div>
</template>

<script>
import { Button, Input, Row } from 'ant-design-vue'

export default {
  name: 'Page1',
  components: {
    'a-button': Button,
    'a-input': Input,
    'a-row': Row,
  },
  data() {
    return {
      value: '',
      value1: '',
      value2: '',
    }
  },
  methods: {
    back() {
      this.$router.push('/')
    },
    clickMessage(msg) {
      console.log(msg)
    },
  },
}
</script>

<style scoped></style>
