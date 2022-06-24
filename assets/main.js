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