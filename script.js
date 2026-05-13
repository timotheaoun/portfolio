
const reveals = document.querySelectorAll('.card, .project, .contact-box');

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
},{
  threshold:0.15
});

reveals.forEach(el=>{
  el.classList.add('reveal');
  observer.observe(el);
});
