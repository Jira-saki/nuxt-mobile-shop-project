<template>
    <div>
        <Head>
            <Title>Hard:Shop | {{ product.title }}</Title>
            <Meta name="description" :content=product.description />
        </Head>
        <div class="container">
            <img :src=product.thumbnail>
            <div class="detail">
                <h3>{{ product.title }}</h3>
                <h4>価格: {{ product.price }}0円</h4>
                <h4>カテゴリー： {{ product.category }}</h4>
                <h4>ブランド： {{ product.brand }}</h4>
                <p>{{ product.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    const {id} = useRoute().params
    const { data: product } = await useFetch('https://dummyjson.com/products/'+id)

</script>

<style scoped>
.container {
    display: flex;
    justify-content: center;
    font-family: GenJyuuGothic,Hiragino Kaku Gothic ProN,Hiragino Sans,Meiryo,sans-serif;
    color: #606060;
}
.detail {
    padding-left: 10px;
}

.detail h3{
    color: black
}
</style>