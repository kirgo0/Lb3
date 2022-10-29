// Getting scroll value for Parallax
window.addEventListener('scroll', e => {
    document.body.style.cssText = `--scrollTop: ${this.scrollY}px`;
})


// Heart Treatment Script
var buttons = document.getElementsByClassName("fifth-block-content_button");

for(let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function() {
        myFunction(this);
    }
}

function myFunction (event) {
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


// Scroll animation fucntion for styles changing 
function addScrollAnimation(elementsSelector, elementsSelectorShow) {
    elementsToAnimate = document.querySelectorAll(elementsSelector);
    var observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                entry.target.classList.add(elementsSelectorShow);
            }
        });
    });
    
    elementsToAnimate.forEach((element) => observer.observe(element));
}

addScrollAnimation('.text-animation-hidden','text-animation-show');

addScrollAnimation('.text-animation-bottom-hidden','text-animation-bottom-show')

addScrollAnimation('.picture-hidden','picture-show');

addScrollAnimation('.caption-animation-hidden','caption-animation-show');

addScrollAnimation('.seventh-block-content_team-member','member-animation-show');

addScrollAnimation('.second-block-animation-hidden','second-block-animation-show');

addScrollAnimation('.fifth-block-content_button','fifth-button-animation-show');