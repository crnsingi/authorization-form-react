import React, { useState } from 'react';

const Contact: React.FC = () => {
  const password = 'cesar';
  const [authorized, setAuthorized] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const input = form.querySelector<HTMLInputElement>('#password');

    const enteredPassword = input?.value ?? '';
    setAuthorized(enteredPassword === password);
  };

  const login = (
    <form onSubmit={handleSubmit}>
      <label htmlFor="password">Password</label>
      <input id="password" type="password" />

      <button type="submit">Submit</button>
    </form>
  );

  const contactInfo = (
    <ul>
      <li>client@hotmail.com</li>
      <li>666.666.6666</li>
    </ul>
  );

  return (
    <div id="authorization">
      <h1>{authorized ? 'Contact' : 'Enter the Password'}</h1>
      {authorized ? contactInfo : login}
    </div>
  );
};

export default Contact;
