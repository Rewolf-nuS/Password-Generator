let password_numeric = '1234567890';
let password_uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let password_lowercase = 'abcdefghijklmnopqrstuvwxyz';
let password_symbol = document.querySelector('#opt_sign-text');
let target = document.querySelector('.parts__input');

function generatePassword(length) {
  if(length > 20) {
    length = 20;
  }
  let password = '';
  let password_base = '';
  if (document.querySelector('#opt_num').checked) password_base += password_numeric;
  if (document.querySelector('#opt_upper').checked) password_base += password_uppercase;
  if (document.querySelector('#opt_lower').checked) password_base += password_lowercase;
  if (document.querySelector('#opt_sign').checked) password_base += password_symbol.value;
  for (let i = 0; i < length; i++) {
    password += password_base.charAt(Math.floor(Math.random() * password_base.length));
  }
  return password;
}

function setPassword() {
  let opt_length = document.querySelector('#opt_length').value;

  target.value = generatePassword(opt_length);
}

function savePassword() {
  target.select();
  document.execCommand('copy');

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: 'success',
    title: 'Save a clipboard.',
  });
}

document.querySelector('.parts__btn-create').addEventListener('click', setPassword);
document.querySelector('.parts__btn-copy').addEventListener('click', savePassword);
