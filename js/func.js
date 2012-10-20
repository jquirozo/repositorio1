// JavaScript Document
//para que se ejecuten necesitamos compilar
$(document).ready(function(e) {
	/*
	$('.btn').tap(
	function(){						
		var boton = (($(this).attr('class')).split(' '))[1];			
		//alert(boton);	
		switch(boton){
			case 'b1':
				alert('beep 1');
				break;
			case 'b2':
				alert('beep 2');
				break;
			case 'b5':
				alert('beep 5');
				break;
			case 'v1':
				alert('vibrar');
				break;
			case 'v2':
				alert('vibrar');
				alert('vibrar');				
				break;
		}						
    }
	);
	//$('#alert input[type=range]').swiperight(function(){
	$('#alert').swiperight(function(){
		alert('Deslizó a la derecha');	
		}
	);
	$('#alert').swipeleft(function(){
		confirm('¿que desea hacer?');	
		}
	);
	*/
	document.addEventListener("deviceready",function(){
		$('btn').tap(function(){
			var boton = (($(this).attr('class')).split(' '))[1];
			switch(boton){
			case 'b1':
				navigator.notification.beep(1);
				break;
			case 'b2':
				navigator.notification.beep(2);
				break;
			case 'b5':
				navigator.notification.beep(5);
				break;
			case 'v1':
				navigator.notification.vibrate(500);
				break;
			case 'v2':
				navigator.notification.vibrate(300);
				navigator.notification.vibrate(1000);				
				break;
			}
		});		
	
	$('#right').swiperight(function(){
		navigator.notification.alert("Deslizó a la derecha", function(){ },"Practica 1","Aceptar");
		}
	);
	$('#left').swipeleft(function(){
		navigator.notification.confirm('¿que desea hacer?', function(boton){ 
			switch(boton){
				case '0':
					navigator.notification.beep(1);
					break;
				case '2':
					navigator.notification.vibrate(500);
					break;
				}
		},"Práctica 1","Beep, Vibrar, Cancelar");
		}
	);
	
	},false);
	//navigator.notification.beep(1);	
	//navigator.notification.alert("Deslizó a la derecha",funtion(){},"Practica 1","Aceptar");
});