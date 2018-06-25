<template>
	
	<div>
		<p>
	        Ask a yes/no question:
	        <input v-model="question">
	    </p>
	    <p>{{ answer }}</p>

	    <img v-bind:src="image">
	</div>

</template>


<script>
	export default {
		data() {
			return {
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
            getAnswer: _.debounce(function () {
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
            }, 500)
        }
	}
</script>


<style>
	
	

</style>