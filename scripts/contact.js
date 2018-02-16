// validate.js form validation

// create a validation object to match the input agaisnt
// where: new FormValidator(formName, fields, callback)

var contactForm = document.getElementById('contact'),
submit = document.getElementById('contact-submit');

var validate = new FormValidator('contact', [{

  name: 'name',
  rules: 'required|min_length[2]'
},  {

  name: 'email',
  rules: 'required|valid_email|max_length[60]'
},  {

  display: 'message',
  name: 'topic',
  rules: 'required|min_length[5]'

} ], function(errors, event){

  var errDisplay = document.getElementById('error-display');
  if (errors.length > 0) {

    var displayMessage = '';

    // iterate through the errors displaying each one on a newline

    for (var i = 0; i < errors.length; i++) {

      displayMessage = displayMessage + errors[i].message + '<br>'
    }

    errDisplay.innerHTML = displayMessage;
    if (contactForm.className.indexOf('error-active') < 0) {
      contactForm.className += ' error-active';
    }

  } else {

    event.preventDefault();
    var form = document.getElementById('contact-form');
    formSubmit(contactForm, errDisplay);
  }
});

function formSubmit(form, errorDisplay) {

  // POST data to formspree for mailing.
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://formspree.io/cugrotzke@gmail.com', true);
  xhr.setRequestHeader('accept', 'application/json');
  xhr.setRequestHeader('Content-Type', 'application/json');

  // xhr.onload is for readyState 4
  xhr.onload = function() {
    if (xhr.status != 200) {
      errorDisplay.innerHTML = 'There was an error processing the request.';
    } else {
      contactForm.className += ' email-success';
      disableForm(form);
    }
  }

  var data = {};
  for (var i = 0; i < form.length; i++) {
    var input = form[i];
    if (input.name) {
      data[input.name] = input.value;
    }
  }
  data = JSON.stringify(data);
  xhr.send(data);

}

// this function disables inputs (button is included)

function disableForm(form) {
  var elements = form.elements;
  for (var i = 0; i < elements.length; i++) {
    elements[i].readOnly = true;
  }
}
