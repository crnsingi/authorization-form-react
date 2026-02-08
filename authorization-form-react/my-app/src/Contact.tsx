import React, { useState } from 'react';

const Contact: React.FC = () => {
  const password = 'Cesar'; // case-sensitive
  const [authorized, setAuthorized] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input =
      e.currentTarget.querySelector<HTMLInputElement>('#password');
    if (!input) return;

    if (input.value === password) {
      setAuthorized(true);
      setMessage('✅ Success! You have entered.');
    } else {
      setAuthorized(false);
      setMessage('❌ Wrong password, try again.');
    }

    input.value = '';
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-950 px-4">
      <div className="w-full max-w-sm rounded-2xl bg-blue-900 p-8 shadow-2xl">
        <h1 className="mb-6 text-center text-2xl font-semibold text-white">
          {authorized ? 'Contact Details' : 'Secure Access'}
        </h1>

        {!authorized ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="password"
                className="mb-1 block text-sm font-medium text-blue-200 text-center"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="mx-auto block w-48 rounded-lg border border-blue-700 bg-blue-800 px-3 py-2
                           text-center text-sm text-white placeholder-blue-400
                           focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/40 transition"
              />
            </div>

            {message && (
              <p
                className={`text-sm font-medium text-center ${
                  message.includes('Success')
                    ? 'text-green-400'
                    : 'text-red-400'
                }`}
              >
                {message}
              </p>
            )}

            <button
              type="submit"
              className="w-full rounded-lg bg-indigo-600 py-3 font-semibold text-white
                         hover:bg-indigo-700 active:scale-[0.98] transition"
            >
              Unlock
            </button>
          </form>
        ) : (
          <div className="text-center">
            <ul className="space-y-3">
              <li className="rounded-lg bg-blue-800 py-3 text-blue-100">
                📧 cesarnsingi@hotmail.com
              </li>
              <li className="rounded-lg bg-blue-800 py-3 text-blue-100">
                📞 +244 923 XXX XXX
              </li>
            </ul>

            <p className="mt-4 text-green-400 font-medium">
              {message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
