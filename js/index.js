const currentYear = new Date().getFullYear();
document.getElementById("year").innerHTML = new Date().getFullYear();

// progress bar

const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;
var inputFields = formSteps[formStepsNum].getElementsByTagName("input");
var inputGroups = formSteps[formStepsNum].getElementsByTagName("div");

var fnameisInvalid = false;

const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

var fields = document.querySelectorAll(".signup-form input[type=text]");
var dateFields = document.querySelectorAll(".signup-form input[type=date]");
var mailFields = document.querySelectorAll(".signup-form input[type=email]");
var passwordFields = document.querySelectorAll(
  ".signup-form input[type=password]"
);
// for first name
var fnameHasSpecialChars = false;
var fnameHasNumber = false;
var fnameIsEmpty = false;
var fnameError = document.getElementById("fname-error");
var fnameErrorMessage;
const emptyFirstName = document.getElementById("empty-input-group-error1");

fields[0].addEventListener("input", function () {
  emptyFirstName.style.display = "none";
  if (/\d/.test(fields[0].value || specialChars.test(fields[0].value))) {
    fnameHasNumber = true;
  } else {
    fnameHasNumber = false;
  }

  if (specialChars.test(fields[0].value)) {
    fnameHasSpecialChars = true;
  } else {
    fnameHasSpecialChars = false;
  }

  if (fields[0].value == "") {
    fnameIsEmpty = true;
  } else {
    fnameIsEmpty = false;
  }

  if (
    fnameHasSpecialChars === true ||
    fnameIsEmpty == true ||
    fnameHasNumber == true
  ) {
    if (fnameHasNumber) {
      fnameError.style.display = "block";
      fnameErrorMessage = "A Name Cannot contain Numbers";
      fnameError.innerHTML = fnameErrorMessage;
    } else if (fnameIsEmpty) {
      fnameError.style.display = "block";
      fnameErrorMessage = "A Name Cannot be blank";
      fnameError.innerHTML = fnameErrorMessage;
    } else if (fnameHasSpecialChars) {
      fnameError.style.display = "block";
      fnameErrorMessage = "A Name Can Only Contain Letter";
      fnameError.innerHTML = fnameErrorMessage;
    }

    fnameisInvalid = true;
    fields[0].parentElement.classList.remove("valid-input-group");
    fields[0].parentElement.classList.add("invalid-input-group");
  } else {
    fnameisInvalid = false;
    fnameError.style.display = "none";
    fields[0].parentElement.classList.remove("invalid-input-group");
    fields[0].parentElement.classList.add("valid-input-group");
  }
});

// for last name
var lnameIsInvalid = false;

var lnameHasSpecialChars = false;
var lnameHasNumber = false;
var lnameIsEmpty = false;

var lnameError = document.getElementById("lname-error");
var lnameErrorMessage;
const emptyLastName = document.getElementById("empty-input-group-error2");

fields[1].addEventListener("input", function () {
  emptyLastName.style.display = "none";
  if (/\d/.test(fields[1].value || specialChars.test(fields[1].value))) {
    lnameHasNumber = true;
  } else {
    lnameHasNumber = false;
  }

  if (specialChars.test(fields[1].value)) {
    lnameHasSpecialChars = true;
  } else {
    lnameHasSpecialChars = false;
  }

  if (fields[1].value == "") {
    lnameIsEmpty = true;
  } else {
    lnameIsEmpty = false;
  }

  if (
    lnameHasSpecialChars === true ||
    lnameIsEmpty == true ||
    lnameHasNumber == true
  ) {
    if (lnameHasNumber) {
      lnameError.style.display = "block";
      lnameErrorMessage = "A Name Cannot contain Numbers";
      lnameError.innerHTML = lnameErrorMessage;
    } else if (lnameIsEmpty) {
      lnameError.style.display = "block";
      lnameErrorMessage = "A Name Cannot be blank";
      lnameError.innerHTML = lnameErrorMessage;
    } else if (lnameHasSpecialChars) {
      lnameError.style.display = "block";
      lnameErrorMessage = "A Name Can Only Contain Letter";
      lnameError.innerHTML = lnameErrorMessage;
    }

    lnameIsInvalid = true;
    fields[1].parentElement.classList.remove("valid-input-group");
    fields[1].parentElement.classList.add("invalid-input-group");
  } else {
    lnameError.style.display = "none";
    lnameIsInvalid = false;
    fields[1].parentElement.classList.remove("invalid-input-group");
    fields[1].parentElement.classList.add("valid-input-group");
  }
});

