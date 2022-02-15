<template>
  <div class="hello">
    
     <!-- teste 1 -->
    <h1>{{ msg }}</h1>
    <div>
     <!-- teste 2 -->
      <button @click="count++">Add up</button>
      <p>Total clicks: {{ count }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
    data() {
    return { count: 0 }
    },
  props: {
    msg: String,
  },
};
</script>

<style scoped></style>
