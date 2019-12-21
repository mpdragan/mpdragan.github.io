function loadMore(event){
	var more = document.getElementById("more");
	var btn = document.getElementById("btn");

	if(event==0){
		btn.innerHTML="Посмотреть больше";
		more.style.display="none";
	} else{
		more.style.display="inline";
	}
}