// for id

var idIsInvalid = false;
var idHasNumber = false;
var idHasSpecialChars = false;
var idHasEight = false;
var idIsEmpty = false;

var idError = document.getElementById("id-error");
var idErrorMessage;

const emptyId = document.getElementById("empty-input-group-error3");

fields[2].addEventListener("input", function () {
  emptyId.style.display = "none";
  if (/\d/.test(fields[2].value || specialChars.test(fields[2].value))) {
    idHasNumber = true;
  } else {
    idHasNumber = false;
  }

  if (specialChars.test(fields[2].value)) {
    idHasSpecialChars = true;
  } else {
    idHasSpecialChars = false;
  }

  if (fields[2].value == "") {
    idIsEmpty = true;
  } else {
    idIsEmpty = false;
  }

  if (fields[2].value.length == 8) {
    idHasEight = true;
  } else {
    idHasEight = false;
  }

  if (
    idHasSpecialChars === true ||
    idIsEmpty == true ||
    idHasEight == false ||
    idHasNumber == false
  ) {
    if (!idHasNumber) {
      idError.style.display = "block";
      idErrorMessage = "ID Must Have At Least a Number";
      idError.innerHTML = idErrorMessage;
    }

    if (!idHasEight) {
      idError.style.display = "block";
      idErrorMessage = "ID must have eight characters";
      idError.innerHTML = idErrorMessage;
    }

    idIsInvalid = true;
    fields[2].parentElement.classList.remove("valid-input-group");
    fields[2].parentElement.classList.add("invalid-input-group");
  } else {
    idError.style.display = "none";
    idIsInvalid = false;
    fields[2].parentElement.classList.remove("invalid-input-group");
    fields[2].parentElement.classList.add("valid-input-group");
  }
});

// for date
const emptyDate = document.getElementById("empty-input-group-error4");

dateFields.forEach((dateField) => {
  dateField.addEventListener("change", () => {
    emptyDate.style.display = "none";
    if (
      dateField.value == "" ||
      dateField.value == null ||
      dateField.value.length == 0
    ) {
      dateField.parentElement.classList.remove("valid-input-group");
      dateField.parentElement.classList.add("invalid-input-group");
    } else {
      dateField.parentElement.classList.remove("invalid-input-group");
      dateField.parentElement.classList.add("valid-input-group");
    }
  });
});

// for location
var locationIsInvalid = false;

var locationHasAnumber = false;

var locationSpecialChars = false;

var lnameIsEmpty = false;

var locationError = document.getElementById("location-error");
var locationErrorMessage;

const emptyLocation = document.getElementById("empty-input-group-error5");

fields[3].addEventListener("input", function () {
  emptyLocation.style.display = "none";

  if (/\d/.test(fields[3].value || specialChars.test(fields[3].value))) {
    locationHasAnumber = true;
  } else {
    locationHasAnumber = false;
  }

  if (specialChars.test(fields[3].value)) {
    locationSpecialChars = true;
  } else {
    locationSpecialChars = false;
  }

  if (fields[3].value == "") {
    lnameIsEmpty = true;
  } else {
    lnameIsEmpty = false;
  }

  if (
    locationSpecialChars === true ||
    lnameIsEmpty == true ||
    locationHasAnumber == true
  ) {
    if (locationHasAnumber) {
      locationError.style.display = "block";
      locationErrorMessage = "Location Name Cannot Contain Numbers";
      locationError.innerHTML = locationErrorMessage;
    } else if (locationSpecialChars) {
      locationError.style.display = "block";
      locationErrorMessage = "Location Name Can Only Contain Letters";
      locationError.innerHTML = locationErrorMessage;
    } else if (lnameIsEmpty) {
      locationError.style.display = "block";
      locationErrorMessage = "Location Name Cannot Be Blank";
      locationError.innerHTML = locationErrorMessage;
    }

    locationIsInvalid = true;
    fields[3].parentElement.classList.remove("valid-input-group");
    fields[3].parentElement.classList.add("invalid-input-group");
  } else {
    locationError.style.display = "none";
    locationIsInvalid = false;
    fields[3].parentElement.classList.remove("invalid-input-group");
    fields[3].parentElement.classList.add("valid-input-group");
  }
});

