window.onload = function(){

  var hod = 0;
  
  var vubor_igroka = 1; // играть с компьютером
  
  document.getElementById('krestiki_noliki').onclick = function(event){
	console.log(event);
	
	if(vubor_igroka == 0){
		   
	  if(event.target.className == 'block'){
		if(hod%2 == 0){
		   event.target.innerHTML = 'X';
		}
		else {
			event.target.innerHTML = '0';
		}
		hod++;
		
		checkWinner();
	  }
	}
	else{
		
		if(event.target.className == 'block'){
		//if(hod%2 == 0){
		   event.target.innerHTML = 'X';
		  // hod++;
		  play_Computer();
		//}
		//else {
			//event.target.innerHTML = '0';
			//play_Computer();
		//}
		hod++;
		finish()
		//play_Computer();
	    }
	    }  
	  
  }
  
  
  // Игра с игроком
  checkWinner = function(){
	  var allblock = document.getElementsByClassName('block');
	  //console.log(allblock);
	  
	  //Проверка победы 3 линий
	  if(allblock[0].innerHTML=='X' && allblock[1].innerHTML=='X' && allblock[2].innerHTML =='X') {alert('Победили крестики');}
	  if(allblock[3].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[5].innerHTML =='X') {alert('Победили крестики');}
	  if(allblock[6].innerHTML=='X' && allblock[7].innerHTML=='X' && allblock[8].innerHTML =='X') {alert('Победили крестики');}
	  
	  if(allblock[0].innerHTML=='X' && allblock[3].innerHTML=='X' && allblock[6].innerHTML =='X') {alert('Победили крестики');}
	  if(allblock[1].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[7].innerHTML =='X') {alert('Победили крестики');}
	  if(allblock[2].innerHTML=='X' && allblock[5].innerHTML=='X' && allblock[8].innerHTML =='X') {alert('Победили крестики');}
	  
	  if(allblock[0].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[8].innerHTML =='X') {alert('Победили крестики');}
	  if(allblock[2].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[6].innerHTML =='X') {alert('Победили крестики');}
	  
	  if(allblock[0].innerHTML=='0' && allblock[1].innerHTML=='0' && allblock[2].innerHTML =='0') {alert('Победили нолики');}
	  if(allblock[3].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[5].innerHTML =='0') {alert('Победили нолики');}
	  if(allblock[6].innerHTML=='0' && allblock[7].innerHTML=='0' && allblock[8].innerHTML =='0') {alert('Победили нолики');}
	  
	  if(allblock[0].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[8].innerHTML =='0') {alert('Победили нолики');}
	  if(allblock[2].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[6].innerHTML =='0') {alert('Победили нолики');}
	  
	  if(allblock[0].innerHTML=='0' && allblock[3].innerHTML=='0' && allblock[6].innerHTML =='0') {alert('Победили нолики');}
	  if(allblock[1].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[7].innerHTML =='0') {alert('Победили нолики');}
	  if(allblock[2].innerHTML=='0' && allblock[5].innerHTML=='0' && allblock[8].innerHTML =='0') {alert('Победили нолики');}
  }
  
  //Игра с компьютером
  play_Computer = function(){
	  var allblock = document.getElementsByClassName('block');
	  //if(allblock[4].innerHTML == ''){
		//allblock[4].innerHTML = '0';
	  //}
	  //var i = Math.floor(Math.random()*8);
	  //if(allblock[i].innerHTML == ''){
	   //  allblock[i].innerHTML = '0';
	  //}
	  //else{
		  //while(allblock[i].innerHTML == '')
	  //}
	  
	  for(var i=0;i<9;i++){
		  
		  //Проверка победы 3 линий
	     if(allblock[0].innerHTML=='X' && allblock[1].innerHTML=='X' && allblock[2].innerHTML =='X') {alert('Победили крестики');break;}
	     if(allblock[3].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[5].innerHTML =='X') {alert('Победили крестики');break;}
	     if(allblock[6].innerHTML=='X' && allblock[7].innerHTML=='X' && allblock[8].innerHTML =='X') {alert('Победили крестики');break;}
	  
	     if(allblock[0].innerHTML=='X' && allblock[3].innerHTML=='X' && allblock[6].innerHTML =='X') {alert('Победили крестики');break;}
	     if(allblock[1].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[7].innerHTML =='X') {alert('Победили крестики');break;}
	     if(allblock[2].innerHTML=='X' && allblock[5].innerHTML=='X' && allblock[8].innerHTML =='X') {alert('Победили крестики');break;}
	  
	     if(allblock[0].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[8].innerHTML =='X') {alert('Победили крестики');break;}
	     if(allblock[2].innerHTML=='X' && allblock[4].innerHTML=='X' && allblock[6].innerHTML =='X') {alert('Победили крестики');break;}
	  
	     if(allblock[0].innerHTML=='0' && allblock[1].innerHTML=='0' && allblock[2].innerHTML =='0') {alert('Победили нолики');break;}
	     if(allblock[3].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[5].innerHTML =='0') {alert('Победили нолики');break;}
	     if(allblock[6].innerHTML=='0' && allblock[7].innerHTML=='0' && allblock[8].innerHTML =='0') {alert('Победили нолики');break;}
	  
	     if(allblock[0].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[8].innerHTML =='0') {alert('Победили нолики');break;}
	     if(allblock[2].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[6].innerHTML =='0') {alert('Победили нолики');break;}
	  
	     if(allblock[0].innerHTML=='0' && allblock[3].innerHTML=='0' && allblock[6].innerHTML =='0') {alert('Победили нолики');break;}
	     if(allblock[1].innerHTML=='0' && allblock[4].innerHTML=='0' && allblock[7].innerHTML =='0') {alert('Победили нолики');break;}
	     if(allblock[2].innerHTML=='0' && allblock[5].innerHTML=='0' && allblock[8].innerHTML =='0') {alert('Победили нолики');break;}
		  // Проверка 2 крестика и один нолик
		  // 012 
		  if(allblock[0].innerHTML == 'X' && allblock[1].innerHTML == 'X' && allblock[2].innerHTML != '0'){
		     allblock[2].innerHTML = '0';
			 break;
	      }
	      if(allblock[0].innerHTML == 'X' && allblock[2].innerHTML == 'X' && allblock[1].innerHTML != '0'){
		     allblock[1].innerHTML = '0';
			 break;
	      }
	      if(allblock[1].innerHTML == 'X' && allblock[2].innerHTML == 'X' && allblock[0].innerHTML != '0'){
		     allblock[0].innerHTML = '0';
			 break;
	      }
		  //345
		  if(allblock[3].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[5].innerHTML != '0'){
		     allblock[5].innerHTML = '0';
			 break;
	      }
	      if(allblock[3].innerHTML == 'X' && allblock[5].innerHTML == 'X' && allblock[4].innerHTML != '0'){
		     allblock[4].innerHTML = '0';
			 break;
	      }
	      if(allblock[4].innerHTML == 'X' && allblock[5].innerHTML == 'X' && allblock[3].innerHTML != '0'){
		     allblock[3].innerHTML = '0';
			 break;
	      }
		  //678
		  if(allblock[6].innerHTML == 'X' && allblock[7].innerHTML == 'X' && allblock[8].innerHTML != '0'){
		     allblock[8].innerHTML = '0';
			 break;
	      }
	      if(allblock[6].innerHTML == 'X' && allblock[8].innerHTML == 'X' && allblock[7].innerHTML != '0'){
		     allblock[7].innerHTML = '0';
			 break;
	      }
	      if(allblock[7].innerHTML == 'X' && allblock[8].innerHTML == 'X' && allblock[6].innerHTML != '0'){
		     allblock[6].innerHTML = '0';
			 break;
	      }
		  //036
		  if(allblock[0].innerHTML == 'X' && allblock[3].innerHTML == 'X' && allblock[6].innerHTML != '0'){
		     allblock[6].innerHTML = '0';
			 break;
	      }
	      if(allblock[0].innerHTML == 'X' && allblock[6].innerHTML == 'X' && allblock[3].innerHTML != '0'){
		     allblock[3].innerHTML = '0';
			 break;
	      }
	      if(allblock[3].innerHTML == 'X' && allblock[6].innerHTML == 'X' && allblock[0].innerHTML != '0'){
		     allblock[0].innerHTML = '0';
			 break;
	      }
		  //147
		  if(allblock[1].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[7].innerHTML != '0'){
		     allblock[7].innerHTML = '0';
			 break;
	      }
	      if(allblock[1].innerHTML == 'X' && allblock[7].innerHTML == 'X' && allblock[4].innerHTML != '0'){
		     allblock[4].innerHTML = '0';
			 break;
	      }
	      if(allblock[4].innerHTML == 'X' && allblock[7].innerHTML == 'X' && allblock[1].innerHTML != '0'){
		     allblock[1].innerHTML = '0';
			 break;
	      }
		  //248
		  if(allblock[2].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[8].innerHTML != '0'){
		     allblock[8].innerHTML = '0';
			 break;
	      }
	      if(allblock[2].innerHTML == 'X' && allblock[8].innerHTML == 'X' && allblock[4].innerHTML != '0'){
		     allblock[4].innerHTML = '0';
			 break;
	      }
	      if(allblock[4].innerHTML == 'X' && allblock[8].innerHTML == 'X' && allblock[2].innerHTML != '0'){
		     allblock[2].innerHTML = '0';
			 break;
	      }
		  //048
		  if(allblock[0].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[8].innerHTML != '0'){
		     allblock[8].innerHTML = '0';
			 break;
	      }
	      if(allblock[0].innerHTML == 'X' && allblock[8].innerHTML == 'X' && allblock[4].innerHTML != '0'){
		     allblock[4].innerHTML = '0';
			 break;
	      }
	      if(allblock[4].innerHTML == 'X' && allblock[8].innerHTML == 'X' && allblock[0].innerHTML != '0'){
		     allblock[0].innerHTML = '0';
			 break;
	      }
		  //246
		  if(allblock[2].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[6].innerHTML != '0'){
		     allblock[6].innerHTML = '0';
			 break;
	      }
	      if(allblock[2].innerHTML == 'X' && allblock[6].innerHTML == 'X' && allblock[4].innerHTML != '0'){
		     allblock[4].innerHTML = '0';
			 break;
	      }
	      if(allblock[4].innerHTML == 'X' && allblock[6].innerHTML == 'X' && allblock[2].innerHTML != '0'){
		     allblock[2].innerHTML = '0';
			 break;
	      }
		  
		  // Проверка 2 нолика и один крестик
		  // 012 
		  if(allblock[0].innerHTML == '0' && allblock[1].innerHTML == '0'){
		     allblock[2].innerHTML = '0';
			 break;
	      }
	      if(allblock[0].innerHTML == 'X' && allblock[2].innerHTML == 'X' && allblock[1].innerHTML != '0'){
		     allblock[1].innerHTML = '0';
			 break;
	      }
	      if(allblock[1].innerHTML == 'X' && allblock[2].innerHTML == 'X' && allblock[0].innerHTML != '0'){
		     allblock[0].innerHTML = '0';
			 break;
	      }
		  //345
		  if(allblock[3].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[5].innerHTML != '0'){
		     allblock[5].innerHTML = '0';
			 break;
	      }
	      if(allblock[3].innerHTML == 'X' && allblock[5].innerHTML == 'X' && allblock[4].innerHTML != '0'){
		     allblock[4].innerHTML = '0';
			 break;
	      }
	      if(allblock[4].innerHTML == 'X' && allblock[5].innerHTML == 'X' && allblock[3].innerHTML != '0'){
		     allblock[3].innerHTML = '0';
			 break;
	      }
		  //678
		  if(allblock[6].innerHTML == 'X' && allblock[7].innerHTML == 'X' && allblock[8].innerHTML != '0'){
		     allblock[8].innerHTML = '0';
			 break;
	      }
	      if(allblock[6].innerHTML == 'X' && allblock[8].innerHTML == 'X' && allblock[7].innerHTML != '0'){
		     allblock[7].innerHTML = '0';
			 break;
	      }
	      if(allblock[7].innerHTML == 'X' && allblock[8].innerHTML == 'X' && allblock[6].innerHTML != '0'){
		     allblock[6].innerHTML = '0';
			 break;
	      }
		  //036
		  if(allblock[0].innerHTML == 'X' && allblock[3].innerHTML == 'X' && allblock[6].innerHTML != '0'){
		     allblock[6].innerHTML = '0';
			 break;
	      }
	      if(allblock[0].innerHTML == 'X' && allblock[6].innerHTML == 'X' && allblock[3].innerHTML != '0'){
		     allblock[3].innerHTML = '0';
			 break;
	      }
	      if(allblock[3].innerHTML == 'X' && allblock[6].innerHTML == 'X' && allblock[0].innerHTML != '0'){
		     allblock[0].innerHTML = '0';
			 break;
	      }
		  //147
		  if(allblock[1].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[7].innerHTML != '0'){
		     allblock[7].innerHTML = '0';
			 break;
	      }
	      if(allblock[1].innerHTML == 'X' && allblock[7].innerHTML == 'X' && allblock[4].innerHTML != '0'){
		     allblock[4].innerHTML = '0';
			 break;
	      }
	      if(allblock[4].innerHTML == 'X' && allblock[7].innerHTML == 'X' && allblock[1].innerHTML != '0'){
		     allblock[1].innerHTML = '0';
			 break;
	      }
		  //248
		  if(allblock[2].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[8].innerHTML != '0'){
		     allblock[8].innerHTML = '0';
			 break;
	      }
	      if(allblock[2].innerHTML == 'X' && allblock[8].innerHTML == 'X' && allblock[4].innerHTML != '0'){
		     allblock[4].innerHTML = '0';
			 break;
	      }
	      if(allblock[4].innerHTML == 'X' && allblock[8].innerHTML == 'X' && allblock[2].innerHTML != '0'){
		     allblock[2].innerHTML = '0';
			 break;
	      }
		  //048
		  if(allblock[0].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[8].innerHTML != '0'){
		     allblock[8].innerHTML = '0';
			 break;
	      }
	      if(allblock[0].innerHTML == 'X' && allblock[8].innerHTML == 'X' && allblock[4].innerHTML != '0'){
		     allblock[4].innerHTML = '0';
			 break;
	      }
	      if(allblock[4].innerHTML == 'X' && allblock[8].innerHTML == 'X' && allblock[0].innerHTML != '0'){
		     allblock[0].innerHTML = '0';
			 break;
	      }
		  //246
		  if(allblock[2].innerHTML == 'X' && allblock[4].innerHTML == 'X' && allblock[6].innerHTML != '0'){
		     allblock[6].innerHTML = '0';
			 break;
	      }
	      if(allblock[2].innerHTML == 'X' && allblock[6].innerHTML == 'X' && allblock[4].innerHTML != '0'){
		     allblock[4].innerHTML = '0';
			 break;
	      }
	      if(allblock[4].innerHTML == 'X' && allblock[6].innerHTML == 'X' && allblock[2].innerHTML != '0'){
		     allblock[2].innerHTML = '0';
			 break;
	      }
		  
		  // centr
		  if(allblock[4].innerHTML == ''){
		     allblock[4].innerHTML = '0';
			 break;
	      }
		  
          //if(allblock[0].innerHTML == '' || allblock[2].innerHTML == '' || allblock[6].innerHTML == '' || allblock[8].innerHTML == ''){
		     //allblock[4].innerHTML = '0';
			 //break;
	      //}
		  
		  //if(allblock[0].innerHTML == ''){
		   //  allblock[0].innerHTML = '0';
			// break;
	      //}
		  //if(allblock[2].innerHTML == ''){
		  //   allblock[2].innerHTML = '0';
			// break;
	      //}
		  //if(allblock[6].innerHTML == ''){
		  //   allblock[6].innerHTML = '0';
			// break;
	      //}
		  //if(allblock[8].innerHTML == ''){
		  //   allblock[8].innerHTML = '0';
			// break;
	      //}
		  
		  
		  if(allblock[i].innerHTML == ''){
	          allblock[i].innerHTML = '0';
			  break;
	      }
	  }
	  
	  
	  
  }
  //ничья
  
  //конец игры
  function finish(){
	  if(hod==5){
	       alert("Игра окончена");
	  }
	//location.reload();
}

}