<template>
	<div>
		<div class="box">
			Vue Demo
		</div>
		<p>{{ title }}</p>
		<span v-html="title"></span>
		<p v-if="showName">{{ user.firstName }}</p>
		<p v-else>N/A</p>
	</div>
</template>



<script>
	export default {
		name: 'test',
		data() {
			return {
				title: '<h1>Hello World</h1>',
				user: {
					firstName: 'John',
					lastName: 'Doe'
				},
				showName: true,
				question: '',
                answer: 'I cannot give you an answer until you ask a question!',
                image:'',
			}
		},
		watch: {
            // whenever question changes, this function will run
            question: function () {
                this.answer = 'Waiting for you to stop typing...'
                this.getAnswer()
            }
        },
        methods: {
            getAnswer: function () {
                if (this.question.indexOf('?') === -1) {
                this.answer = 'Questions usually contain a question mark :)'
                return
            }
            this.answer = 'Thinking...'
            
            var vm = this;
            vm.$http.get('https://yesno.wtf/api')
            		.then(function (response) {
                    	vm.answer = response.data.answer;
                    	vm.image = response.data.image;
                	})
            
                .catch(function (error) {
                    vm.answer = 'Error! Could not reach the API. ' + error
                })
            }
        }
	}
</script>



<style>
	.box{
		background-color: grey;
		font-size: 25px;
		padding: 5px;
		margin-bottom: 1em;
		text-align: center;
	}
</style>