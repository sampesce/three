/*this is wrong!!! AHHHH*/

function Car( model ) {
   this.model = model;
   this.state = "new";
   this.color = "blue";
   this.getInfo = function() {
      return this.model + "  " + this.year;
};


{
var myCar = new Car("ford");
myCar.year = "1994";
console.log(myCar.GetInfo());

var div = document.getElementById('header');
var a = document.createElement('a'); 
var b = document.createElement('b'); 
var c = document.createElement('c'); 

a.textContent = 'click me';
b.textContent = 'no, click me';
c.textContent = 'no no click me';

a.href = 'http://google.com';
b.href = 'http://youtube.com';
c.href = 'http://yahoo.com';

console.log(div);
div.appendChild(a);
div.appendChild(b);
div.appendChild(c);

div.setAttribute("class","green");





