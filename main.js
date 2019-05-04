var vm = new Vue({
  el: '#app',
  data:{
    question: '',
    answer: 'Đặt lẹ đi'
  },
  watch: {
    question: function(oldvalue,newvalue){
      this.answer = 'Gõ cho xong đi má!',
      this.getAnswer()
    }
  },
  methods:{
    getAnswer: _.debounce(
      
      
      function(){
        if (this.question.indexOf('?') === -1 ) {
            this.answer = ' Thiếu dấu "?" kìa má'
            return
        }
        var vm = this;
        this.answer = 'Đợi xíu...'
        axios.get('https://yesno.wtf/api')
        .then(function(response){
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function(error){
          vm.answer = 'Not load API...'
        })



      }, 500

    )
  }
})