const prevBtns = document.querySelectorAll(".prev");
const nextBtns = document.querySelectorAll(".next");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".step");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});

function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-active") &&
      formStep.classList.remove("form-active");
  });

  formSteps[formStepsNum].classList.add("form-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("step-active");
    } else {
      progressStep.classList.remove("step-active");
    }
  });
}
