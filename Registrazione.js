const localStorageKey = "notepad-memory";

const textAreaReference = document.getElementById("text-content");

const saveButton = document.getElementById("save-button");
const resetButton = document.getElementById("reset-button");

const save = () => {
  const content = textAreaReference.value;

  localStorage.setItem(localStorageKey, content);
  alert("Nome salvato!");
};

const reset = () => {
  if (window.confirm("ATTENZIONE! Resettare la cronologia nomi?")) {
    console.log("Eimina Cronologia");

    textAreaReference.value = "";

    localStorage.removeItem(localStorageKey);
  }
};
saveButton.addEventListener("click", save);
resetButton.addEventListener("click", reset);
