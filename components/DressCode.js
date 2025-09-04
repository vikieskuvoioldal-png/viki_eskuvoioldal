// components/DressCode.js
'use client';
import { motion } from 'framer-motion';
import { Shirt, Diamond } from 'lucide-react';

export default function DressCode() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800">Dress Code</h2>
          <p className="text-lg text-gray-600 mt-4">
            Kérünk Benneteket, hogy öltözéketekkel is emeljétek az este fényét!
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-10 p-8 border-2 border-dashed border-gray-300 rounded-xl"
        >
          <p className="text-xl font-semibold text-gray-700">A választott stílus: <span className="text-emerald-700">Garden Formal</span></p>
          <p className="mt-2 text-gray-600">Lágy, pasztell színekkel készüljetek egy elegáns kerti ünnepségre.</p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8 text-left">
            {/* Hölgyeknek */}
            <div className="flex items-start gap-4">
              <div className="mt-1 p-2 bg-rose-100 rounded-full">
                <Diamond className="text-rose-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Hölgyeknek</h3>
                <p className="text-gray-600">Elegáns maxi vagy midi ruha, finom anyagokból.</p>
              </div>
            </div>
            {/* Uraknak */}
            <div className="flex items-start gap-4">
              <div className="mt-1 p-2 bg-sky-100 rounded-full">
                <Shirt className="text-sky-500" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Uraknak</h3>
                <p className="text-gray-600">Smart casual öltözet: zakó, ing, elegáns nadrág. A nyakkendő nem kötelező.</p>
              </div>
            </div>
          </div>

          {/* Színpaletta és inspiráció */}
          <div className="mt-10">
              <h4 className="font-semibold text-gray-700">Inspiráció</h4>
              <p className="text-sm text-gray-500 mb-4">Kerülendő színek hölgyeknek: piros, fekete, fehér.</p>
              <div className="flex justify-center gap-3 flex-wrap">
                  {/* Itt a színeket a ti ízlésetek szerint módosíthatjátok */}
                  <div className="w-10 h-10 rounded-full bg-[#e6e0d4]"></div>
                  <div className="w-10 h-10 rounded-full bg-[#d4e6e1]"></div>
                  <div className="w-10 h-10 rounded-full bg-[#e1d4e6]"></div>
                  <div className="w-10 h-10 rounded-full bg-[#d4d4e6]"></div>
                  <div className="w-10 h-10 rounded-full bg-[#e6d4d4]"></div>
                  <div className="w-10 h-10 rounded-full bg-[#d4e0e6]"></div>
              </div>
              {/* Ide jöhet majd a link, ha van Pinterest táblátok vagy cikk */}
              {/* <a href="#" className="text-emerald-600 hover:underline mt-4 inline-block">További ötletek és inspirációk</a> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}