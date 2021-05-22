let password_numeric = '1234567890';
let password_uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let password_lowercase = 'abcdefghijklmnopqrstuvwxyz';
let password_symbol = '!"#$%&()=~|@[];:+-*<>?_>.,\'';

function genPassword(length) {
  let password = '';
  let password_base = '';
  if (document.getElementById('rule_numeric').checked) password_base += password_numeric;
  if (document.getElementById('rule_uppercase').checked) password_base += password_uppercase;
  if (document.getElementById('rule_lowercase').checked) password_base += password_lowercase;
  if (document.getElementById('rule_symbol').checked) password_base += password_symbol;
  for (let i = 0; i < length; i++) {
    password += password_base.charAt(Math.floor(Math.random() * password_base.length));
  }
  return password;
}

function setPassword() {
  let target = document.querySelector('.parts__form');
  let rule_length = document.getElementById('rule_length').value;

  target.value = genPassword(rule_length);
}

document.querySelector('.parts__btn').addEventListener('click', (e) => {
  e.preventDefault();
  setPassword();
});
