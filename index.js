window.addEventListener('keydown', (e) => {

    console.log('KeyCode = ' + e.keyCode);
    console.log('Key = ' + e.key);
    console.log('CharCode = ' + e.charCode);

    if (e.key === 'ArrowRight'){
        window.scrollBy(window.innerWidth-40, 0);
        return
    }

    if (e.key === 'ArrowLeft'){
        window.scrollBy(-window.innerWidth+40, 0);
        return
    }

})