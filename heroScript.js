//getting id from session
var id=localStorage.getItem('hero-id');
function addItem(res){

    if(res ){
      document.getElementById('hero-img').src=res.image.url;
      document.getElementById('name-text').innerText=res.name;
      var bio=Object.keys(res.biography.aliases);

      //retrieving bio description
      for(var i=0;i<bio.length;i++)
      {
        var sp=document.createElement('span');
        sp.className="search-li";
        var element= document.getElementById('bio-text').appendChild(sp);
        element.innerHTML=res.biography.aliases[bio[i]]+", ";
        console.log(element.innerHTML);
      }

      //retrieving work description
      var work=Object.keys(res.work);
      for(var i=0;i<work.length;i++)
      {
        var li=document.createElement('li');
        sp.className="search-li";
        var element= document.getElementById('work-text').appendChild(li);
        element.innerHTML=work[i].capitalize() +"-&nbsp&nbsp"+res.work[work[i]];
      }

      document.getElementById('power-text').innerHTML="<span style='font-size:40px;'>"+res.powerstats.strength+"<span>";

  }

  else{
    return;
  }
}

//To capitalise first character of work
String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
}

//get response on the basis of id, stored in session
function init(){
  var xhrRequest=new  XMLHttpRequest();
  xhrRequest.onload=function(){
     var res= JSON.parse(xhrRequest.response);
     addItem(res);
  }
  xhrRequest.open('get','https://www.superheroapi.com/api.php/3078862828893622/'+id);
  xhrRequest.setRequestHeader('Content-type', 'application/json');
  xhrRequest.send();
  
}

window.addEventListener('load', init)
