<template>
<div class="row mb-2">
        <div class="col-md-6" v-for="(n,i) in travelList" :key="n">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary-emphasis">cafe {{ i+1 }} </strong>
              <h3 class="mb-0">{{n.name}}</h3>
              <div class="mb-1 text-body-secondary">Starting price {{n.price}} บาท</div>
              <p class="card-text mb-auto">{{n.text_box}}</p>
              
              <div style="margin-bottom: 30px;">
              <RouterLink :to="{name: `news_${i+1}` , params: {id: n.name}}" class="icon-link gap-1 icon-link-hover stretched-link">
                Next
                <svg class="bi"> <use xlink:href="#chevron-right"/></svg>
             </RouterLink>
            </div>     
            </div>
            <div class="col-auto d-none d-lg-block">
              <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img"  preserveAspectRatio="xMidYMid slice" focusable="false" 
              style="margin: 15px;" >
                <image :xlink:href="n.img" x="0" y="10" width="200" height="200" />
              </svg>
            </div>
          </div>
        </div>
    </div>
</template>

<script setup>

import { RouterLink } from 'vue-router'
import { ref } from 'vue';

const travelList=ref([
   {name: 'Yello ',  price:150, img:"https://www.neepaiteaw.com/wp-content/uploads/2023/07/IMG_6680-1024x1024.jpeg", quantity: 0 ,
    text_box:'The cafe concept is designed with a focus on a white color palette. The interior is carefully arranged and decorated to provide an inviting seating area, creating a sense of relaxation and contemporary vibes. The design seamlessly blends with loft-style furniture and is accented with gold gimmicks, adding a touch of sophistication'
    }, 
  
    {name:'Krisp Cafe',    price:200, img:"https://www.neepaiteaw.com/wp-content/uploads/2023/07/IMG_6690-1024x1024.jpeg", quantity: 0 ,
    text_box:"The most chill cafe with cozy seating and delightful pastries is Krisp Cafe, the trendiest spot owned by the starlet, Ploy Chidjun. This cafe is crafted to ensure a relaxing experience at all times. Whether you come alone, with friends, or with a partner, I can assure you that it's perfect for photography enthusiasts. If you visit, I guarantee you won't be disappointed!"
    },
    
    {name:'Goon-Bread&Brunch',   price:100, img:"https://www.neepaiteaw.com/wp-content/uploads/2023/07/IMG_6869-1024x1024.jpeg", quantity: 0 ,
    text_box:'The cafe boasts a bright and airy atmosphere. The rounded and curvy designs blend seamlessly with the captivating cityscape, incorporating white hues and wooden furniture to create a charming and modern feel. The design strikes a balance between modernity and loft-style, presenting a contemporary yet cozy ambiance, all within the concept of homely'
    },
    
    {name:'Graincafe.cnx',     price:120, img:"https://www.neepaiteaw.com/wp-content/uploads/2023/07/IMG_6701-1024x1024.jpeg", quantity: 0 ,
    text_box:'The loft-style adopts a modern, contemporary design with a touch of luxury. It exudes grandeur while emphasizing gray tones and exposing raw concrete as the authentic essence of the building. This design choice aims to create a highly relaxing ambiance. Inside, predominantly featuring white furniture, adding to the overall luxurious and contemporary feel'
    },
    
    {name:'Transit Number 8',  price:260, img:"https://www.neepaiteaw.com/wp-content/uploads/2023/07/IMG_6707-1024x1024.jpeg", quantity: 0 ,
    text_box:'The cafe will be designed and decorated in a Japanese style. I must mention that there will be numerous picturesque corners, and each zone is carefully designed. Firstly, there are two floors in the cafe, each located opposite each other. The design will be modern, focusing on white tones and integrating wooden furniture to create a lively and relaxing ambiance, true to Japanese aesthetics'
    },
    
    {name:'glin.cafe',  price:300,  img:"https://www.neepaiteaw.com/wp-content/uploads/2023/07/IMG_6713-1024x1024.jpeg", quantity: 0 ,
    text_box:"A cozy minimalist-style cafe, resembling a homely atmosphere with soothing white tones, allowing for a relaxing experience. It's part of the same chain as Goon and is situated in the same area as Cheeva Spa on Hasadisewi Road. The cafe offers both indoor and outdoor seating zones, providing an excellent vibe that seamlessly harmonizes with the surroundings"
    },
])


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Itim&family=Mooli&family=Nunito:wght@500&family=Roboto+Slab&display=swap');
  .row {
    background-color: #ffffff; 
  }
  
  h3 {
    color: #000000; 
    font-family: 'Itim', cursive;
  }
  .row {
    background-color: #f5f5f5;
    padding: 20px;
    margin-bottom: 20px;
    font-family: 'Itim', cursive; 
  }

  h3 {
    color: #0a0909;
    font-size: 80px; 

  }

  .row {
    background-color: #f8d4ff;
    padding: 25px;
    border-radius: 20px;
    border: 1px solid rgb(122, 4, 4);

  }

  h3 {
    color: #333;
    font-size: 80px;
  }

  .icon-link {
    text-decoration: none; 
    color: #850089;
    transition: color 0.2s;
  }

  .icon-link:hover {
    color: #ff0000; 
  }
  
  .shadow-box {
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); 
  }


</style>

