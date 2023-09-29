<template>
    <div class="box_all">
    <div class="col" v-for="(n,i) in travelList" :key="n">
      <div class="card" style="width: 25rem;" >
        <img :src="n.img" class="card-img-top">
        <div class="card-body">
          <h3 class="card-title">{{ n.name }}</h3>
          <p> Price per table : {{n.price}}</p>
          <a class="btn btn-primary" @click="list_local_control(i.name, i.quantity)"> Reserve a table </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue';

const travelList=ref([
{name:'Transit Number 8',  price:45, img:"https://www.neepaiteaw.com/wp-content/uploads/2023/07/IMG_6707-1024x1024.jpeg", quantity: 0 ,
    text_box:'ร้านนี้เหมาะสำหรับกาแฟเลิศรส และชิลล์มาก! 😌☕️ #คาเฟ่ชิลล์'
    },])


</script>
<style scoped>
.card {
  height: 500px;
  width: 400px;
  margin: 20px;
  border: 1px solid rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(255, 255, 255, 0.1);
}

.card-img-top {
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.card-body {
  text-align: center;
  padding: 20px;
}

.card-title {
  text-align: center;
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.card-text {
  text-align: center;
  font-size: 1.2rem;
}

.card-subtitle {
  text-align: center;
  font-size: 1rem;
  color: #000000;
  margin-top: 10px;
}

.btn-primary {
  background-color: #83f368;
  border: none;
  border-radius: 5px;
  color: #000000;
}

.btn-primary:hover {
  background-color: #ff0000;
}

.box_all {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 30px;
}
</style>