for (var i = 0; i < fields.length; i++) {
  fields[i].addEventListener("input", () => {});
}

// for number
var phoneIsEmpty = true;
var phoneIsInvalid = true;
var phoneHasTen = false;
const phoneInput = document.getElementById("phone-number");

const emptyPhone = document.getElementById("empty-input-group-error7");
var phoneErrorMessage;
var phoneError = document.getElementById("phone-error");

phoneInput.addEventListener("input", () => {
  emptyPhone.style.display = "none";
  if (phoneInput.value == "") {
    phoneIsEmpty = true;
  } else {
    phoneIsEmpty = false;
  }

  if (phoneInput.value.length == 10) {
    phoneHasTen = true;
  } else {
    phoneHasTen = false;
  }

  if (phoneIsEmpty == true || phoneHasTen == false) {
    if (!phoneHasTen) {
      phoneError.style.display = "block";
      phoneErrorMessage = "Phone Can Only Have 10 Numbers";
      phoneError.innerHTML = phoneErrorMessage;
    } else if (phoneIsEmpty) {
      phoneError.style.display = "block";
      phoneErrorMessage = "Phone Cannot Be Blank";
      phoneError.innerHTML = phoneErrorMessage;
    }
    phoneIsInvalid = true;
    phoneInput.parentElement.classList.remove("valid-input-group");
    phoneInput.parentElement.classList.add("invalid-input-group");
  } else {
    phoneError.style.display = "none";
    phoneIsInvalid = false;
    phoneInput.parentElement.classList.remove("invalid-input-group");
    phoneInput.parentElement.classList.add("valid-input-group");
  }
});

// for school name
var snameIsInvalid = false;

var snameHasSpecialChars = false;
var snameHasNumber = false;
var snameIsEmpty = false;

const emptySchoolName = document.getElementById("empty-input-group-error6");
var snameErrorMessage;
var snameError = document.getElementById("school-error");

fields[4].addEventListener("input", function () {
  emptySchoolName.style.display = "none";
  if (/\d/.test(fields[4].value || specialChars.test(fields[4].value))) {
    snameHasNumber = true;
  } else {
    snameHasNumber = false;
  }

  if (specialChars.test(fields[4].value)) {
    snameHasSpecialChars = true;
  } else {
    snameHasSpecialChars = false;
  }

  if (fields[4].value == "") {
    snameIsEmpty = true;
  } else {
    snameIsEmpty = false;
  }

  if (
    snameHasSpecialChars === true ||
    snameIsEmpty == true ||
    snameHasNumber == true
  ) {
    if (snameHasNumber) {
      snameError.style.display = "block";
      snameErrorMessage = "School Name Cannot Contain Numbers";
      snameError.innerHTML = snameErrorMessage;
    } else if (snameHasSpecialChars) {
      snameError.style.display = "block";
      snameErrorMessage = "School Name Can Only Contain Letters";
      snameError.innerHTML = snameErrorMessage;
    } else if (snameIsEmpty) {
      snameError.style.display = "block";
      snameErrorMessage = "School Name Cannot Be Blank";
      snameError.innerHTML = snameErrorMessage;
    }

    snameIsInvalid = true;
    fields[4].parentElement.classList.remove("valid-input-group");
    fields[4].parentElement.classList.add("invalid-input-group");
  } else {
    snameError.style.display = "none";
    snameIsInvalid = false;
    fields[4].parentElement.classList.remove("invalid-input-group");
    fields[4].parentElement.classList.add("valid-input-group");
  }
});
// for email
var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

var emailInValid = false;

const emptyEmail = document.getElementById("empty-input-group-error8");
var emailErrorMessage;
var emailError = document.getElementById("email-error");

