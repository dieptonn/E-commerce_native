const loginService = (username, password) => {
    let data = {
      username: username,
      password: password
    };
  
    return fetch('http://127.0.0.1:8000/api/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  };
  
  export { loginService };
  