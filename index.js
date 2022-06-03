const colors=["#519259" , "#F0D290", "#95D1CC", "#781D42","#064663", "#FFC4E1", "#D8B6A4", "#864879", "#FEF5ED","#C36A2D"];
const btn =$('btn');
const color =$(".color");

$("button").click(btn, function(){
  const randomNumber = colors[Math.floor(Math.random()*colors.length)];
  $("body").css("background-color", randomNumber)
  $(".color").text(randomNumber)
  console.log(randomNumber);
});
