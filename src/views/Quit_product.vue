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
               <deleteProduct/>
            </v-card-text>
            
            
        </v-card>
        
    </v-container>
</template>
<script>
import deleteProduct from '@/components/deleteProduct.vue'
export default {
    name: 'quitproduct',
    components: {
        deleteProduct
    },
    data() {
        return {
            title: 'Quit product'
        }
    },
    methods:{
        validate_user(){
            if (!localStorage.usr) {
                window.location.replace("http://localhost:8080/?#/login")
            }
        }
    },
    created: ()=>{
      if (!localStorage.usr) {
          window.location.replace("http://localhost:8080/?#/login")
      }
    }
}
</script>