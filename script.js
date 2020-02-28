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


  
