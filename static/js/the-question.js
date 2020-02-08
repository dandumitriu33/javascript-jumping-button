console.log(qq);
console.log(aa);

let h1 = document.createElement("h1");
h1.textContent = qq;
document.body.appendChild(h1);

let yes = document.createElement("button");
yes.textContent = 'Yes';
yes.classList.add('yes');
document.body.appendChild(yes);

let no = document.createElement("button");
no.textContent = 'No';
no.classList.add('no');
document.body.appendChild(no);

if (aa=='yes') {
    console.log('entered yes');
    let correct = document.getElementsByClassName('yes');
    for (element of correct) {
        element.addEventListener('click', handleCorrectClick);
    }
    let incorrect = document.getElementsByClassName('no');
    for (element of incorrect) {
        element.addEventListener('mouseenter', handleMouseenter)
    }
}
 function handleCorrectClick(event) {
    alert('I knew you selected this :)');
 }

function handleMouseenter(event) {
    let width = document.documentElement.clientWidth
    let height = document.documentElement.clientHeight
    console.log('w: ', width, ' h: ', height)
    let x = Math.random() * 400;
    let y = Math.random() * 400;
    this.style.position = 'absolute';
    this.style.left = x.toString() +'px';
    this.style.top = y.toString() +'px';
}
