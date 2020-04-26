<template>
    <div>

        <nuxt-link to="/jokes" >Back to Jokes</nuxt-link>

        <h1>{{ joke }}</h1>
        <small>{{ $route.params.id }}</small>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            joke: {}
        }
    },
    components: {
        
    },
    async created(){
        const config = {
            headers: {
                'Accept':'application/json'
            }
        }
        try {
            const res = await axios.get(`https://icanhazdadjoke.com/j/${this.$route.params.id}`,config);
            this.joke = res.data.joke;
            // console.log(res.data)
        } catch (err) {
            console.log(err)
        }
    },
    head() {
      return {
          title: "DadJokes",
          meta: [
              {
                  hid:'description',
                  name:'description',
                  content:'jobobobobob'
              }
          ]
      }
  }  
}
</script>

<style>

</style>