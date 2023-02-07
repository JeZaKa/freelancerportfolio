const darkMode = document.querySelector('.dark-mode-btn');

// 1
// Проверка темной темы в системе
if(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches){
  darkMode.classList.add('dark-mode-btn--active');
  document.body.classList.add('dark');
}

// 2
// Проверка темной темы в localstorage
if(localStorage.getItem('darkMode') === 'dark'){
  darkMode.classList.add('dark-mode-btn--active');
  document.body.classList.add('dark');
} else if(localStorage.getItem('darkMode') === 'light'){
  darkMode.classList.remove('dark-mode-btn--active');
  document.body.classList.remove('dark');
}
 


// Изменение темы в разные время суток
window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event)=>{
  const newColorScheme = event.matches ? "dark": 'light';
  if(newColorScheme==="dark"){
    darkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
    localStorage.setItem('darkMode', 'dark');
  }else{
    darkMode.classList.remove('dark-mode-btn--active');
    document.body.classList.remove('dark');
    localStorage.setItem('darkMode', 'light');
  }
})

// Добавление темной темы
darkMode.addEventListener('click', () =>{
  darkMode.classList.toggle('dark-mode-btn--active');
  const isDark = document.body.classList.toggle('dark');

  if(isDark){
    localStorage.setItem('darkMode', 'dark');
  }else{
    localStorage.setItem('darkMode', 'light');
  }
});