mailFields.forEach((mailField) => {
  mailField.addEventListener("input", () => {
    emptyEmail.style.display = "none";
    if (mailField.value.match(mailformat)) {
      emailError.style.display = "none";
      emailInValid = false;
      mailField.parentElement.classList.remove("invalid-input-group");
      mailField.parentElement.classList.add("valid-input-group");
    } else {
      emailError.style.display = "block";
      emailErrorMessage = "Not A Valid Email";
      emailError.innerHTML = emailErrorMessage;

      emailInValid = true;
      mailField.parentElement.classList.remove("valid-input-group");
      mailField.parentElement.classList.add("invalid-input-group");
    }
  });
});

mailFields.forEach((mailField) => {
  mailField.addEventListener("blur", () => {
    if (mailField.value.match(mailformat)) {
      mailField.style.color = "#373737";
    } else {
      mailField.value = "none";
      mailField.style.color = "#fff";
    }

    if (mailField.value == "none") {
      emailError.style.display = "none";
    }
  });
});

mailFields.forEach((mailField) => {
  mailField.addEventListener("focus", () => {
    mailField.style.color = "#373737";
    mailField.parentElement.classList.remove("invalid-input-group");
    mailField.parentElement.classList.remove("valid-input-group");
  });
});

mailFields.forEach((mailField) => {
  mailField.addEventListener("change", () => {
    if (mailField.value == "") {
      mailField.value = "none";
      emailInValid = false;
      mailField.parentElement.classList.remove("invalid-input-group");
      mailField.parentElement.classList.remove("valid-input-group");
    }
  });
});

// password

var password1ErrorMessage;
var password2ErrorMessage;

var passwordInvalid = false;
var passwordInvalid2 = false;

var password1Error = document.getElementById("password1-error");
var password2Error = document.getElementById("password2-error");

for (var i = 0; i < passwordFields.length; i++) {
  passwordFields[0].addEventListener("input", () => {
    if (passwordFields[0].value.length >= 6) {
      password1Error.style.display = "none";
      passwordInvalid = false;
      passwordFields[0].parentElement.classList.remove("invalid-input-group");
      passwordFields[0].parentElement.classList.add("valid-input-group");
    } else {
      password1Error.style.display = "block";
      password1ErrorMessage = "Password Must Have At Least 6 Characters";
      password1Error.innerHTML = password1ErrorMessage;
      emailInValid = true;
      passwordFields[0].parentElement.classList.remove("valid-input-group");
      passwordFields[0].parentElement.classList.add("invalid-input-group");
    }
  });

  passwordFields[1].addEventListener("input", () => {
    if (passwordFields[0].value == passwordFields[1].value) {
      password2Error.style.display = "none";
      passwordInvalid2 = false;
      passwordFields[1].parentElement.classList.remove("invalid-input-group");
      passwordFields[1].parentElement.classList.add("valid-input-group");
    } else {
      password2Error.style.display = "block";
      password2ErrorMessage =
        "Password Must Be The Same As The Previous Password";
      password2Error.innerHTML = password2ErrorMessage;
      passwordInvalid2 = true;
      passwordFields[1].parentElement.classList.remove("valid-input-group");
      passwordFields[1].parentElement.classList.add("invalid-input-group");
    }
  });
}

