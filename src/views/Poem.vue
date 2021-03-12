<template>
  <v-main>
    <v-container>
      <v-row dense>
        <poemCard 
          v-for="item in poema"
          :key="item.index"
          :poem="item"
        />
      </v-row>
    </v-container>
  </v-main>
</template>
<script>
  import poemCard from "@/components/poemCard.vue";
  export default {
    name: 'Poem',
    components:{
      poemCard
    },
    data(){
      return {
        poema:[
          {
            title: 'Amor eterno',
            subtitle: 'Podrá nublarse el sol eternamente;\n Podrá secarse en un instante el mar; ',
            text: 'Podrá nublarse el sol eternamente;\n Podrá secarse en un instante el mar; \n Podrá romperse el eje de la tierra \n Como un débil cristal.\n ¡todo sucederá!Podrá la muerte \n Cubrirme con su fúnebre crespón;\n Pero jamás en mi podrá apagarse \n La llama de tu amor',
            index: 1
          },
          {
            title: 'Contigo',
            subtitle: '¿Mi tierra? Mi tierra eres tú\n ¿Mi gente? Mi gente eres tú',
            text: '¿Mi tierra? Mi tierra eres tú\n ¿Mi gente? Mi gente eres tú\n ¿Y mi vida? Dime, mi vida, ¿qué es, si no eres tú?',
            index: 2
          },
          {
            title: 'Como si cada beso',
            subtitle: 'Como si cada beso\n Fuera de despedida',
            text: 'Como si cada beso\n Fuera de despedida\n Tal vez ya nos toque\n En el hombro la mano que llama\n A la barca que no viene sino vacía\n Y que en el mismo haz\n Ata lo que fuimos mutuamente\n Y la ajena suma universal de la vida',
            index: 3
          },
          {
            title: 'Amor',
            subtitle: 'Amar es este timido silencio\n cerca de ti, sin que lo sepas',
            text: 'Amar es este timido silencio\n cerca de ti, sin que lo sepas\n y recordar tu voz cuando te marchas\n y sentir el calor de tu saludo\n Amar es aguardarte\n como si fueras parte del ocaso,\n ni antes ni después, para que estemos solos\n entre los juegos y los cuentos\n sobre la tierra seca.\n Amar es percibir, cuando te ausentas,\n tu perfume en el aire que respiro,\n y contemplar la estrella en que te alejas\n cuando cierro la puerta de la noche.',
            index: 4
          },
          {
            title: 'Frase #1',
            subtitle: 'No puedo darte lo que sea tan solo puedo darte todo lo que soy \ntal vez no baste pero ahí estaré.',
            text: 'No puedo darte lo que sea tan solo puedo darte todo lo que soy \ntal vez no baste pero ahí estaré.',
            index: 5
          },
          {
            title: 'Frase #2',
            subtitle: 'Gracias por tu amor, por estar junto a mí, \ndame la mano y amémonos toda una eternidad',
            text: 'Gracias por tu amor, por estar junto a mí, \ndame la mano y amémonos toda una eternidad',
            index: 6
          },
          {
            title: 'Frase #3',
            subtitle: 'Contigo quiero explorar, contigo quiero sentir, contigo quiero\nhacer y ver cosas que nunca antes quise.',
            text: 'Contigo quiero explorar, contigo quiero sentir, contigo quiero\nhacer y ver cosas que nunca antes quise.',
            index: 7
          },
          {
            title: 'Frase #4',
            subtitle: 'Contigo, contigo puedo vivir \nuna eternidad en tan solo una mirada.',
            text: 'Contigo, contigo puedo vivir una eternidad \nen tan solo una mirada.',
            index: 8
          }
        ]
      }
    }
  }
</script>
