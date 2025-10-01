function connectBot(){document.getElementById('status').innerText='✅ Bot connected successfully!';}
function pairBot(){document.getElementById('status').innerText='📱 Pairing QR generated (demo only).';}
function contactOwner(){document.getElementById('status').innerHTML='📩 Contact Lucky via <a href="mailto:owner@example.com">Email</a>';}

function sendMessage(event){
  event.preventDefault();
  const name=document.getElementById('name').value;
  const email=document.getElementById('email').value;
  const message=document.getElementById('message').value;
  document.getElementById('form-status').innerText=`Thank you ${name}, your message has been sent! (Demo only)`;
  document.getElementById('name').value='';
  document.getElementById('email').value='';
  document.getElementById('message').value='';
}