import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const input = document.querySelector('#datetime-picker');
const button = document.querySelector('button[data-start]');
let userSelectedDate;

button.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    const today = new Date();

    if (selectedDates[0] > today) {
      button.disabled = false;
      userSelectedDate = selectedDates[0];
    } else {
      window.alert('Please choose a date in the future');
      button.disabled = true;
    }
  },
};

const fp = flatpickr(input, options);
