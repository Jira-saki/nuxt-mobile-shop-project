<template>
    <div class="container">
        <img src="/image/about.png" alt="">
    </div>
</template>

<script setup>
useHead({
    title: "Hard:Shop | Hard:Shop につて",
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
    margin-top: 4rem;
    width: 600px;
    height: 400px;
}
</style>