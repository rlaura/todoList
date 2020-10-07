
function tachar(op) {
	if (op.className === 'item tarea tachado'){
		op.className = 'item tarea'
	} else {
		op.className = 'item tarea tachado'	
	}	
}

function eliminar(op) {
	let eliminar = op.parentElement
	eliminar.remove()
}

function handle(e){
    if(e.keyCode === 13){
        e.preventDefault(); 
        let txt  = document.getElementById('todo').value
	  	if (txt.trim() === ''){
	  		return false
	  	} else {
	  		var elemento = document.getElementById('lista');
			var li = document.createElement('li');
			li.innerHTML = '<img src="img/delete.png" width="25px" onclick="eliminar(this)">'
			+ '<span id="'+txt+'" >'+txt+'</span>'
			elemento.appendChild(li);
			
			li.addEventListener("click", function(){tachar(this)});
			li.className = "item tarea"
			document.getElementById('todo').value = ''	
	  	}
		
	}
}

function limpiar() {
	let paras = document.getElementsByClassName('tarea');
	while( paras[0]){
		paras[0].parentNode.removeChild(paras[0])
	}
}