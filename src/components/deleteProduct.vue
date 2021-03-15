<template>
    <v-container>
        <p>Are you sure do you want to delete this product?</p>
        <br>
        <v-btn
            color="primary"
            text
            @click="submit()" 
            elevation="2"
            outlined
        >
        Yes
      </v-btn>

      <v-btn
        color="orange"
        text
        @click="cancel()"
        elevation="2"
        outlined
      >No</v-btn>
    </v-container>
</template>
<script>
import axios from 'axios'
export default {
    name: 'deleteProduct',
    data() {
        return {
            
        }
    },
    methods: {
        submit(){
            let formData = new FormData();
            formData.append('id', this.$route.params.id);
            axios.post(process.env.VUE_APP_RUTA_API+'?action=delete_product',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            )
            .then(response => (
                console.log(response.data),
                window.location.replace("http://localhost:8080/?#/product")
                
                
            ));            
            
        },
        cancel(){
            window.location.replace("http://localhost:8080/?#/product");
        }
    },
}
</script>