import React, { useState } from 'react';

const Contact: React.FC = () => {
  const password: string = 'cesar';
  const [authorized, setAuthorized] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = e.currentTarget.querySelector<HTMLInputElement>('#password');
    setAuthorized(input?.value === password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 font-sans">
      <div className="bg-white p-8 rounded-2xl w-full max-w-sm text-center shadow-xl animate-fade">
        <h1 className="mb-6 text-2xl font-semibold text-gray-800">
          {authorized ? 'Contact' : 'Enter the Password'}
        </h1>

        {!authorized ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <label
              htmlFor="password"
              className="text-sm text-gray-600 text-left"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <button
              type="submit"
              className="p-3 rounded-xl bg-indigo-500 text-white font-semibold hover:bg-indigo-600 active:scale-95 transition"
            >
              Submit
            </button>
          </form>
        ) : (
          <ul className="flex flex-col gap-3 text-gray-700">
            <li>client@hotmail.com</li>
            <li>666.666.6666</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Contact;
