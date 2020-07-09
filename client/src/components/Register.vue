/* eslint-disable no-alert, no-console */

<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div :class="`elevation-${hover ? 24 : 6}`"
          class="mx-auto pa-6 transition-swing">
        <v-toolbar flat dense class="cyan" color="#006064" dark>
          <v-toolbar-title>Register</v-toolbar-title> 
        </v-toolbar>
       
        <div class="pl-4 pr-4 pt-2 pb2">
           <!-- v-model find  data name somethine as "email", "password"....-->
          <v-text-field
          label= "email" 
          v-model="email"> 
          </v-text-field>
        
          <v-text-field
          label= "password" 
          v-model="password"> 
          </v-text-field>
        
          <br>
        <div  class="error" v-html="error"/>
          <br>
            <v-btn 
            @click="register"
            > 
            Register 
            </v-btn>
        
        </div>
      </div>
    </v-flex>
  </v-layout>

</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      erroe: null
    }
  },
  methods: {
    async register() {
      try{
      await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      } catch(error) {
        this.error = error.response.data.error 
      }
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
/* ..input-group--text-field input{
  border-bottom: 1px solid black;
} */
</style>
/* eslint-enable no-alert, no-console */
