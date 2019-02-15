<template>
  <div id="app">
    <HelloFetp :text="text"/>
  </div>
</template>

<script>
import HelloFetp from '@/component/HelloFetp'
export default {
  name: 'app',
  data () {
    return {
      text: 'Hello FETP'
    }
  },
  components: {
    HelloFetp
  }
}
</script>

<style lang="scss">
@import '~@/css/index.scss';

#app {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  line-height: 500px;
  color: #fff;
  font-size: 72px;
  font-weight: bold;
  text-align: center;
  background: #000;
}
.logo {
  display: block;
  width: 200px;
  height: 200px;
}
</style>
