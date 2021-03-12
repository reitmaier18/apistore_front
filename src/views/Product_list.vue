<template>
  <v-container fluid>
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
        product:null
      }
    },
    methods: {
      
    },
    mounted(){
      axios.get('http://127.0.0.1:80/Personal/apistore/backend/controllers/index.php', {
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
      
    }
  }
</script>
