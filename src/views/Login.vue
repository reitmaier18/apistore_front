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
                <v-form
                    ref = "form"
                    v-model = "valid"
                    lazy-validation
                >
                    <v-row>
                        <v-col
                            md=2
                        ></v-col>
                        <v-col
                            cols="12"
                            md="8"
                        >
                            <v-text-field
                                 v-model = "email"
                                :rules="emailRules"
                                :counter="50"
                                label="Email"
                                prepend-icon="mdi-account"
                                required
                            ></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col
                            md=2
                        ></v-col>
                        <v-col
                            cols="12"
                            md="8"
                        >
                            <v-text-field
                                 v-model = "password"
                                :rules="passwordRules"
                                :counter="50"
                                label="Password"
                                prepend-icon="mdi-key-variant"
                                :type="show1 ? 'text' : 'password'"
                                required
                            ></v-text-field>
                        </v-col>
                        
                    </v-row>
                     <v-btn
                        color="primary"
                        text
                        @click="submit()" 
                        elevation="2"
                        outlined
                    >
                        Send
                    </v-btn>
                </v-form>
            </v-card-text>
            
            
        </v-card>
        
    </v-container>
</template>
<script>
import axios from 'axios'
export default {
    name: 'login',
    data() {
        return {
            title: 'Login',
            email: '',
            password: '',
            emailRules: [
                v => !!v || 'Email is required',
                v => (v && v.length <= 50) || 'Email must be less than 50 characters',
            ],
            passwordRules: [
                v => !!v || 'Password is required',
                v => (v && v.length <= 8) || 'password must be less than 8 characters',
            ],
        }
    },
    methods:{
        submit(){
            let formData = new FormData();
            formData.append('email', this.email);
            formData.append('password', this.password);
            axios.post(process.env.VUE_APP_RUTA_API+'?action=login',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            )
            .then(response => (
                console.log(response.data),
                window.localStorage.setItem('usr', response.data),
                window.location.replace("http://localhost:8080/?#/product")
            ));
        },
        validate(){
            this.$refs.form.validate();
            if (this.valid==true) {
                this.submit();
            }
        },
    }
}
</script>