<script setup lang="ts">
import type { Payment } from '../components/products/columns'
import { onMounted, ref } from 'vue'
import { columns } from '../components/products/columns'
import DataTable from '../components/products/data-table.vue'

const data = ref<Payment[]>([
  {
    id: 'm5gr84i9',
    amount: 100,
    status: 'success',
    email: 'ken99@yahoo.com',
  },
  {
    id: '3u1reuv4',
    amount: 242,
    status: 'success',
    email: 'Abe45@gmail.com',
  },
  {
    id: 'derv1ws0',
    amount: 837,
    status: 'processing',
    email: 'Monserrat44@gmail.com',
  },
  {
    id: '5kma53ae',
    amount: 874,
    status: 'success',
    email: 'Silas22@gmail.com',
  },
  {
    id: 'bhqecj4p',
    amount: 721,
    status: 'failed',
    email: 'carmella@hotmail.com',
  },
]);

onMounted(async () => {
//   data.value = await getData()
})
</script>

<template>
  
  <div class="container py-10 mx-auto">
    <DataTable :columns="columns" :data="data" />
  </div>

</template>