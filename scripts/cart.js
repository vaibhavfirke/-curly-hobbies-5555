let Append = () => {
  let contener = document.getElementById("Vcontener");

  let VtableBody = document.createElement("div");

  let Bleft = document.createElement("div");
  let img = document.createElement("img");
  let title = document.createElement("p");
  title.innerText="Title";
  Bleft.append(img, title);

  let Bright = document.createElement("div");
  let unitP = document.createElement("p");
  let quintity = document.createElement("div");
  let dic = document.createElement("div");
  let input = document.createElement("input");
  let inc = document.createElement("div");
  let totalP=document.createElement("p");
  let Dp=document.createElement("p");
  let button=document.createElement("button");
   quintity.append(dic,input,inc);
   Dp.append(button);
   Bright.append(unitP,quintity,totalP,Dp);

   VtableBody.append(Bleft,Bright);
contener.append(VtableBody);


};
Append();