import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const input = document.querySelector('input[type="number"]'); //value (delay) - к-ть мілісекунд
const form = document.querySelector('.form');
const inputFulfilled = document.querySelector('input[value="fulfilled"]'); //value: "fulfilled"; checked: true/false (д. радіокнопки)

form.addEventListener('submit', evt => {
  evt.preventDefault();
  const delay = Number(input.value); //Number(evt.target.elements.delay.value); через атрибут [name='delay'] в input
  //const stateValue = evt.target.elements.state.value //fulfilled || rejected -> на основі можна зробити перевірку

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (inputFulfilled.checked) {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });

  promise
    .then(value =>
      iziToast.success({
        message: value,
        position: 'topRight',
      })
    )

    .catch(error =>
      iziToast.error({
        message: error,
        position: 'topRight',
      })
    );
  form.reset();
});
