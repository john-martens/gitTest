$("#assignment").tabs()
$("button").button ()

$("#milebtn").click (mileage)
$("#resetmile").click (resetMile)

$("#averagebtn").click (average)
$("#resetaverage").click (resetaverage)

$("#foodbtn").click (calorie)
$("#resetcalorie").click (resetcalorie)

 let totalFood = 0
   
function mileage (){
    let distance = Number( $("#distancebox") .val () )
    let gas = Number( $("#sizebox") .val () )
    let total = distance * gas 
    $("#milediv").html (`<p> Your car's gas rating is ${total .toFixed (2)}L per kilometer.`)
}
function resetMile(){
    $("#distancebox").val ("")
    $("#sizebox").val ("")
    $("#milediv").html ("") 
}

