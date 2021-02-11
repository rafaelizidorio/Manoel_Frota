function myFunction() {
    var x = document.getElementsByClassName('navigation');

    var displaySettings = x[0].style.display;

    if (displaySettings === 'block') { 
        x[0].style.display = 'none';
        x[0].style.transition = '0.5s';
    }
    else { 
        x[0].style.display = 'block';
        x[0].style.transition = '0.5s';
    }
}