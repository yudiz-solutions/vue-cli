import Vue from 'vue'
import lodash from 'lodash'
import VueLodash from 'vue-lodash'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App.vue'
import Message from './components/Message'
import Demo from './components/Demo'
import Style from './assets/style.css'

Vue.use(VueAxios, axios, VueLodash, lodash, vueResource);
Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{path: '/', component: Message},
		{path: '/api_demo', component: Demo}
	]
})

var app = new Vue({
	router,
	template: `
		<div id="app">
			<ul>
				<li><a class="active" href="/"><router-link to="/">Home</router-link></a></li>
  				<li><a href="/api_demo"><router-link to="/api_demo">API Demo</router-link></a></li>
			</ul>
			<router-view></router-view>
		</div>
	`,
  	// el: '#app',
  	// render: h => h(App)
}).$mount('#app');
