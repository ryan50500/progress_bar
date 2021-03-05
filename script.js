const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    update();
})

prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    update();
})

function update(){
    console.log(currentActive);
    if(currentActive > 1) {
        // disabling PREVIEW button
        prev.disabled = false;
    }
    if (currentActive === 1) {
        prev.disabled = true;
    }

    if(currentActive > 3) {
          // disabling NEXT button
        next.disabled = true;
    }
    if(currentActive <= 3)  {
        next.disabled = false;
    }
}
