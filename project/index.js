const box2 = document.querySelector('.box1');

document.addEventListener('mousemove', function(e) {
    box2.style.left = e.clientX + 'px';
    box2.style.top = e.clientY + 'px';
});
