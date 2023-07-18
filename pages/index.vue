<template>
    <div class="container">
        <img src="/image/moon.png">
    </div>
</template>

<script setup>
useHead({
    title: "Hard:Shop | Hard:Shop よこそ",
    meta:[
        {name:"description", content:"Mobile gadget online shop"}
      ]
})
</script>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
img {
    width: 600px;
    height: 600px
}
</style>