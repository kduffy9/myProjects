 var button_1=document.getElementById("test");
 var radio1=document.getElementById("ans_one");    
 var radio2=document.getElementById("ans_two");    
 var radio3=document.getElementById("ans_three");    
 var img=document.getElementById("first");
 var img2=document.getElementById("sec");
 var img3=document.getElementById("third");
 var button_2=document.getElementById("test2");
 var capt=document.getElementById("caption");    
 var capt2=document.getElementById("capt2");    
 var start=document.getElementById("start");
 var end=document.getElementById("quit");
 var intro=document.getElementById("intro");
 var quiz_num=0;
 var program_num=0;  
 var imgarr= new Array();
imgarr[0]={
            image: new Image(),
			src: "bed.png",
			caption: "Bett"
			};
imgarr[1]={
            image: new Image(),
			src: "dresser.png",
			caption: "Kommode"
			};
imgarr[2]={
            image: new Image(),
			src: "floor_lamp.png",
			caption: "Stehlampe"
			};			
imgarr[3]={
            image: new Image(),
			src: "clothes.jpg",
			caption: "Kleider"
			};
imgarr[4]={
            image: new Image(),
			src: "comb.png",
			caption: "Kamm"
			};	
imgarr[5]={
            image: new Image(),
			src: "Wardrobe.png",
			caption: "Kleiderschrank"
			};
imgarr[6]={
            image: new Image(),
			src: "nightstand.png",
			caption: "Nachttisch"
			};	
imgarr[7]={
            image: new Image(),
			src: "pillow.jpg",
			caption: "Kopfkissen"
			};
imgarr[8]={
            image: new Image(),
			src: "blanket.jpg",
			caption: "Decke"
			};
var audio= new Audio();
var sound= new Array()
sound[0]={src:"Bett.mp3"};
sound[1]={src:"kommode.mp3"};
sound[2]={src:"Stehlampe.mp3"};
sound[3]={src:"Kleider.mp3"};
sound[4]={src:"Kamm.mp3"};
sound[5]={src:"Kleiderschrank.mp3"};
sound[6]={src:"Nachttisch.mp3"};
sound[7]={src:"Kopfkissen.mp3"};
sound[8]={src:"Decke.mp3"};
audio.src=sound[1].src;
function first(){
      hide(intro); 
      hide(start);   
      hide(quit);   
      hide(button_2); 
      hide(radio1);
      hide(radio2);
      hide(radio3);
      hideimage(img2);
      hideimage(img3);
      hideimage(img);   
      show(capt);
   timer=setInterval(frame,1000);  
function frame(){
  if (program_num==3+quiz_num || program_num==imgarr.length)
    { 
    clearInterval(timer)
    show(button_1);
    }
  else{
   showimage(program_num,img);
   audio.src=sound[program_num].src;
      audio.load();
   capt.innerHTML=imgarr[program_num].caption;
   audio.volume=0.5;
   audio.play();
   program_num++;
     }       
    }
   }
function startquiz(){
      var chk=document.getElementById("caption")
	  hide(button_1);
      show(button_2);
      show(end);  
  if(program_num<=3){
     var randomage= Math.floor(Math.random()* 3);
       audio.src=sound[randomage].src;
       audio.play();
	   capt2.innerHTML=imgarr[randomage].caption;
       show(capt2);
       showimage(0+quiz_num,img);
       show(radio1);
       radio1.value=imgarr[0+quiz_num].caption;
       showimage(1+quiz_num,img2);
       show(radio2);
       radio2.value=imgarr[1+quiz_num].caption;
       showimage(2+quiz_num,img3);
       show(radio3);
       radio3.value=imgarr[2+quiz_num].caption;
      }
  else if(program_num<7){
        
      var randomage=Math.floor(Math.random() * ((quiz_num+2)- quiz_num + 1) ) + quiz_num 
       audio.src=sound[randomage].src;
       audio.play();
	   capt2.innerHTML=imgarr[randomage].caption;
       show(capt2); 
       showimage(quiz_num,img);
       show(radio1);
       radio1.value=imgarr[quiz_num].caption;
       showimage(1+quiz_num,img2);
       show(radio2);
       radio2.value=imgarr[1+quiz_num].caption;
       showimage(2+quiz_num,img3);
       show(radio3);
       radio3.value=imgarr[2+quiz_num].caption;
    }
  else{
      var randomage= Math.floor(Math.random() * (8- 6+ 1) ) + 6;
       audio.src=sound[randomage].src;
       audio.play();
	   capt2.innerHTML=imgarr[randomage].caption;
       show(capt2);
       showimage(6,img);
       show(radio1);
       radio1.value=imgarr[6].caption;
       showimage(7,img2);
       show(radio2);
       radio2.value=imgarr[7].caption;
       showimage(8,img3);
       show(radio3);
       radio3.value=imgarr[8].caption;
    }
       hide(capt)
 end.onclick=function exit(){
         program_num=0;
         quiz_num=0;
         chk.innerHTML="";
         hide(chk);
         show(intro);
         hide(capt);
         hide(capt2);
         hide(button_2); 
         hide(radio1);
         hide(radio2);
         hide(radio3);
         hideimage(img);
         hideimage(img2);
         hideimage(img3);
         show(start);
         hide(end);
     }
  button_2.onclick=function check(){
         hide(capt2);
  if (radio1.value==imgarr[randomage].caption && radio1.checked || radio2.value==imgarr[randomage].caption && radio2.checked || radio3.value==imgarr[randomage].caption && radio3.checked){
	    chk.innerHTML="Correct!";
        audio.src="ding.mp3";
        audio.play();
  if(program_num<7){
        quiz_num =quiz_num+program_num;
        }
  else{program_num=0;
        quiz_num =0;}
        first(); 
        show(chk);
       }
  else{
	   chk.innerHTML="Wrong";
       audio.src="buzzer.mp3";
       audio.play();
	   show(chk);
       }
      }
	}
function showimage(j,img_num){
       img_num.src=imgarr[j].src;
       img_num.style.display="block";
    }
function hideimage(img_num){
       img_num.style.display="none";
    }
function hide(obj){
       obj.style.visibility="hidden";
    }
function show(obj){
       obj.style.visibility="visible";
    }