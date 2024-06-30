import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import cautionSvg from '/img/caution.svg';

const input = document.querySelector('#datetime-picker');
const button = document.querySelector('button[data-start]');
const daysLeft = document.querySelector('span[data-days]');
const hoursLeft = document.querySelector('span[data-hours]');
const minutesLeft = document.querySelector('span[data-minutes]');
const secondsLeft = document.querySelector('span[data-seconds]');

let userSelectedDate;

button.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const currentTime = new Date();
    if (selectedDates[0] > currentTime) {
      button.disabled = false;
      userSelectedDate = selectedDates[0];
    } else {
      iziToast.warning({
        title: 'Caution',
        titleColor: 'white',
        titleSize: '16px',
        message: 'Please choose a date in the future',
        messageColor: 'white',
        messageSize: '16px',
        position: 'topRight',
        backgroundColor: '#ffa000',
        iconUrl: '/img/caution.svg',
        close: false,
        closeOnClick: true,
      });
      button.disabled = true;
    }
  },
};

const fp = flatpickr(input, options);
button.addEventListener('click', handlerStart);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function handlerStart() {
  input.disabled = true;
  button.disabled = true;
  const intervalId = setInterval(() => {
    const now = Date.now(); //Unix time
    const elapsedTime = userSelectedDate - now;

    if (elapsedTime === 0) {
      clearInterval(intervalId);
      input.disabled = false;
      button.disabled = false;
      //return
    }

    const { days, hours, minutes, seconds } = convertMs(elapsedTime);
    daysLeft.textContent = addLeadingZero(days);
    hoursLeft.textContent = addLeadingZero(hours);
    minutesLeft.textContent = addLeadingZero(minutes);
    secondsLeft.textContent = addLeadingZero(seconds);
  }, 1000);
}
