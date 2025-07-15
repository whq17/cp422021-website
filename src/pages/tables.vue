<script setup>
import InfoCard from "@/components/cards/InfoCard.vue";
import TableInfoCard from "@/components/cards/TableInfoCard.vue";
import { useTableStore } from "@/store/table";

const tableStore = useTableStore();
const reserveTable = (table) =>{
  table.status = 'reserve'
  table.checkin = new Date()
};



</script>
<template>
  <VCard>
    <VCardItem>
      <VCardTitle>โต๊ะในร้าน</VCardTitle>
    </VCardItem>
    <VCardText>
      <VRow>
        <VCol cols="3">
          <InfoCard
            title="โต๊ะทั้งหมด"
            :stats="10"
            unit="ตัว"
            icon="mdi-table"
            color="primary"
          />
        </VCol>
        <VCol cols="3">
          <InfoCard
            title="โต๊ะว่าง"
            :stats="5"
            unit="ตัว"
            icon="mdi-table-plus"
            color="success"
          />
        </VCol>
        <VCol cols="3">
          <InfoCard
            title="ใช้งานอยู่"
            :stats="5"
            unit="ตัว"
            icon="mdi-table-account"
            color="warning"
          />
        </VCol>
        <VCol cols="3">
          <VCard class="align-center justify-center d-flex fill-height">
            <VBtn                
              class="fill-height"
              variant="text"
              block
              text
            >
              <VIcon>mdi-plus</VIcon>
              เพิมโต๊ะใหม่
            </VBtn>
          </VCard>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
  <VCard class="mt-8">
    <VCardText>
      <VRow>
      <VCol v-for="table in tableStore.tables" cols="3" class="d-flex align-center justify-center">
        <v-btn @click="reserveTable(table)" size="x-large" block prepend-icon="mdi-table" height="200">
        {{ table.name }} - {{ table.status }}</v-btn>
      <TableInfoCard :table="table" />
      </VCol>
      

      </VRow>
      
    </VCardText> 
4  </VCard>
</template>
