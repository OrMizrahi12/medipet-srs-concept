
const toast = document.getElementById('toast');
function showToast(){
  toast.textContent = 'זה דמו לא רשמי: הכפתור חסום ולא שולח/מחייג/אוסף פרטים.';
  toast.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => toast.classList.remove('show'), 4200);
}
document.querySelectorAll('[data-demo]').forEach(el => el.addEventListener('click', (event) => {
  event.preventDefault();
  showToast();
}));
