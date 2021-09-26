const toggleBtn = document.querySelector('.navbar__toogleBtn');/*html안의 클래스노드들중 .navbar__toogleBtn를 찾아서 toggleBtn이라는 변수에 연결*/
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () => { /*마우스로 클릭시 발생*/ 
   menu.classList.toggle('active');/*classList중에 active가있으면 빼주고 없으면 추가*/
   icons.classList.toggle('active');
});