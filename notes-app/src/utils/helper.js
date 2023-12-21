function generateId() {
  return +new Date();
}

function generateDate() {
  const date = +new Date();
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  return new Date(date).toLocaleDateString("en-GB", options);
}

export { generateId, generateDate };
