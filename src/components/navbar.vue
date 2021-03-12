<template>
  <v-app-bar
    color="deep-blue accent-4"
    dense
    dark
  >
    <v-toolbar-title>
      {{appname}}
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <router-link
      v-for="item in link"
      :key="item.index"
      :to="item.path"
      style="color:white; text-decoration:none;"
      icon
      >
      
      <v-icon
	dark
	>
	{{item.icon}}
      </v-icon>
      {{item.text}}
    </router-link>
  </v-app-bar>
</template>
<script>
  export default {
    name: 'Navbar',
    data: () => ({
      appname: 'Store Change',
      link:{
        select: {
          text: 'Products',
          path: '/product',
          icon: 'mdi-cart',
          index: 2
        },
        insert: {
          text: 'Add',
          path: '/poem',
          icon: 'mdi-plus-circle',
          index: 3
        },
      }
    }),
  }
</script>
