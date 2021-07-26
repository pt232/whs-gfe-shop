const loginForm = document.querySelector("#loginForm");
const loginEmail = document.querySelector("#loginEmail");
const loginPassword = document.querySelector("#loginPassword");

loginForm.addEventListener("submit", handleSubmit);

async function handleSubmit(e) {
  e.preventDefault();

  clearErrorMessages();

  if (!validateEmail(loginEmail.value)) {
    loginEmail.classList.add("input--error");
    addErrorMessage("Please enter a valid email.");
    return;
  }

  const res = await fetchLogin(loginEmail.value, loginPassword.value);

  if (!res.success) {
    loginEmail.classList.add("input--error");
    loginPassword.classList.add("input--error");
    addErrorMessage(res.error);
  } else {
    localStorage.setItem("token", res.token);
    window.location.href = "create-look-book.html";
  }
}

async function fetchLogin(email, password) {
  try {
    const res = await fetch("http://localhost:5000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    return await res.json();
  } catch (error) {
    window.location.href = "index.html";
  }
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function addErrorMessage(message) {
  const error = document.createElement("div");
  const errorText = document.createTextNode(message);
  error.appendChild(errorText);
  error.classList.add("error");
  loginForm.insertAdjacentElement("beforebegin", error);
  loginForm.style.marginTop = "2.5rem";
}

function clearErrorMessages() {
  loginEmail.classList.remove("input--error");
  loginPassword.classList.remove("input--error");

  const errors = document.querySelectorAll(".error");
  for (let i = 0; i < errors.length; i++) {
    errors[i].parentNode.removeChild(errors[i]);
  }
}
