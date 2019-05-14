var arr = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8], tem, tim ,  ell, chek= false, count_open =0  ;
var t,t1,t_rez;
window.onload = function() {
	box = document.getElementById("box");
	newGame();
		document.getElementById("reset").onclick = newGame;
}
function sort(){
for(y = 0; y<10;y++)
{
	j = Math.floor(Math.random() * arr.length);
  i = Math.floor(Math.random() * arr.length);
  if (i!=j){
	x = arr[i];
	arr[i] = arr[j];
	arr[j] = x;
  }
}
}
function timer(){
  tim++;
  setTimeout('timer()',1);
}


function newGame(){
  count_open =0;
  tim =0;
  sort();
	var table = document.createElement("table"),
		tbody = document.createElement("tbody");
	table.appendChild(tbody);
  tem = 0;
	for(i = 0; i < 4; ++i){
		var row = document.createElement("tr");
		for(j = 0; j < 4; ++j){
			var cell = document.createElement("button");
				cell.id = i + "_" + j;
        cell.onclick = OnButClick;
        cell.className = "color";
        cell.value = arr[tem];
        //cell.innerHTML = arr[tem];
      row.appendChild(cell);
      tem++;
  }
		tbody.appendChild(row);
	}
	if(box.childNodes.length == 1)
		box.removeChild(box.firstChild);
	box.appendChild(table);
}

function OnButClick (event) { //обработка клика по кнопкам
  if (tim==0) {
		tim++;
    t = new Date();
  }
  var event = event || window.event,
		el = event.srcElement || event.target;
    //el.text="asdasd";
    if (el.className == "color") {//проверка белой ячейки
    if (!chek) {
       el.className = "color"+el.value;
       ell = el.id;
       chek = true;
    }
    else {
      var old_el = document.getElementById(ell);
      //alert(old_el.className+" "+el.className);

      if (el.value == old_el.value)
      {
        el.className = "color"+el.value;
        el.enable=false;
        old_el.enable=false;
        count_open++;
      }
      else {
				el.className = "color"+el.value;
				setTimeout(function(){
					old_el.className= "color";
				el.className = "color";}, 100);

      }
      chek = false;
    }
}
if (count_open==8) {
	t1 = new Date();
	t_rez = new Date(t1-t);
	setTimeout(function(){
alert('You winner! \n  Ваше время: ' + t_rez.getMinutes() +':'+ t_rez.getSeconds()+'.'+t_rez.getMilliseconds());
}, 100);

}
}

function cellClick(e) {
alert(e.id);
}
