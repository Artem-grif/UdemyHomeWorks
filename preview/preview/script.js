'use strict';

const btns = document.querySelectorAll('button'),
    //   btn = document.querySelector('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('Click');
// };

// btn.onclick = function() {
//     alert('Second click');
// };

// btn.addEventListener('click', () => {
//    alert('Click');
// });


// btn.addEventListener('click', (event) => {
//     console.log(event.target);
//     event.target.style.cssText = 'background-color: blue';
//     // event.target.remove();
    
//     // console.log('Hover');
//  });

// let i = 0;

const deleteElement = (e) => {
    console.log(e.target);
    // console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

//  btn.addEventListener('click', deleteElement);
//  overlay.addEventListener('click', deleteElement);

btns.forEach(item => {
    item.addEventListener('click', deleteElement, {once: true});
});


 const link = document.querySelector('a');

 link.addEventListener('click', function(event) {
     event.preventDefault();

     console.log(event.target);
 });
