const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  const personInfo = {};
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Заповніть всі поля!");
  }
  personInfo.email = `${email.value}`;
  personInfo.password = `${password.value}`;
  console.log(personInfo);
  event.currentTarget.reset();
}

// function handleSubmit(event) {
//     event.preventDefault();
//     const {
//       elements: { email, password }
//     } = event.currentTarget;

//     if (email.value === "" || password.value === "") {
//       return alert("Заповніть всі поля!");
//     }

//     console.log(`Email: ${email.value}, Password: ${password.value}`);
//     event.currentTarget.reset();
//   }
