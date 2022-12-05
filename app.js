const form = document.querySelector(".form")
const email = document.querySelector(".email__input[type=email]")

form.addEventListener("submit", event => {
  event.preventDefault()

  let emailValue = email.value
  if (validateEmail(emailValue)) {
    form.classList.remove("error")
  } else {
    form.classList.add("error")
  }
})

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/
  return re.test(email)
}
