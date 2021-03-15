<template>
    <v-container>
        <v-form
            ref = "form"
            v-model = "valid"
            lazy-validation
        >
            <v-row>
                <v-col
                    cols="12"
                    md="4"
                >
                    <v-file-input
                        v-model = "photo"
                        :rules="photoRules"
                        accept="image/*"
                        label="File input"
                        prepend-icon="mdi-camera"
                    ></v-file-input>
                </v-col>
            </v-row>
            <v-row>
                <v-col
                    cols="12"
                    md="4"
                >
                    <v-text-field
                        v-model = "name"
                        :rules="nameRules"
                        :counter="50"
                        label="Product name"
                        prepend-icon=""
                        required
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="12"
                    md="8"
                >
                    <v-text-field
                        v-model = "detail"
                        :rules="detailRules"
                        :counter="250"
                        label="Product detail"
                        prepend-icon=""
                        required
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="12"
                    md="4"
                >
                    <v-text-field
                        v-model = "price"
                        :rules="priceRules"
                        :counter="10"
                        label="Product price"
                        prepend-icon=""
                        required
                    ></v-text-field>
                </v-col>

                <v-col
                    cols="12"
                    md="4"
                >
                    <v-text-field
                        v-model = "tax"
                        :rules="taxRules"
                        :counter="10"
                        label="Product tax"
                        prepend-icon=""
                        required
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-btn
                class="mr-4"
                :disabled="!valid"
                @click="validate"
            >   
                submit
            </v-btn>
        </v-form>
    </v-container>
</template>
<script>
import axios from 'axios'
export default {
    name: 'productForm',
    data() {
        return {
            valid: true,
            photo:'',
            name: '',
            detail: '',
            price: '',
            tax: '',
            photoRules: [
                v => !!v || 'Photo is required'
            ],
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length <= 50) || 'Name must be less than 50 characters',
            ],
            detailRules: [
                v => !!v || 'Detail is required',
                v => (v && v.length <= 250) || 'Product detail must be less than 250 characters',
            ],
            priceRules: [
                v => !!v || 'Price is required is required',
                v => (v && v.length <= 10) || 'Product price must be less than 10 characters',
            ],
            taxRules: [
                v => !!v || 'Tax is required is required',
                v => (v && v.length <= 10) || 'Tax must be less than 10 characters',
            ],
        }
    },
    methods: {
        validate(){
            this.$refs.form.validate();
            if (this.valid==true) {
                this.submit();
            }
        },
        reset(){
            this.$refs.form.reset();
        },
        submit(){
            console.log(this.photo);
            
            let formData = new FormData();
            console.log(formData);
            formData.append('id', this.$route.params.id);
            formData.append('photo', this.photo);
            formData.append('name', this.name);
            formData.append('detail', this.detail);
            formData.append('price', this.price);
            formData.append('tax', this.tax);
            console.log(formData);
            
            
            if (this.$route.params.id) {
               axios.post(process.env.VUE_APP_RUTA_API+'?action=edit_product',
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
                    //alert('Product uodated successfully')
                    
                ));
            }else{
                axios.post(process.env.VUE_APP_RUTA_API+'?action=insert_product',
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
                    //alert('Product uodated successfully')
                    
                ));
            }
            
        }
    },
    mounted(){
        if (this.$route.params.id) {
            axios.get(process.env.VUE_APP_RUTA_API, {
                params: {
                    action: 'edit_product',
                    id: this.$route.params.id
                }
            })
            .then(response =>(
                console.log(response.data),
                this.photo = 'http://127.0.0.1:80/Personal/StoreApp/'+response.data.products_photo,
                this.name = response.data.product_name,
                this.detail = response.data.product_detail,
                this.price = response.data.product_price,
                this.tax = response.data.tax
            ));            
        }
    }
}
</script>