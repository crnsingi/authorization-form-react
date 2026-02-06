import React, { useState } from 'react';

const Contact: React.FC = () => {
  const password: string = 'cesar';
  const [authorized, setAuthorized] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const input = form.querySelector<HTMLInputElement>(
      'input[type="password"]'
    );

    const enteredPassword = input?.value ?? '';
    const auth = enteredPassword === password;
    setAuthorized(auth);
  };

  const login = (
    <form action="#" onSubmit={handleSubmit}>
      <input type="password" />
      <input type="submit" />
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
