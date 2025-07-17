<script setup>
import { useTableStore } from '@/store/table';
import { useTransactionStore } from '@/store/transaction';

const tableStore = useTableStore();
const transactionStore = useTransactionStore();

const props = defineProps({
  table: Object,
});

const onBill = (table)=>{
  
}
const onAddFood = (menu)=>{

}
</script>
<template>
  <VCard class="w-100 h-100">
    <VToolbar flat density="compact" :color="offline? 'grey':'primary'" dark>
      <VIcon class="ml-3">mdi-chip</VIcon>
      <VToolbarTitle>
        {{ props.table.name }}      
      </VToolbarTitle>      
      <VSpacer></VSpacer>      
    </VToolbar>
    <VCardText class="pa-3">
      <div class="d-flex justify-space-between">        
        <span><VIcon>mdi-clock</VIcon> เวลาเริ่ม:</span>
        <span>{{props.table.checkin}} น.</span>
      </div>
      <div class="d-flex justify-space-between">
        <span><VIcon>mdi-food</VIcon> รายการอาหาร:</span>
        <span>{{ props.table.foods.length }} รายการ</span>
      </div>
      <div class="d-flex justify-space-between">
        <span><VIcon>mdi-cash</VIcon> ยอดรวม:</span>
        <span>{{props.table.total}} บาท</span>
      </div>
    </VCardText>
    <VCardActions class="d-flex align-center justify-center">
      <VBtn color="primary">เพิ่มรายการอาหาร</VBtn>
      <VBtn color="success" @click="bill">ชำระเงิน</VBtn>
    </VCardActions>    
  </VCard>
</template>
