// next-auth.js
import { Credentials } from 'next-auth';

export default {
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        try {
          // Send the credentials to your CodeIgniter API for authentication
          const response = await fetch('http://localhost:8080/api/users/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
          });

          if (response.ok) {
            // Return the user data received from the API
            const user = await response.json();
            return Promise.resolve(user);
          } else {
            // Return null or reject with an error message
            return Promise.resolve(null);
          }
        } catch (error) {
          // Handle network or other errors
          return Promise.resolve(null);
        }
      },
    }),
  ],
  // Other configuration options
};
