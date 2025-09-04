// components/WeddingCountdown.js
'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart } from 'lucide-react'; // Szív ikon importálása

export default function WeddingCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // A te dátumodra és időpontodra cserélve (Ceremónia kezdete: 17:00)
    const weddingDate = new Date("2026-06-06T17:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Segédfüggvény a számok két számjegyűvé alakításához (pl. 9 -> 09)
  const formatNumber = (num) => num.toString().padStart(2, '0');

  const countdownItems = [
    { label: "Nap", value: timeLeft.days },
    { label: "Óra", value: timeLeft.hours },
    { label: "Perc", value: timeLeft.minutes },
    { label: "Másodperc", value: timeLeft.seconds },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      className="py-20 bg-gray-50 text-center"
    >
      <div className="container mx-auto px-4">
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
        >
            <Heart className="mx-auto text-pink-400 h-12 w-12 mb-4" />
            <h2 className="text-3xl md:text-4xl text-gray-700 font-serif mb-2">
              Visszaszámlálás a Nagy Napig
            </h2>
            <p className="text-gray-500 mb-10">
              Már alig várjuk, hogy Veletek ünnepelhessünk!
            </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-2xl mx-auto">
          {countdownItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="text-5xl md:text-6xl font-bold text-pink-500" style={{fontFamily: '"Great Vibes", cursive'}}>
                {formatNumber(item.value)}
              </div>
              <div className="text-sm text-gray-500 uppercase tracking-widest mt-2">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}