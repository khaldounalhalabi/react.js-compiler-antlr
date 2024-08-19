const globalStatusChange = new CustomEvent("state_changed");

window.addEventListener("popstate", function () {
  localStorage.clear();
});
window.addEventListener("beforeunload", function () {
  localStorage.clear();
});

function setState(key: string, value: any) {
  let storedValue;
  if (typeof value == "function") {
    storedValue = value(getState(key));
  } else {
    storedValue = value;
  }
  const stringValue = JSON.stringify(storedValue);
  localStorage.setItem(key, stringValue);
  const statusChange = new CustomEvent(`state_changed_${key}`);
  document.dispatchEvent(statusChange);
  document.dispatchEvent(globalStatusChange);
}

function setRef(key: string, value: any) {
  let storedValue;
  if (typeof value == "function") {
    storedValue = value(getState(key));
  } else {
    storedValue = value;
  }
  const stringValue = JSON.stringify(storedValue);
  localStorage.setItem(key, stringValue);
}

function getState(key: string) {
  const stringValue = localStorage.getItem(key);
  if (stringValue === null) {
    return null;
  }
  return JSON.parse(stringValue);
}
