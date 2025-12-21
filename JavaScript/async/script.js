// Callback Hell

function abc(fn){
  fn(function(fn3){
    fn3(function(fn5){
        fn5()
    })
  })
}

abc(function(fn2){
   fn2(function(fn4){
    fn4(function(){
      console.log("Heyyyyyy");
      
    })
   })
})