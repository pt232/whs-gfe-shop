const lbWrapper = document.querySelector("#lbWrapper");
const createLookForm = document.querySelector("#createLookForm");
const lbHeadline = document.querySelector("#lbHeadline");
const lbPrice = document.querySelector("#lbPrice");
const lbDescription = document.querySelector("#lbDescription");
const lbImageFile = document.querySelector("#lbImageFile");
const uploadedFile = document.querySelector("#uploadedFile");
const cb = document.querySelector("#cb");
let lookbookExists = false;
let file = null;
let fileToBase64 = "";

createLookForm.addEventListener("submit", handleSubmit);

lbImageFile.addEventListener("change", passFileData);

if (!localStorage.getItem("token")) {
  window.location.href = "sign-in.html";
}

passData();

async function handleSubmit(e) {
  e.preventDefault();

  clearErrorMessages();

  if (fileToBase64 === "") {
    addMessage("error", "Please add an image.", false);
    return;
  }

  const res = await fetchCreateLookbook();

  if (res.success) {
    let message = `You successfully ${
      lookbookExists ? "updated" : "created"
    } your own look book.`;
    addMessage("success", message, true);
    passData();
  }
}

async function passData() {
  const res = await fetchUserLookbook();

  if (res.success) {
    lookbookExists = true;
    lbHeadline.value = res.data.name;
    lbPrice.value = res.data.price;
    lbDescription.value = res.data.description;
    fileToBase64 = res.data.image;
    uploadedFile.innerText = res.data.imageName;
    cb.checked = res.data.publish;
  }
}

async function passFileData() {
  file = lbImageFile.files[0];
  uploadedFile.innerText = file.name;
  fileToBase64 = await toBase64(file);
}

async function fetchCreateLookbook() {
  try {
    const res = await fetch("http://localhost:5000/api/v1/lookbook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: localStorage.getItem("token"),
        title: lbHeadline.value,
        price: lbPrice.value,
        description: lbDescription.value,
        image: fileToBase64,
        imageName: uploadedFile.innerText,
        publish: cb.checked,
      }),
    });
    return await res.json();
  } catch (error) {
    addMessage("error", "Something went wrong.", false);
  }
}

async function fetchUserLookbook() {
  try {
    const res = await fetch(
      `http://localhost:5000/api/v1/lookbook/user?token=${localStorage.getItem(
        "token"
      )}`
    );
    return await res.json();
  } catch (error) {
    window.location.href = "index.html";
  }
}

function addMessage(type, message, temp) {
  const messageBox = document.createElement("div");
  const messageText = document.createTextNode(message);
  messageBox.appendChild(messageText);

  if (type === "error") messageBox.classList.add("error");
  else messageBox.classList.add("success");

  createLookForm.insertAdjacentElement("beforebegin", messageBox);
  createLookForm.style.marginTop = "2.5rem";

  if (temp) {
    setTimeout(() => {
      lbWrapper.removeChild(messageBox);
    }, 3000);
  }
}

function clearErrorMessages() {
  const errorMessages = document.querySelectorAll(".error");
  for (let i = 0; i < errorMessages.length; i++) {
    errorMessages[i].parentNode.removeChild(errorMessages[i]);
  }
}

function toBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}
