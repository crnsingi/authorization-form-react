import React, { useState, ChangeEvent, FormEvent } from 'react';

// Define a type for form state
interface FormState {
  password: string;
}

// Optional: type for contact info
interface ContactInfo {
  email: string;
  phone: string;
}

const contactDetails: ContactInfo[] = [
  { email: 'client@hotmail.com', phone: '666.666.6666' },
];

const Contact: React.FC = () => {
  const correctPassword = 'cesar';

  // State with explicit types
  const [authorized, setAuthorized] = useState<boolean>(false);
  const [form, setForm] = useState<FormState>({ password: '' });
  const [error, setError] = useState<string | null>(null);

  // Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.password === correctPassword) {
      setAuthorized(true);
      setError(null);
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <div id="authorization">
      <h1>{authorized ? 'Contact Info' : 'Enter Password'}</h1>

      {!authorized ? (
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
          {error && <p style={{ color: 'red', marginTop: '0.5rem' }}>{error}</p>}
        </form>
      ) : (
        <ul>
          {contactDetails.map((info, index) => (
            <li key={index}>
              {info.email} | {info.phone}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Contact;
