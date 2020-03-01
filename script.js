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
function out(){
  body= document.getElementById('out');
body.innerHTML = '<body style="padding: 0; margin: 0; color: #fff; padding: 1em; display: flex; flex-direction: column;"><header style="flex: 0 0 5em; background-color: #37474f;"><p>Header</p></header><main style="display: flex; flex-direction: column;"><article style="background-color: #546e7a; flex: 2 2 12em; padding: 1em;"><h1>Что такое Lorem Ipsum?</h1><p>Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время</p></article><nav style="flex: 1; background-color: #455a64; order: -1;"><p>Navigation</p></nav><aside style="flex: 1; background-color: #455a64;"><p>Footer</p></aside></main><footer style="background-color: #37474f; flex: 0 0 5em;"><p>Sidebar</p></footer></body>';
}


//Task 2
var countries = {
    'Mexico': 38,
    'Australia': 18,
    'Belarus': 20,
    'France': 25,
    'Russia': -8,
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
  //Task 3
  function maxcountriesterm(Object){
    var max = 0;
    for(var key in Object){
        if(Object[key] > max){
            max = Object[key]
        }
    }
    return max;
}
var maxcountriesterm = maxcountriesterm(countries);
alert('max_countries: ' + maxcountriesterm);


  


  
 