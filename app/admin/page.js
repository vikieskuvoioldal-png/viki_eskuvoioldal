// app/admin/page.js
import { createClient } from '@supabase/supabase-js';
import { MessageSquare } from 'lucide-react';
import ImageManager from '../../components/ImageManager'; // ÚJ: A képkezelő importálása

async function RsvpAdminPage({ searchParams }) {
  const adminPassword = process.env.ADMIN_PASSWORD;
  
  if (searchParams.password !== adminPassword) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="p-8 bg-white shadow-md rounded-lg"><h1 className="text-2xl font-bold">Hozzáférés megtagadva</h1></div>
        </div>
    );
  }

  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  const { data: rsvps, error: rsvpsError } = await supabase.from('rsvps').select('*, guests(*)').order('created_at', { ascending: false });
  const { data: messages, error: messagesError } = await supabase.from('messages').select('*').order('created_at', { ascending: false });

  if (rsvpsError || messagesError) return <p>Hiba a betöltés közben.</p>;

  const allGuests = rsvps.flatMap(r => r.is_attending ? r.guests : []);
  const totalAttending = allGuests.length;
  const totalNotAttending = rsvps.filter(r => !r.is_attending).length;
  const totalTransfer = allGuests.filter(g => g.needs_transfer).length;
  const totalAccommodation = allGuests.filter(g => g.needs_accommodation).length;

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl font-serif mb-6">Admin Felület</h1>
      
      {/* Statisztika szekció */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="p-4 bg-emerald-100 rounded-lg"><p className="font-semibold text-emerald-800">Várható vendégek:</p><p className="text-3xl font-bold text-emerald-900">{totalAttending}</p></div>
        <div className="p-4 bg-rose-100 rounded-lg"><p className="font-semibold text-rose-800">Nem jön (csoport):</p><p className="text-3xl font-bold text-rose-900">{totalNotAttending}</p></div>
        <div className="p-4 bg-sky-100 rounded-lg"><p className="font-semibold text-sky-800">Transzfert kér:</p><p className="text-3xl font-bold text-sky-900">{totalTransfer}</p></div>
        <div className="p-4 bg-amber-100 rounded-lg"><p className="font-semibold text-amber-800">Szállást kér:</p><p className="text-3xl font-bold text-amber-900">{totalAccommodation}</p></div>
      </div>

      {/* ÚJ SZEKCIÓ: Galéria Kezelése */}
      <div className="mb-12">
        <ImageManager />
      </div>

      {/* RSVP táblázat */}
      <h2 className="text-2xl font-serif mt-8 mb-4">RSVP Részletes Lista</h2>
      <div className="overflow-x-auto bg-white rounded-lg shadow mb-12">
        <table className="min-w-full text-left text-sm whitespace-nowrap">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="px-6 py-4 font-semibold">Név</th>
              <th className="px-6 py-4 font-semibold text-center">Transzfert kér?</th>
              <th className="px-6 py-4 font-semibold text-center">Szállást kér?</th>
              <th className="px-6 py-4 font-semibold">Személyes megjegyzés</th>
              <th className="px-6 py-4 font-semibold">Visszajelzés ideje</th>
            </tr>
          </thead>
          <tbody>
            {rsvps.map((rsvp) => rsvp.is_attending ? (rsvp.guests.map(guest => (<tr key={guest.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium">{guest.name}</td>
                <td className="px-6 py-4 text-center">{guest.needs_transfer ? '✅' : '❌'}</td>
                <td className="px-6 py-4 text-center">{guest.needs_accommodation ? '✅' : '❌'}</td>
                <td className="px-6 py-4">{guest.notes || '-'}</td>
                <td className="px-6 py-4 text-gray-500">{new Date(rsvp.created_at).toLocaleString('hu-HU')}</td></tr>))) : (<tr key={rsvp.id} className="border-b bg-rose-50 hover:bg-rose-100">
                <td className="px-6 py-4 text-rose-700 italic" colSpan="4">{`Egy csoport jelezte, hogy nem tud eljönni.`}</td>
                <td className="px-6 py-4 text-gray-500">{new Date(rsvp.created_at).toLocaleString('hu-HU')}</td></tr>))}
            {allGuests.length === 0 && rsvps.filter(r => !r.is_attending).length === 0 && (<tr><td colSpan="5" className="text-center p-8 text-gray-500">Még nem érkezett visszajelzés.</td></tr>)}
          </tbody>
        </table>
      </div>

      {/* Beérkezett üzenetek */}
      <h2 className="text-2xl font-serif mt-8 mb-4">Beérkezett Üzenetek</h2>
      <div className="space-y-4">
        {messages.length > 0 ? messages.map(msg => (
          <div key={msg.id} className="p-4 bg-white rounded-lg shadow border-l-4 border-gray-200">
            <p className="text-gray-800">{msg.message}</p>
            <div className="flex justify-between items-center mt-2 pt-2 border-t">
              <p className="font-semibold text-gray-700">{msg.name}</p>
              <p className="text-xs text-gray-500">{new Date(msg.created_at).toLocaleString('hu-HU')}</p>
            </div>
          </div>
        )) : <p className="text-center p-8 text-gray-500 bg-white rounded-lg shadow">Még nem érkezett üzenet.</p>}
      </div>

    </div>
  );
}

export default RsvpAdminPage;