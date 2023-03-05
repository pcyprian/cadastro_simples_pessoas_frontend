<template>
    <div>
        <Message :msg="msg" v-show="msg" />  <!-- esconder a mensagem -->
        <div>
            <form id="burger-form" @submit="createBurger">
                <div class="input-container">
                    <label for="nome">Nome: </label>
                    <input type="text"  id="nome" name="nome" v-model="nome" placeholder="Digite o seu nome completo">
                </div>
                <div class="input-container">
                    <label for="cpf">CPF: </label>
                    <input type="text"  id="cpf" name="cpf" v-model="cpf" placeholder="000.000.000-00">
                </div>
                <div class="input-container">
                    <label for="email">E-mail: </label>
                    <input type="text"  id="email" name="email" v-model="email" placeholder="Digite o seu e-mail">
                </div>
                <div class="input-container">
                    <input type="submit" class="submit-btn" value="Cadastrar">
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import Message from './Message.vue';
import { defineComponent, onMounted, ref } from "vue";
import api from '@/services/api';

const postPessoas = ref([]);
const fetchPostPessoas = () => api.post('/Pessoa/Create').then((response) => {
  console.log(response);
});

onMounted(fetchPostPessoas);


// async function createBurger(e) {  

//     e.preventDefault();

//     const data = {
//         nome: this.nome,
//         cpf: this.cpf,
//         email: this.email
//     }

//     const dataJson = JSON.stringify(data);

//     const req = await fetch("https://localhost:7015/Pessoa/Create", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: dataJson
//     });

//     const res = await req.json();

//     console.log("criou");

// }

</script>

<style scoped>
    #burger-form {
        max-width: 400px;
        margin: 0 auto;
    }

    .input-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    .input-container label, input, select {
        margin-left: 50px;
    }

    label {
        font-weight: bold;
        margin-bottom: 15px;
        color: #222;
        padding: 5px 10px;
        border-left: 4px solid #fcba03;
    }

    input, select {
        padding: 5px 10px;
        width: 300px;
    }

    #opcionais-container {
        flex-direction: row;
        flex-wrap: wrap;
    }

    #opcionais-title {
        width: 100%;
    }

    .checkbox-container {
        display: flex;
        align-items: flex-start;
        width: 50%;
        margin-bottom: 20px;
    }

    .checkbox-container span, 
    .checkbox-container input {
        width: auto;
    }

    .checkbox-container span {
        margin-left: 6px;
        font-weight: bold;
    }

    .submit-btn {
        background-color: #222;
        color: #fcba03;
        font-weight: bold;
        border: 2px solid #222;
        padding: 10px;
        font-size: 16px;
        margin: 0 auto;
        cursor: pointer;
        transition: .5s;
    }

    .submit-btn:hover {
        background-color: transparent;
        color: #222;        
    }
</style>