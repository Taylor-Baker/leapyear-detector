function isLeapYear(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}

$(document).ready(function() {
  $('#leapYearForm').submit(function(event) {
    event.preventDefault();

    let leapYearInput = parseInt($('#leapYearInput').val());

    let isItLeap = isLeapYear(leapYearInput);

    $('.output').text(isItLeap);
  });
});