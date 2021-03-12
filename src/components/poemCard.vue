<template>
    <v-col cols="3">
        <v-card
        color="#385F73"
        dark
        >
            <v-card-title class="headline">
                {{poem.title}}
            </v-card-title>
            <v-card-subtitle>{{poem.subtitle}}...</v-card-subtitle>
            <v-card-actions>
                <v-btn text @click="f_dialog(poem.text)">
                Leer mas
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-col>
</template>
<script>

export default {
    name:'poemCard',
    props: {
        poem: {
            type: Object,
            default: null
        }
    },
    methods:{
        f_dialog(text){
            alert(text);
        }
    }
}
</script>