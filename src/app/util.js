export function extractInputValue(setState) {
  return (e) => {
    setState(e.target.value);
  };
}

export function submitForm(callback) {
  return (e) => {
    e.preventDefault();
    callback();
  };
}
