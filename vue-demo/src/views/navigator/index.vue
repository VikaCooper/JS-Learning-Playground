<template>
  <div>
    <a-row>
      <a-button type="link" @click="navigateTo('page')"> Page </a-button>
      <a-button type="link" @click="navigateTo('page1')"> Page1 </a-button>
    </a-row>
  </div>
</template>

<script>
import { Row, Button } from 'ant-design-vue'

export default {
  name: 'Navigator',
  components: {
    'a-row': Row,
    'a-button': Button,
  },
  methods: {
    navigateTo(name) {
      this.$router.push({
        name,
      })
    },
  },
}
</script>

<style scoped></style>
