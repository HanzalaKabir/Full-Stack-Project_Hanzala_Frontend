export const validateEmail = (email) => {
  const regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/; //text@text.text
  return regex.test(email);
};
