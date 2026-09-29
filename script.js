const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.desktop-nav');
if(menu){
  menu.addEventListener('click',()=>{
    const open = nav.classList.toggle('mobile-open');
    if(open){
      nav.style.display='flex';
      nav.style.position='absolute';
      nav.style.top='70px';
      nav.style.left='0';
      nav.style.right='0';
      nav.style.padding='24px 20px';
      nav.style.background='#f3f1ec';
      nav.style.flexDirection='column';
      nav.style.gap='18px';
      nav.style.borderBottom='1px solid #ddd';
    } else nav.removeAttribute('style');
  });
}
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{
  if(nav.classList.contains('mobile-open')){nav.classList.remove('mobile-open');nav.removeAttribute('style');}
}));
