document.getElementById('changeBtn').addEventListener('click', function(){
  const el = document.getElementById('greeting');
  el.textContent = el.textContent === 'Hello, world!' ? 'Hello from JavaScript!' : 'Hello, world!';
});

console.log('script loaded');
