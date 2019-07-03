const confirmBtn = document.querySelector('button');
const modal = document.querySelector('pn-modal');

confirmBtn.addEventListener('click', () => {
  modal.open();
})

modal.addEventListener('confirmOrder', () => {
  console.log('Confirmed!');
})

modal.addEventListener('cancelOrder', () => {
  console.log('Canceled!');
})