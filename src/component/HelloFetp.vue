<template>
  <div class="hello">
    <a href="https://fetp.github.io/fetp-docs/#/" target="_blank">HELLO FETP</a>
    <a href="https://fetp.github.io/fetp-docs/#/" target="_blank"><img class="logo" src="~@/img/logo.png" /></a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.hello {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
a {
  color: #eb9f2e;
}
</style>
