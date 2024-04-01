<script>
import notfound from '../assets/sad-face.png'

export default {
        data: function () {
            return {
                notfound: notfound
            }
        },
        methods : {
          nextProduct() {
           this.$router.go(-1);
          }
        }
    }
</script>

<template>
<div class="container">
<div class="card">
    <div class="image-container">
      <img :src="notfound" alt="notfound" class="image">
      <div class="product-unavailable">
        <p>This product is unavailable to show</p>
        <button @click="nextProduct">Next Product</button>
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
}

.card,
.skeleton {
 padding: 20px;
 width: 1034px;
 height: 580px;
 margin: 20px;
 border-radius: 10px;
 background-color: #ffffff;
 box-shadow:
 0 9px 33px rgba(0, 0, 0, 0.07); 
}

.image-container {
  position: relative;
  text-align: center; /* Untuk membuat teks dan tombol menjadi terpusat */
}

.image {
  width: 800px;
  height: 500px;
  margin-top: 50px;
}

.product-unavailable {
  position: absolute;
  margin-bottom: 100px; /* Atur jarak antara gambar dan tombol */
  text-align: center;
  font-size: 18px;
  bottom: 150px;
  right: 220px;
}

button {
  border-bottom-color: #002772;
  background-color: #ffffff;
  width: 600px;
  height: 42px;
}
</style>
