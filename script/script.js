$(document).ready(function(){
    
      $("#magic").click(function(){
          var search = $('#bar').val();
         $("#ramses").append(search); 
      });
});

$("#fake").click(function(){
  $('bar').remove();   
});


console.log(meta)