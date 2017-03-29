function checkValiDate(form){
	var title=form.news.value;
	var content=form.nd.value;
	var email=form.email.value;
	var phone=form.phone.value;
	var time=form.datetime.value;
	
	var ph=/^[0-9]+$/;
	var re=/[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
	
	var date =new Date(time);
	var ht=new Date();
	
	var valiDE=true;
	var valiDPH=true;
	var valiDtitle=true;
	var valiDND=true;
	var valiDT=true;
	if(title==""){
		document.getElementById("nw").innerHTML="Title must not empty";
		valiDtitle=false;
	}
	else{
		document.getElementById("nw").innerHTML="";
	}
	if(content.length<200){
		document.getElementById("ndung").innerHTML="ky tu phai>=200";
		valiDND=false;
	}
	else{
		document.getElementById("ndung").innerHTML="";
	}
	if(date<ht){
		document.getElementById("tg").innerHTML="thoi gian phai sau thoi gian hien tai";
		valiDT=false;
	}
	else{
		document.getElementById("tg").innerHTML="";
	}
	if(!re.test(email)){
		document.getElementById("e").innerHTML="please include an '@' in the Email address!"+ email.toString()+" is missing an @";
		valiDE=false;
	}
	else{
		document.getElementById("e").innerHTML="";
	}
	if(!ph.test(phone))
	{
		document.getElementById("ph").innerHTML="Phone number incorrect";
		valiDPH=false;
	}
	else{
		document.getElementById("ph").innerHTML="";
	}
	return valiDtitle&&valiDND&&valiDE&&valiDPH&&valiDT;
};
function resetForm(form)
{
	var title=form.news.value;
	var content=form.nd.value;
	var email=form.email.value;
	var phone=form.phone.value;
	if(title!=""||content!=""||email!=""|| phone!="")
	{
		title=" ";
		email=" ";
		phone=" ";
		content=" ";
	}
	return true;
};
function link(){
	var titles=document.getElementById("txtnews");
	var linka=document.getElementById("lktinh");		
		linka.innerHTML="http://localhost/BBC/"+titles.value;
};
function checkRadio(){
	if(document.getElementById("rad1").checked==true){
		document.getElementById("datetime").disabled=true;
}
	if(document.getElementById("rad2").checked==true){
		document.getElementById("datetime").disabled=false;
}
	};
function theDanhdau(form){
				var the=form.txtdanhdau.value;
				var para = document.createElement("span");
				var oImg = document.createElement("img");				
				oImg.setAttribute('src', 'images/iconx.jpg');	
				document.getElementById("right").appendChild(oImg);				
				var t = document.createTextNode(the); 
				para.appendChild(t);   
				document.getElementById("right").appendChild(para); 
				if(the==t){
				para.appendChild(t);         
				return false;
				} return true;				
};
