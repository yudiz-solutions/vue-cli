
<template>
    <div id="app">
      <message>Vue Demo</message>
      <demo>Hello vue demo</demo>
    </div>
</template>

<script>

import Message from './components/Message.vue';
import Demo from './components/Demo.vue';

export default {
    name: 'app',
    components : { 
        Message, 
        Demo
    },
    data () {
        return {

        }
    }
}
</script>

<style>
    #app{
        text-align: center;
    }
</style>
