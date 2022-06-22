const buttons = document.querySelectorAll(".task1-container button");
const indicator = document.querySelector("#number-indicator")
const disp = document.querySelector("#display-heading")

// Solution to task One
const incrementFunc = () => {
  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const btnValue = e.currentTarget.textContent.slice(1);
      disp.textContent = `added ${btnValue}`;

      indicator.textContent = (parseInt(indicator.textContent) + parseInt(btnValue)).toString();
    })
  })
}
incrementFunc();

// //////


// Solution to task 2

const tossCoinBtn = document.querySelector("#toss-coin");
// const coinHead = document.querySelector("")

let head;
let tail;
let coinSide = Math.random();

tossCoinBtn.addEventListener('click', () => {
  tossCoin();
})

const tossCoin = () => {
  if (coinSide > 0.5) {
    console.log(coinSide);
    document.querySelector('img').src = "./images/head-side.png";
    document.querySelector('.coin-imgs').innerHtml = `${document.querySelector('img').src};`
  }
}

