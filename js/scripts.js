$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var userInput = ($("#userInput").val());
    // for (var i = 0; i <= userInput.length; i ++){
      userInput = userInput.replace(/[aeiou]/gi, "-");
      // userInput = userInput.replace("e", "-");
      // userInput = userInput.replace("i", "-");
      // userInput = userInput.replace("o", "-");
      // userInput = userInput.replace("u", "-");
    //   console.log(userInput);
    // }
    console.log(userInput);

  });
});
