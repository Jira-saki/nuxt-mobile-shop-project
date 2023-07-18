<template>
    <div class="container">
        <div v-for="product in data.products">
            <NuxtLink :to="`/products/${product.id}`">
                <h2 class="title">{{ product.title }}</h2>
            </NuxtLink>
            <img :src=product.thumbnail>
        </div> 
    </div>
</template>

<script setup>
    const { data: data } = await useFetch('https://dummyjson.com/products?limit=12')

</script>

<style scoped>

.container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center ;
}
.container div {
    width: 300px;
    height: 300px;
    margin: 30px 15px;
    background-color: rgb(195, 195, 195);
    border-radius: 10px;
}
.container div:hover{
    transform: scale(1.1)
}
.title {
    color: black;
    text-align: center;
    font-size: 1.2em;
}
img{
    width: 300px;
    height: 220px;
}

</style>