function createWelcomeMessage() {
  const div = document.createElement('div');
  div.style.position = 'fixed';
  div.style.top = '20px';
  div.style.right = '20px';
  div.style.padding = '15px';
  div.style.backgroundColor = '#ffffff';
  div.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
  div.style.borderRadius = '8px';
  div.style.zIndex = '9999';
  div.innerHTML = `
    <h2 style="margin: 0; color: #1a73e8; font-size: 16px;">Welcome to Gmail AI Responder</h2>
    <p style="margin: 8px 0 0; color: #5f6368; font-size: 14px;">Your AI assistant is ready to help!</p>
  `;
  
  document.body.appendChild(div);
  
  setTimeout(() => {
    div.style.opacity = '0';
    div.style.transition = 'opacity 0.5s ease-out';
    setTimeout(() => div.remove(), 500);
  }, 5000);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', createWelcomeMessage);
} else {
  createWelcomeMessage();
}