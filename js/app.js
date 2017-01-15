(function(){
      let btn=document.querySelector('button');
      let container=document.querySelector('.container');
      let box=document.getElementsByClassName('box1-color')[0];
      let secondBox=document.getElementsByClassName('box2-color')[0];
      let lastBox=document.getElementsByClassName('box3-color')[0];
     
      btn.addEventListener('click',function(){
          container.classList.toggle('appear');
          box.classList.toggle('speed-box');
          lastBox.classList.toggle('speed-box');

      });
 })();