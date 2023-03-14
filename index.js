function showBar(){
  document.getElementById('sidebar').classList.toggle('active')
}
function showInf(){
  document.getElementById('contact-info').style.display = "block";
}

let options = [
  'play chess 1v1',
  'website Information',
  'game rules',
  'contact us',
  'settings',
  'register',
  'online chess',
];

const resultsBox = document.querySelector(".results-box");
const inputBox = document.getElementById("search-item");

inputBox.onkeyup = function(){
  let result = [];
  let input = inputBox.value;
  if(input.length){
    result = options.filter((keyword)=>{
    return keyword.toLowerCase().includes(input.toLowerCase()); 
    });
  }
  display(result);
}

function display(result){
  const content = result.map((list)=>{
    return "<li>"+list+"</li>";
  });
  resultsBox.innerHTML = "<ul>"+ content.join('') +"</ul>"
}
