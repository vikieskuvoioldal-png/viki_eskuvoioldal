// app/login/page.js
'use client';

import { useState } from 'react';
// Győződj meg róla, hogy az import a 'next/navigation'-ből történik!
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Lock } from 'lucide-react';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // Új állapot a folyamat jelzésére
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login gomb lenyomva!'); // DEBUG: Ellenőrizzük, elindul-e a funkció

    if (isSubmitting) return; // Ne engedje a többszöri küldést
    
    setIsSubmitting(true);
    setError('');

    if (!password) {
      setError('Kérjük, add meg a jelszót!');
      setIsSubmitting(false);
      return;
    }

    console.log('Átirányítás ide:', `/admin?password=${password}`); // DEBUG: Ellenőrizzük az URL-t

    // Átirányítás az admin oldalra
    router.push(`/admin?password=${password}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 font-body">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-lg"
      >
        <div className="text-center">
          <Lock className="mx-auto h-12 w-12 text-gray-400" />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Admin Bejelentkezés
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Kérjük, add meg a jelszót a visszajelzések megtekintéséhez.
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Jelszó
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <div>
            <button
              type="submit"
              disabled={isSubmitting} // Gomb letiltása küldés közben
              className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors disabled:bg-gray-400"
            >
              {isSubmitting ? 'Belépés...' : 'Belépés'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}