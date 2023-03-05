<template>
    <div class="message-container">
        <p> {{ msg }}</p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps ({
    msg: String
})

</script>

<style scoped>
    .message-container {
        color: #004085;
        background-color: #cce5ff;
        border: 2px solid #88daff;
        border-radius: 5px;
        padding: 10px;
        max-width: 400px;
        margin: 30px auto;
    }
</style>