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
                <productForm/>
            </v-card-text>
            
            
        </v-card>
        
    </v-container>
</template>
<script>
import productForm from '@/components/product_form.vue'
export default {
    name: 'editproduct',
    components: {
        productForm
    },
    data() {
        return {
            title: 'Edit product'
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