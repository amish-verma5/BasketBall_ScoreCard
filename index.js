let home=document.getElementById("home-score")
let guest=document.getElementById("guest-score")
let homes=0;
let guests=0;
function increase1()
{
  homes+=1;
  home.textContent=homes;
}
function increase2()
{
  homes+=2;
  home.textContent=homes;
}
function increase3()
{
  homes+=3;
  home.textContent=homes;
}
function increase12()
{
  guests+=1;
  guest.textContent=guests;
}
function increase22()
{
  guests+=2;
  guest.textContent=guests;
}
function increase32()
{
  guests+=3;
  guest.textContent=guests;
}
function resetf(){
  homes=0;
  guests=0;
  guest.textContent=guests;
  home.textContent=homes;
}