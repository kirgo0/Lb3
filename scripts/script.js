window.addEventListener('scroll', e => {
    document.body.style.cssText = `--scrollTop: ${this.scrollY}px`;
})

var buttons = document.getElementsByClassName("fifth-block-content_button");

for(let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        myFunction(this);
    }
}

function myFunction (event) {
    // event.style.backgroundColor = "red";
    console.log(event.parentNode);
    if(event.parentNode.classList.contains('not-active-button')) {
        for(let i = 0; i < buttons.length; i++) {
            if(buttons[i].parentNode.classList.contains('active-button')) {
                buttons[i].parentNode.classList.add('not-active-button');
                buttons[i].parentNode.classList.remove('active-button');
            }
        }
        event.parentNode.classList.add('active-button');
        event.parentNode.classList.remove('not-active-button');
    } else {
        for(let i = 0; i < buttons.length; i++) {
            if(buttons[i].parentNode.classList.contains('active-button')) {
                buttons[i].parentNode.classList.add('not-active-button');
                buttons[i].parentNode.classList.remove('active-button');
            }
        }
    }
}

captionsToAnimate = document.querySelectorAll('.caption-animation-hidden');

var observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('caption-animation-show');
        } else {
            entry.target.classList.remove('caption-animation-show');
        }
    });
});

captionsToAnimate.forEach((element) => observer.observe(element));


textsToAnimate = document.querySelectorAll('.text-animation-hidden');

var observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('text-animation-show');
        } else {
            entry.target.classList.remove('text-animation-show');
        }
    });
});

textsToAnimate.forEach((element) => observer2.observe(element));


picturesToAnimate = document.querySelectorAll('.picture-hidden');

var observer3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('picture-show');
        } else {
            entry.target.classList.remove('picture-show');
        }
    });
});

picturesToAnimate.forEach((element) => observer3.observe(element));