<template>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="'http://127.0.0.1:80/Personal/StoreApp/'+product.products_photo"
    >
      
    </v-img>

    <v-card-subtitle class="pb-0">
      {{product.product_name}}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{product.product_detail}}</div>

      
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Share
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
  export default {
    name: 'Card',
    props: {
      product: {
        type: Object,
        default: null
      }
    },
    data(){
      return {
        
      }
    },
    methods:{
      
    }
  }
</script>
