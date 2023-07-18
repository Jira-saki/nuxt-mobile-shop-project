<template>
    <div>
        <header>
            <nav>
                <h1 class="logo">Hard:Shop</h1>
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/about">About</NuxtLink>
                <NuxtLink to="/products">ブラン­・製品</NuxtLink>
                <NuxtLink to="/contact">お知らせ­・サポート</NuxtLink>
            </nav>
        </header>
        <div>
            <slot />
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
nav {
    margin: 10px auto;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: GenJyuuGothic,Hiragino Kaku Gothic ProN,Hiragino Sans,Meiryo,sans-serif;
    font-size: 14px;
    border-bottom: 0.5px solid rgb(218, 218, 251);
}

nav a {
    color: grey;
    text-decoration: none;
    margin-left: 12px;
    font-size: 15px;
    padding: 10px;
    transition: 0.5s;
}
nav a:hover {
  color: blue;
}

.logo {
    margin-right: auto;
    padding-left: 10px;
    font-weight: 600;
    color: blue;
}

</style>