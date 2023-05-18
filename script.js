const questionBox = document.querySelectorAll('.question-box');

questionBox.forEach((question) => {
  question.addEventListener('click', () => {
    if(question.parentNode.classList.contains('visible')) {
      question.parentNode.classList.toggle('visible');
    } else {
      questionBox.forEach((question) => question.parentNode.classList.remove('visible')); //odpowiada za to że może być otwarty tylko jeden
      question.parentNode.classList.add('visible');
    }
  });
});