const proceedError = document.querySelector(".proceed-error");

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    inputFields = formSteps[formStepsNum].getElementsByTagName("input");

    var isEmpty = false;

    for (var i = 0; i < inputFields.length; i++) {
      if (
        inputFields[i].value == "" ||
        inputFields[i].value == null ||
        inputFields[i].value.length == 0
      ) {
        isEmpty = true;
        inputFields[i].parentElement.classList.remove("valid-input-group");
        inputFields[i].parentElement.classList.add("invalid-input-group");
      }
    }

    if (
      isEmpty === false &&
      fnameisInvalid === false &&
      lnameIsInvalid === false &&
      idIsInvalid === false &&
      locationIsInvalid === false &&
      snameIsInvalid == false
    ) {
      proceedError.style.display = "none";
      formStepsNum++;
      updateFormSteps();
      updateProgressbar();
    } else {
      proceedError.style.display = "block";
    }
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
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}
// school checkboxes
const yesCheck = document.getElementById("yes");
const schoolName = document.getElementById("school_name");
const noCheck = document.getElementById("no");
function checkboxChange_Sc(checkboxType) {
  var checkboxName = document.getElementsByName(checkboxType.name);
  var checked = document.getElementById(checkboxType.id);

  if (yesCheck.checked) {
    schoolName.readOnly = false;
    schoolName.placeholder = "Enter School Name";
    schoolName.value = "";
  } else {
    fields[4].parentElement.classList.remove("valid-input-group");
    fields[4].parentElement.classList.remove("invalid-input-group");
    schoolName.readOnly = true;
    schoolName.value = "none";
  }
  if (noCheck.checked) {
    fields[4].parentElement.classList.remove("valid-input-group");
    fields[4].parentElement.classList.remove("invalid-input-group");
    schoolName.readOnly = true;
    schoolName.value = "none";
  }
  if (checked.checked) {
    for (var i = 0; i < checkboxName.length; i++) {
      if (!checkboxName[i].checked) {
        checkboxName[i].disabled = true;
      } else {
        checkboxName[i].disabled = false;
      }
    }
  } else {
    for (var i = 0; i < checkboxName.length; i++) {
      checkboxName[i].disabled = false;
    }
  }
}

// help check boxes
function checkboxChange_help(checkboxType) {
  var checkboxName = document.getElementsByName(checkboxType.name);
  var checked = document.getElementById(checkboxType.id);

  if (checked.checked) {
    for (var i = 0; i < checkboxName.length; i++) {
      if (!checkboxName[i].checked) {
        checkboxName[i].disabled = true;
      } else {
        checkboxName[i].disabled = false;
      }
    }
  } else {
    for (var i = 0; i < checkboxName.length; i++) {
      checkboxName[i].disabled = false;
    }
  }
}

// level selector

