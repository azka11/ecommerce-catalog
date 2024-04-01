<script>
import axios from 'axios';

export default {
  data() {
    return {
    products: [],
    currentProductIndex: 0,
    loading: true,
    error: null
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products/category/men's%20clothing");
        this.products = response.data;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
    nextProduct() {
      if (this.currentProductIndex < this.products.length - 1) {
        this.currentProductIndex++;
      } else {
        // Redirect to 'product/404' jika mencapai produk terakhir
        this.$router.push('/product/404');
      }
    }
  }
}
</script>

<template>
  <div class="container">
    <div v-if="loading" class="skeleton">
      <div class="skeleton-image">
        <img src="" alt="">
      </div>
      <div class="skeleton-content">
        <h2 class="skeleton-title"></h2>
        <div class="skeleton-category">
          <p class="skeleton-text"></p>
          <p class="skeleton-text"></p>
        </div>
        <p class="skeleton-description">
          <span class="skeleton-text"></span>
        </p>
        <p class="skeleton-price"></p>
        <div>
          <button class="skeleton-button1"></button>
          <button class="skeleton-button2"></button>
        </div>
      </div>
    </div>
    <div v-else-if="error">Error: {{ error }}</div>
   <div v-else>
  <div class="card">
    <div>
      <img :src="products[currentProductIndex].image" :alt="products[currentProductIndex].title" class="product-image">
    </div>
    <div class="card-content">
      <h2 class="product-title">{{ products[currentProductIndex].title }}</h2>
      <div class="category-rating">
        <p class="text">{{ products[currentProductIndex].category }}</p>
         <div>
           <p class="text-rating">{{ products[currentProductIndex].rating.rate }} / {{ products[currentProductIndex].rating.count }} </p>
           <div class="rating-stars">
            <svg
              v-for="star in 5"
              :key="star"
              class="star"
              :class="{ 'filled': star <= products[currentProductIndex].rating.rate }"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
            <circle cx="12" cy="12" r="8" />
            </svg>
          </div>
         </div>
      </div>
      <p class="card-description">
        <span class="text">{{ products[currentProductIndex].description }}</span>
      </p>
      <p class="product-price">${{ products[currentProductIndex].price }}</p>
      <div>
        <button class="button1">Buy Now</button>
        <button class="button2" @click="nextProduct">Next Product</button>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<style scoped>

.container {
 display: flex;
 justify-content: center;
 height: 500px;
 background-color: #D6E6FF;
}

.card,
.skeleton {
 display: flex;
 justify-content: space-around;
 padding: 20px;
 width: 1034px;
 height: 580px;
 margin: 20px;
 border-radius: 10px;
 background-color: #ffffff;
 box-shadow:
 0 9px 33px rgba(0, 0, 0, 0.07); 
}

.card-content, .skeleton-content {
 display: flex;
 flex-direction: column;
 width: 550px;
 margin-left: 50px;
}

.card-description, .skeleton-description{
 height: 450px;
 margin: 0;
 padding: 20px 0 20px 0;
 border-top: 5px solid #DCDCDC;
 border-bottom: 5px solid #DCDCDC;
}

.category-rating, .skeleton-category {
  display: flex;
  justify-content: space-between;
  margin: 0;
}

.button1, .skeleton-button1 {
 background-color: #002772;
 color: #ffffff;
 width: 259px;
 height: 42px;
 margin-right: 10px;
 margin-bottom: 10px;
}

.button2, .skeleton-button2 {
 border-bottom-color: #002772;
 background-color: #ffffff;
 width: 259px;
 height: 42px;
 margin-bottom: 10px;
}

.product-image, .skeleton-image {
 width: 301px;
 height: 383px;
 background-attachment: fixed;
 background-position: center;
 background-size: cover;

 margin-top: 100px;
}

.product-title, .skeleton-title {
 margin-top: 10;
 margin-bottom: 0;
 font-size: 25px;
 color: #002772;
}

.text, .skeleton-text {
 font-size: 18px;
}

.product-price, .skeleton-price {
 font-size: 20px;
 margin-bottom: 10px;
 color: #002772;
}

.text-rating {
  font-size: 18px;
  margin-left: -170px;
}

.rating-stars {
  display: flex;
  position: absolute;
  margin-top: -40px;
  margin-left: -100px;
}

.star {
  width: 20px;
  height: 20px;
  fill: none;
  stroke: #002772;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: 0.2s;
}

.star.filled {
  fill: #002772;
}

.text {
  font-size: 18px;
  margin-right: 10px;
}

/* Skeleton Loading Keyframes */
@keyframes pulse {
  0% {
    background-color: #94A3B8;
  }
  50% {
    background-color: #eaebed;
  }
  100% {
    background-color: #94A3B8;
  }
}

.skeleton-image {
 animation: pulse 1s infinite; 
}

.skeleton-title,
.skeleton-category,
.skeleton-description,
.skeleton-button1,
.skeleton-button2{
  animation: pulse 1s infinite;
}

.skeleton-text,
.skeleton-price {
  background-color: #94A3B8;
}
</style>

