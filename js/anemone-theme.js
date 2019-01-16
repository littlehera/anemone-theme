/*
Custom Functions
*/

function set_links_inactive(target_url){
  var i = 0;
  var x = document.getElementsByTagName('a');
  for (i = 0; i < x.length; i++) {
    var current_url = x[i].getAttribute('href');
    if(target_url!==current_url){
      if(!current_url.includes('mailto'))
        x[i].setAttribute('class','');
    }
    else{
      x[i].setAttribute('class',"active");
    }
  }
}

function click_handler(e){
  console.log(e.target);
  var element_href = e.target.getAttribute('href');
  var parent_href=e.target.parentNode.getAttribute('href');
  //console.log("E:"+element_href+" | P:"+parent_href);
  var target_url = (element_href !=null? element_href:parent_href);
  set_links_inactive(target_url);
 //set_links_inactive(e.target.textContent);
}
document.addEventListener('click',click_handler,false)

/*
function handler(e){
 var txt='You clicked on a '+e.target.nodeName+'\n';
    txt+='The innerHTML is '+e.target.innerHTML+'\n';
    txt+='The text is '+e.target.textContent+'\n';
    txt+='The parentNode is '+e.target.parentNode.nodeName+'\n';
 alert(txt)
}
document.addEventListener('click',handler,false)
*/