$(".custom-select").each(function () {
  var classes = $(this).attr("class"),
    id = $(this).attr("id"),
    name = $(this).attr("name");
  var template = '<div class="' + classes + '">';
  template +=
    '<span class="custom-select-trigger">' +
    $(this).attr("placeholder") +
    "</span>";
  template += '<div class="custom-options">';
  $(this)
    .find("option")
    .each(function () {
      template +=
        '<span class="custom-option ' +
        $(this).attr("class") +
        '" data-value="' +
        $(this).attr("value") +
        '">' +
        $(this).html() +
        "</span>";
    });
  template += "</div></div>";

  $(this).wrap('<div class="custom-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});
$(".custom-option:first-of-type").hover(
  function () {
    $(this).parents(".custom-options").addClass("option-hover");
  },
  function () {
    $(this).parents(".custom-options").removeClass("option-hover");
  }
);
$(".custom-select-trigger").on("click", function () {
  $("html").one("click", function () {
    $(".custom-select").removeClass("opened");
  });
  $(this).parents(".custom-select").toggleClass("opened");
  event.stopPropagation();
});
$(".custom-option").on("click", function () {
  $(this)
    .parents(".custom-select-wrapper")
    .find("select")
    .val($(this).data("value"));
  $(this)
    .parents(".custom-options")
    .find(".custom-option")
    .removeClass("selection");
  $(this).addClass("selection");
  $(this).parents(".custom-select").removeClass("opened");
  $(this)
    .parents(".custom-select")
    .find(".custom-select-trigger")
    .text($(this).text());
});

const signUp = document.getElementById("signup");
const login = document.getElementById("login");
const loginLink = document.getElementById("loginlink");
const signupLink = document.getElementById("signuplink");

function switchSignUp() {
  signupLink.style.display = "none";
  login.classList.remove("form-active");
  signUp.classList.add("form-active");
  login.style.display = "none";
  loginLink.style.display = "flex";
  endUserAgreement.style.display = "none";
  closeLoginHelp();
}

function switchLogin() {
   endUserAgreement.style.display = "none";
  signupLink.style.display = "flex";
  signUp.classList.remove("form-active");
  login.classList.add("form-active");
  login.style.display = "flex";
  loginLink.style.display = "none";
  forgetPasswordForms.style.display = "none";
}


const endUserAgreement = document.querySelector(".enduser-agreement");

function userAgreement() {
  signUp.classList.remove("form-active");
  signupLink.style.display = "none";
  endUserAgreement.style.display = "flex"
  login.classList.remove("form-active");
  login.style.display = "none";
  loginLink.style.display = "flex";
}

function closeuserAgreement() { 
  switchLogin();
}

const forgetPasswordForms = document.querySelector(".forget-password");

function forgetPassword() {
  signupLink.style.display = "none";
  signUp.classList.remove("form-active");
  login.classList.remove("form-active");
  login.style.display = "none";
  loginLink.style.display = "flex";
  closeLoginHelp();
  forgetPasswordForms.style.display = "flex"
}

//  forget password

var fphoneIsEmpty = true;
var fphoneHasTen = false;
const fphoneInput = document.getElementById("forget-password");
var fphoneIsInvalid = false;

var fphoneErrorMessage;
var fphoneError = document.getElementById("forget-phone-error");

fphoneInput.addEventListener("input", () => {
  if (fphoneInput.value == "") {
    fphoneIsEmpty = true;
  } else {
    fphoneIsEmpty = false;
  }

  if (fphoneInput.value.length == 10) {
    fphoneHasTen = true;
  } else {
    fphoneHasTen = false;
  }

  if (fphoneIsEmpty == true || fphoneHasTen == false) {
    if (!fphoneHasTen) {
      fphoneError.style.display = "block";
      fphoneErrorMessage = "Phone Can Only Have 10 Numbers";
      fphoneError.innerHTML = fphoneErrorMessage;
    } else if (fphoneIsEmpty) {
      fphoneError.style.display = "block";
      fphoneErrorMessage = "Phone Cannot Be Blank";
      fphoneError.innerHTML = fphoneErrorMessage;
    }
    fphoneIsInvalid = true;
    fphoneInput.parentElement.classList.remove("valid-input-group");
    fphoneInput.parentElement.classList.add("invalid-input-group");
  } else {
    fphoneError.style.display = "none";
    fphoneIsInvalid = false;
    fphoneInput.parentElement.classList.remove("invalid-input-group");
    fphoneInput.parentElement.classList.add("valid-input-group");
  }
});

var recoveryCode;
const recoveryPhase1 = document.getElementById("forget-password-p1");
const p1Submit = document.getElementById("p1submit");
const recoveryPhase2 = document.getElementById("forget-password-p2");
const phase2Input = document.getElementById("codeEntry");
const p2Submit = document.getElementById("p2submit");
const resend = document.getElementById("resend-code");
const recoveryPhase3 = document.getElementById("forget-password-p3");
const p3Submit = document.getElementById("p3submit");


p1Submit.addEventListener("click", () => {
  if (fphoneIsInvalid == false && fphoneInput.value.length == 10) {
   recoveryPhase1.classList.remove("active-phase");
    recoveryPhase1.classList.add("inactive-phase");
    recoveryPhase2.classList.add("active-phase");
  } else {
    fphoneInput.parentElement.classList.remove("valid-input-group");
    fphoneInput.parentElement.classList.add("invalid-input-group");
  }
})



function createRandomCode() {
  console.log((recoveryCode = Math.floor(100000 + Math.random() * 900000)));
}

createRandomCode();

p2Submit.addEventListener("click", () => {
  if (recoveryCode == phase2Input.value) {
    phase2Input.parentElement.classList.remove("invalid-input-group");
    phase2Input.parentElement.classList.remove("valid-input-group");
    recoveryPhase2.classList.remove("active-phase");
    recoveryPhase2.classList.add("inactive-phase");
    recoveryPhase3.classList.remove("inactive-phase");
    recoveryPhase3.classList.add("active-phase");
  } else {
    phase2Input.parentElement.classList.add("invalid-input-group");
  }
});

resend.addEventListener("click", () => {
  recoveryPhase2.classList.remove("active-phase");
  recoveryPhase2.classList.add("inactive-phase");
  recoveryPhase1.classList.remove("inactive-phase");
  recoveryPhase1.classList.add("active-phase");
})

// for login help
const loginhelpForm = document.querySelector(".login-error");

function openLoginHelp() {
  loginhelpForm.style.display = "flex"
}


function closeLoginHelp() {
  loginhelpForm.style.display = "none";
}

