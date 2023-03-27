const form = document.querySelector(".login-form")
form.addEventListener("submit", handleSubmit);
console.dir(form.elements)
function handleSubmit(event) {
    event.preventDefault();
    const {
      elements: { email, password }
    } = event.currentTarget;
  

    if (email.value === "" || password.value === "") {
      return alert("Заповніть всі поля!");
    }
  
    console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
  }