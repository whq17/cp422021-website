<script setup>
import AddMenuDialog from '@/components/dialogs/AddMenuDialog.vue';
import BillDialog from '@/components/dialogs/BillDialog.vue';
// เปลี่ยนตรงนี้จาก import Component เป็น import store
import { useTableStore } from '@/store/table';
import { useTransactionStore } from '@/store/transaction';
import { ref } from 'vue';

const tableStore = useTableStore();
const transactionStore = useTransactionStore();  // สร้าง instance ของ transaction store

const props = defineProps({
  table: Object,
});

const showMenuDialog = ref(false);
const showBillDialog = ref(false);

const onBill = (table) => {
  transactionStore.addTransaction({
    table: table.name,
    food: table.foods,
    total: table.total,
    type: 'income',
    category: 'food',
  });

  tableStore.clearTable(table.name);       // เคลียร์โต๊ะ
  showBillDialog.value = false;            // ปิด dialog
};

const onAddFood = (menu) => {
  tableStore.addFood(props.table.name, menu);
  showMenuDialog.value = false;
};
</script>

<template>
  <VCard class="w-100 h-100">
    <VToolbar flat density="compact" :color="offline ? 'grey' : 'primary'" dark>
      <v-icon class="ml-3">mdi-chip</v-icon>
      <v-toolbar-title>
        {{ props.table.name }}        
      </v-toolbar-title>      
      <v-spacer></v-spacer>
      <span>เวลาเข้า: {{ props.table.checkin }} น.</span>
    </VToolbar>
    <VCardText class="pa-3">
      <div class="d-flex justify-space-between">        
        <span><v-icon>mdi-account</v-icon> จำนวนลูกค้า:</span>
        <span>{{ props.table.users }}</span>
      </div>
      <div class="d-flex justify-space-between">
        <span><v-icon>mdi-food</v-icon> รายการอาหาร:</span>
        <span>2 รายการ</span>
      </div>
      <div class="d-flex justify-space-between">
        <span><v-icon>mdi-cash</v-icon> ยอดรวม:</span>
        <span>{{ props.table.total }}</span>
      </div>
    </VCardText>
    <VCardActions class="d-flex align-center justify-center">
      <VBtn @click="showMenuDialog = true" color="primary">เพิ่มรายการอาหาร</VBtn>
      <VBtn @click="showBillDialog = true" color="success">ชำระเงิน</VBtn>
    </VCardActions>    
  </VCard>
  <AddMenuDialog v-model="showMenuDialog" @selectedMenu="onAddFood" />
  <BillDialog v-model="showBillDialog" @submit="onBill" :table="props.table" />
</template>
