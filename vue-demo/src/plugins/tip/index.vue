<script>
export default {
  name: 'Tip',
  data() {
    return {
      visible: false,
      msg: '',
    }
  },
  mounted() {
    this.visible = true
    setTimeout(() => {
      this.visible = false
    }, 1000)
  },
  render() {
    return (
      <div v-if="visible" class="tip">
        {this.msg}
      </div>
    )
  },
}
</script>

<style scoped>
.tip {
  position: fixed;
  top: calc(50% - 10px);
  left: calc(50% - 50px);
  height: 20px;
  width: 100px;
  font-size: 16px;
  line-height: 20px;
}
</style>
