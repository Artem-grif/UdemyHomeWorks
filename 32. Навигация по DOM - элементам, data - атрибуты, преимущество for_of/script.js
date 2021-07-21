'use strict';

"32. Навигация по DOM - элементам, data-атрибуты, преимущество for/of";

// console.log(document.body);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);

// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('#current').parentElement);

// console.log(document.querySelector('[data-current="3"]').previousElementSibling);

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    } else {
        if (node.nodeName == '#comment') {
        continue;
        }
    }

    console.log(node);
}