


// Replies Section Logic 


const reply = (resp) => {
    var resp = document.getElementById(resp);
    // console.log(resp);

    if (resp.className === 'replies') {
        resp.className = "reply_show";
    } else if (resp.className === "reply_show") {
        resp.className = "replies";
    }
}



// Replies Section logic End


// To get the id of the like btn

const like = document.getElementById('like_btn');

// Declaration of function to be single click on like btn

const singleClick = () => {
    like.style.fontWeight = "normal";
    like.style.background = '#bbe1fa';
    like.style.color = '#1b262c';
    like.innerHTML = ' Liked ';
}


// Declaraction of function to be double clicked on like btn

const doubleClick = () => {
    like.style.fontWeight = 'normal';
    like.style.background = '#3282b8';
    like.style.color = '#fff';
    like.innerHTML = 'Like';
}


// Function call on click and then double click

let clickCount = 0;

like.addEventListener('click', function () {
    clickCount++;
    if (clickCount === 1) {
        singleClickTimer = setTimeout(function () {
            clickCount = 0;
            singleClick();
        }, 200);
    } else if (clickCount === 2) {
        clearTimeout(singleClickTimer);
        clickCount = 0;
        doubleClick();
    }
}, false)






// / To get the id of the like btn

const like2 = document.getElementById('like_btn2');

// Declaration of function to be single click on like btn

const singleClick2 = () => {
    like2.style.fontWeight = "normal";
    like2.style.background = '#bbe1fa';
    like2.style.color = '#1b262c';
    like2.innerHTML = ' Liked ';
}


// Declaraction of function to be double clicked on like btn

const doubleClick2 = () => {
    like2.style.fontWeight = 'normal';
    like2.style.background = '#3282b8';
    like2.style.color = '#fff';
    like2.innerHTML = 'Like';
}


// Function call on click and then double click

let clickCount2 = 0;

like2.addEventListener('click', function () {
    clickCount2++;
    if (clickCount2 === 1) {
        singleClickTimer2 = setTimeout(function () {
            clickCount2 = 0;
            singleClick2();
        }, 200);
    } else if (clickCount === 2) {
        clearTimeout(singleClickTimer2);
        clickCount2 = 0;
        doubleClick2();
    }
}, false);
