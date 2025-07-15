<script setup>
import InfoCard from "@/components/cards/InfoCard.vue";
import TableInfoCard from "@/components/cards/TableInfoCard.vue";
import { useTableStore } from "@/store/table";
import { ref } from "vue";

const tableStore = useTableStore();

// เก็บโต๊ะที่ถูกจองไว้ (หลายโต๊ะ)
const reservedTables = ref([]);

// ฟังก์ชันจองโต๊ะ เพิ่มโต๊ะลง reservedTables (ถ้ายังไม่จอง)
const reserveTable = (table) => {
  // ถ้ายังไม่อยู่ใน reservedTables ให้เพิ่ม
  if (!reservedTables.value.includes(table)) {
    table.status = "reserve";
    table.checkin = new Date();
    reservedTables.value.push(table);
  }
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
        <VCol
          v-for="table in tableStore.tables"
          :key="table.id || table.name"
          cols="3"
          class="d-flex flex-column align-center justify-center"
        >
          <!-- ถ้าโต๊ะยังไม่จอง แสดงปุ่มจอง -->
          <v-btn
            v-if="!reservedTables.includes(table)"
            @click="reserveTable(table)"
            size="x-large"
            block
            prepend-icon="mdi-table"
            height="200"
          >
            {{ table.name }} - {{ table.status }}
          </v-btn>

          <!-- ถ้าโต๊ะจองแล้ว แสดงการ์ด -->
          <TableInfoCard v-else :table="table" />
        </VCol>
      </VRow>

      <!-- แสดงรายการโต๊ะที่ถูกจอง (ถ้าต้องการแสดงนอกตาราง) -->
      <!--
      <div class="mt-6">
        <h3>โต๊ะที่ถูกจอง</h3>
        <div v-for="table in reservedTables" :key="table.id || table.name">
          <TableInfoCard :table="table" />
        </div>
      </div>
      -->
    </VCardText>
  </VCard>
</template>
