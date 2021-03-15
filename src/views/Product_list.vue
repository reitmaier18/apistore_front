<template>
  <v-container>
        <br>
        <v-card
            elevation="2"
        >
            <v-card-title
                
            >
                <strong>{{title}}</strong>   
            </v-card-title>
            <hr>
            <v-card-text class="text--primary">
                <!--div>New product form</div-->
                <v-row dense>
                  <v-col
                    v-for="item in product"
                    :key="item.id"
                    :cols="12"
                    :xs="12"
                    :md="4"
                    :sm="6"
                  >
                    <Card :product="item"/>  
                  </v-col>
                </v-row>
            </v-card-text>
        </v-card>
        
    </v-container>
  
</template>
<script>
  import axios from 'axios'
  import Card from '@/components/card.vue'
  export default {
    name: 'Product',
    components: {
      Card
    },
    data(){
      return {
        title: 'Product module',
        product:null
      }
    },
    mounted(){
      axios.get(process.env.VUE_APP_RUTA_API, {
          params: {
            action: 'list_product',
          }
        })
        .then(response =>(
          console.log(response.data),
          this.product = response.data
          ));
    },
    created: ()=>{
      if (!localStorage.usr) {
          window.location.replace("http://localhost:8080/?#/login")
      }
    }
  }
</script>
