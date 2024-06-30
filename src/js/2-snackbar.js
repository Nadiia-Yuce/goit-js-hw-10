import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import successSvg from '../img/success.svg';
import errorSvg from '../img/error.svg';

const input = document.querySelector('input[type="number"]'); //value (delay) - к-ть мілісекунд
const form = document.querySelector('.form');
const inputFulfilled = document.querySelector('input[value="fulfilled"]'); //value: "fulfilled"; checked: true/false (д. радіокнопки)

form.addEventListener('submit', evt => {
  evt.preventDefault();
  const delay = Number(input.value); //Number(evt.target.elements.delay.value); через атрибут [name='delay'] в input
  //const stateValue = evt.target.elements.state.value //fulfilled || rejected -> на основі можна зробити перевірку
  const ifChecked = inputFulfilled.checked;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ifChecked) {
        resolve(`Fulfilled promise in ${delay}ms`);
      } else {
        reject(`Rejected promise in ${delay}ms`);
      }
    }, delay);
  });

  promise
    .then(value =>
      iziToast.success({
        title: 'OK',
        titleColor: 'white',
        titleSize: '16px',
        message: value,
        messageColor: 'white',
        messageSize: '16px',
        position: 'topRight',
        backgroundColor: '#59a10d',
        iconUrl: '../img/success.svg',
        close: false,
        closeOnClick: true,
      })
    )

    .catch(error =>
      iziToast.error({
        title: 'Error',
        titleColor: 'white',
        titleSize: '16px',
        message: error,
        messageColor: 'white',
        messageSize: '16px',
        position: 'topRight',
        backgroundColor: '#ef4040',
        iconUrl: '../img/error.svg',
        close: false,
        closeOnClick: true,
      })
    )

    .finally(() => form.reset());
});
