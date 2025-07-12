<script setup>
import InfoCard from "@/components/cards/InfoCard.vue";
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
      <VCol cols="3"><VBtn block color="deep-purple-accent-2" class="text-white d-flex flex-column justify align-center" height="100"><VIcon size="32">mdi-table-chair</VIcon>โต๊ะว่าง</VBtn></VCol>
      <VCol cols="3"><VBtn block color="deep-purple-accent-2" class="text-white d-flex flex-column justify align-center" height="100"><VIcon size="32">mdi-table-chair</VIcon>โต๊ะว่าง</VBtn></VCol>
      <VCol cols="3"><VBtn block color="deep-purple-accent-2" class="text-white d-flex flex-column justify align-center" height="100"><VIcon size="32">mdi-table-chair</VIcon>โต๊ะว่าง</VBtn></VCol>
      <VCol cols="3"><VBtn block color="deep-purple-accent-2" class="text-white d-flex flex-column justify align-center" height="100"><VIcon size="32">mdi-table-chair</VIcon>โต๊ะว่าง</VBtn></VCol>
      <VCol cols="3"><VBtn block color="deep-purple-accent-2" class="text-white d-flex flex-column justify align-center" height="100"><VIcon size="32">mdi-table-chair</VIcon>โต๊ะว่าง</VBtn></VCol>
      <VCol cols="3"><VBtn block color="deep-purple-accent-2" class="text-white d-flex flex-column justify align-center" height="100"><VIcon size="32">mdi-table-chair</VIcon>โต๊ะว่าง</VBtn></VCol>
      <VCol cols="3"><VBtn block color="deep-purple-accent-2" class="text-white d-flex flex-column justify align-center" height="100"><VIcon size="32">mdi-table-chair</VIcon>โต๊ะว่าง</VBtn></VCol>
      <VCol cols="3"><VBtn block color="deep-purple-accent-2" class="text-white d-flex flex-column justify align-center" height="100"><VIcon size="32">mdi-table-chair</VIcon>โต๊ะว่าง</VBtn></VCol>
      <VCol cols="3"><VBtn block color="deep-purple-accent-2" class="text-white d-flex flex-column justify align-center" height="100"><VIcon size="32">mdi-table-chair</VIcon>โต๊ะว่าง</VBtn></VCol>
      <VCol cols="3"><VBtn block color="deep-purple-accent-2" class="text-white d-flex flex-column justify align-center" height="100"><VIcon size="32">mdi-table-chair</VIcon>โต๊ะว่าง</VBtn></VCol>
      
      </VRow>
      
    </VCardText>
  </VCard>
</template>
