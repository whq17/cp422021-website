import { defineStore } from "pinia";

export const useFoodStore = defineStore({
  id: "food",
  state: () => {
    return {
      foods: [
        {    
          name: 'บุฟเฟต์อาหาร 1 คน',
          price: 199,
          type: 'food',
          image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        },
        {    
          name: 'น้ำซุปหมาล่า',
          price: 30,
          type: 'sauce',
          image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        },
        {    
          name: 'น้ำซุปต้มยำ',
          price: 30,
          type: 'sauce',
          image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        },
        {    
          name: 'น้ำจิ้มตีลังกาได้',
          price: 30,
          type: 'sauce',
          image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        },
        {    
          name: 'น้ำจิ้มพิเศษ',
          price: 50,
          type: 'sauce',
          image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        },
        {    
          name: 'ข้าวผัดหมู',
          price: 50,
          type: 'food',
          image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        },
        {    
          name: 'ผัดไทยกุ้งสด',
          price: 50,
          type: 'food',
          image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        },
        {    
          name: 'ข้าวผัดกุ้ง',
          price: 50,
          type: 'food',
          image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        },
        {    
          name: 'ข้าวผัดปู',
          price: 50,
          type: 'food',
          image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        },
        {    
          name: 'น้ำเปล่า',
          price: 10,
          type: 'drink',
          image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        },
        {
          name: 'เบียร์',
          price: 50,
          type: 'drink',
          image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        },
        {    
          name: 'น้ำแข็ง',
          price: 5,
          type: 'drink',
          image: 'https://cdn.vuetifyjs.com/images/cards/desert.jpg',
        },
      ],
    }
  },
  actions: {
    
  }
});
