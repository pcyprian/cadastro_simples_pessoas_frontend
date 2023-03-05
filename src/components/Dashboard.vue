<template>

    <div id="burger-table" v-if="burgerList">
        <Message :msg="msg" v-show="msg" />  <!-- esconder a mensagem -->
        <div>
            <div id="burger-table-heading">
                <div class="order-id">#:</div>
                <div>Nome:</div>
                <div>CPF:</div>
                <div>E-mail:</div>
            </div>
        </div>
        <div id="burger-table-rows">
            <div class="burger-table-row" v-for="burger in burgerList" :key="burger.id">
                <div class="order-number">{{ burger.id }}</div>
                <div>{{ burger.nome }}</div>
                <div>{{ burger.pao }}</div>
                <div>{{ burger.carne }}</div>
                <div>
                    <ul v-for="(opcional, index) in burger.opcionais" :key="index">
                        <li>{{ opcional }}</li>
                    </ul>
                </div>
                <div>
                    <select name="status" class="status" @change="updateBurger($event, burger.id)">
                        <option :value="s.tipo" v-for="s in status" :key="s.id" :selected="burger.status == s.tipo">
                        {{ s.tipo }}
                        </option>
                    </select>
                    <button class="delete-btn" @click="deleteBurger(burger.id)">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <h2>Não há pessoas cadastradas no momento!</h2>
    </div>



    <!-- <div id="pessoas-table" v-if="pessoas">
        <Message :msg="msg" v-show="msg" />  esconder a mensagem -->
        <!-- <div>
            <div id="pessoas-table-heading">
                <div class="order-id">#:</div>
                <div>Nome:</div>
                <div>CPF:</div>
                <div>E-mail:</div>
            </div>
        </div>
        <div id="pessoas-table-rows">
            <div class="pessoas-table-row" v-for="pessoa in pessoas" :key="pessoa.id">
                <div class="order-number">{{ pessoa.id }}</div>
                <div>{{ pessoa.name }}</div>
                <div>{{ pessoas.cpf }}</div>
                <div>{{ pessoas.email }}</div>
                <div>
                    <select name="status" class="status" @change="updateBurger($event, pessoa.id)">
                        <option :value="s.tipo" v-for="s in status" :key="s.id" :selected="pessoa.status == s.tipo">
                        {{ s.tipo }}
                        </option>
                    </select>
                    <button class="delete-btn" @click="deleteBurger(pessoa.id)">Excluir</button>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <h2>Não há pessoas cadastradas no momento!</h2>
    </div> -->
</template>



<script setup>
import Message from './Message.vue';
import { onMounted, ref } from "vue";
import api from '@/services/api';

const pessoas = ref([]);
const fetchPessoas = () => api.get('/Pessoa/GetAll').then((response) => (pessoas.value = response.data.results));

onMounted(fetchPessoas);

// const burgerList = ref([]);
// const status = ref([]);
// const msg = ref('');


// async function getPedidos() {
//   const req = await fetch('http://localhost:5173/burgers')
//   const data = await req.json()

//   burgerList.value = data
//   // Resgata os status de pedidos

// }


// async function getStatus() {
//   const req = await fetch('http://localhost:5173/status')
//   const data = await req.json()
//   status.value = data
// }

// async function deleteBurger(id) {

//   const req = await fetch(`http://localhost:5173/burgers/${id}`, {
//     method: "DELETE"
//   });

//   const res = await req.json();

//   //exibir mensagem ao remover o pedido
//   msg.value = `Pedido removido com sucesso`;
//   // limpar a mensagem
//   setTimeout(() => msg.value = "", 3000);
  
//  getPedidos();
 
// }


// async function updateBurger(event, id) {
//   const option = event.target.value;
//   const dataJson = JSON.stringify({status: option});
//   const req = await fetch(`http://localhost:5173/burgers/${id}`, {
//     method: "PATCH",
//     headers: { "Content-Type" : "application/json" },
//     body: dataJson
//   });
//   const res = await req.json();

//     //exibir mensagem ao enviar o pedido
//     msg.value = `O pedido Nº ${res.id} foi atualizado para ${res.status}`;

//     // limpar a mensagem
//     setTimeout(() => msg.value = "", 3000)

//     getPedidos()
// }

// getPedidos();
// getStatus();

</script>


<style scoped>

#burger-table {
    max-width: 1200px;
    margin: 0 auto;
  }
  #burger-table-heading,
  #burger-table-rows,
  .burger-table-row {
    display: flex;
    flex-wrap: wrap;
  }
  #burger-table-heading {
    font-weight: bold;
    padding: 12px;
    border-bottom: 3px solid #333;
  }
  .burger-table-row {
    width: 100%;
    padding: 12px;
    border-bottom: 1px solid #CCC;
  }
  #burger-table-heading div,
  .burger-table-row div {
    width: 19%;
  }
  #burger-table-heading .order-id,
  .burger-table-row .order-number {
    width: 5%;
  }
  select {
    padding: 12px 6px;
    margin-right: 12px;
  }
  .delete-btn {
    background-color: #222;
    color:#fcba03;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
  }
  
  .delete-btn:hover {
    background-color: transparent;
    color: #222;
  }

</style>