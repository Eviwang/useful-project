import './index.css'
// import Hello from './hello.ts'
// import './components/hellojs.js'

var app = document.querySelector('#app')
app.innerHTML = 'hello wolrd!!!';

window.addEventListener('error',function(e){
  console.log('error',e)
},true)
