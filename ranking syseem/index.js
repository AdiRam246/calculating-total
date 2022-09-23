var v= [];
document.querySelectorAll("button")[0].addEventListener("click", function(){
    document.querySelectorAll("input").forEach((ele) => {v.push(ele.value)});
 a(v);
});var num =[];
function a(v){
    for (var i=0;i<6;i++){
    num.push(parseInt(v[i]));
d(num);
};};
function d(num){
    var total=0;
    for( var i=0;i<6;i++)
{
        if (isNaN(num[i]))
        {
        
        }
        else{
          total=total+num[i];
        }
    }
    document.querySelector("h1").innerHTML= total;
}
document.querySelectorAll("button")[1].addEventListener("click",function()
{   
    for (i=0;i<6;i++)
    {
  document.querySelectorAll("input")[i].value = "";};
  document.querySelector("h1").innerHTML="";});