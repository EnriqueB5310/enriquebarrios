document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    if (!firstName || !lastName || !email || !password) {
     result('All fields are required.', 'danger');
      return;
    }
  
    if (!/(?=.*[!@#$%^&*+`~'=?\|\]\[\(\)\->/])/.test(password)) {
      result('Password must contain at least one special character.', 'try again');
      return;
    }
  
    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password.replace(/./g, '*')
    };
  
    result('Registration successful', 'success', user);
  });
  
  function result(message, type, user = null) {
    const resultContainer = document.getElementById("loginContainer");
  
    
    resultContainer.innerHTML = '';
  
    const resultDiv = document.createElement('div');
    resultDiv.classList.add('alert', `alert-${type}`);
    resultDiv.setAttribute('role', 'alert');
    resultDiv.innerText = message;
  
    resultContainer.appendChild(resultDiv);
  
    if (user) {
      const userInfo = document.createElement('div');
      userInfo.innerHTML = `
        <p>First Name: ${user.firstName}</p>
        <p>Last Name: ${user.lastName}</p>
        <p>Email: ${user.email}</p>
        <p>Password: ${user.password}</p>
      `;
      resultContainer.appendChild(userInfo);
    }
  }
  
  