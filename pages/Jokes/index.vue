<template>
  <div>
    <search-jokes @search-text="searchText" />
    <joke v-for="joke in jokes" :key="joke.id" :id="joke.id" :joke="joke.joke" />
  </div>
</template>

<script>

import axios from "axios";
import Joke from '../../components/Joke';
import SearchJokes from '../../components/SearchJokes';

export default {
    data() {
        return {
            jokes:[]
        }
    },
    components: {
        Joke,
        SearchJokes
    },
    methods: {
        async searchText(t){
            // console.log(t)
 
            const config = {
                headers: {
                    'Accept':'application/json'
                }
            }
            try {
                const res = await axios.get(`https://icanhazdadjoke.com/search?term=${t}`,config);
                // console.log(res.data)
                this.jokes = res.data.results
            } catch (err) {
                console.log(err)
            }
 
        }
    },
    async created(){
        const config = {
            headers: {
                'Accept':'application/json'
            }
        }
        try {
            const res = await axios.get('https://icanhazdadjoke.com/search',config);
            // console.log(res.data)
            this.jokes = res.data.results
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