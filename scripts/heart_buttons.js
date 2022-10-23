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