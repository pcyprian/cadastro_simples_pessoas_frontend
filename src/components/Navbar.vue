<template>
    <div id="nav">
        <router-link to="/" id="logo-url">
            <img :src="logo" :alt="alt" id="logo">
        </router-link>    
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/Cadastros">Cadastros</RouterLink>
    </div>
</template>

<script setup>
const props = defineProps ({
    logo: String,
    alt: String
})

</script>

<style scoped>
    #nav {
        background-color: #222;
        border-bottom: 4px solid #111;
        padding: 15px 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    #nav #logo-url {
        margin:  auto;
        margin-left: 0;
    }

    #logo {
        width: 40px;
        height: 40px;
    }

    #nav a {
        color: #fcba03;
        text-decoration: none;
        margin: 12px;
        transition: .5s;
    }

    #nav a:hover {
        color: #fff;
    }

</style>