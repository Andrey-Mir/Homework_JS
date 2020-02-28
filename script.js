//button1
document.getElementById("vxod").onclick = function()
{
  document.location.href = "https://yandex.by";
  return false;
}


//button2
window.onload = function() {
    document.getElementById('btn').onclick = function(){
        if(document.body.className != 'new_class'){
            document.body.className = 'new_class';
        }
        else{
            document.body.className = '';
        }
    }
}
//button3
document.getElementById('html').addEventListener('click', function(){
  updateHTML(
    `<div style="display: flex;">
      <div style="width: 25%;">1</div>
      <div style="width: 25%;">2</div>
      <div style="width: 25%;">3</div>
      <div style="width: 25%;">4</div>
    </div>`
  );
});

function changeCSS(){
  document.head.insertAdjacentHTML('beforeend', `
     body {
       background-color: #ffe2aa; color: #123; 
      } 
  `);
}


function updateHTML(html){
  document.body.innerHTML = html;
}

//Task 2
var countries = {
    'Mexico': 32,
    'Australia': 18,
    'Belarus': 20,
    'France': 25,
    'Russia': 8,
    'USA': 11,
  }
  Object.defineProperty(countries, 'averageAge', {
    enumerable: false,
    get() {
      var r = 0
      var k = Object.keys(this)
      
      for(var key in this){
        r += this[key]
      }
      return r / k.length
    }
  })
 
  console.log(countries.averageAge) 


  
