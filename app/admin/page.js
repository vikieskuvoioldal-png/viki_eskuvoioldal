// app/admin/page.js
import { createClient } from '@supabase/supabase-js';

async function RsvpAdminPage({ searchParams }) {
  const adminPassword = process.env.ADMIN_PASSWORD;
  
  if (searchParams.password !== adminPassword) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="p-8 bg-white shadow-md rounded-lg">
                <h1 className="text-2xl font-bold">Hozzáférés megtagadva</h1>
            </div>
        </div>
    );
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const { data: rsvps, error } = await supabase
    .from('rsvps')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return <p>Hiba a betöltés közben: {error.message}</p>;
  }

  const totalAttending = rsvps.filter(r => r.is_attending).reduce((sum, r) => sum + r.guest_count, 0);
  const totalNotAttending = rsvps.filter(r => !r.is_attending).length;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-serif mb-6">RSVP Visszajelzések</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="p-4 bg-emerald-100 rounded-lg">
            <p className="text-lg font-semibold text-emerald-800">Várható vendégek száma:</p>
            <p className="text-3xl font-bold text-emerald-900">{totalAttending}</p>
        </div>
        <div className="p-4 bg-rose-100 rounded-lg">
            <p className="text-lg font-semibold text-rose-800">Nem tudnak eljönni:</p>
            <p className="text-3xl font-bold text-rose-900">{totalNotAttending}</p>
        </div>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="px-6 py-4 font-semibold">Dátum</th>
              <th className="px-6 py-4 font-semibold">Részt vesz?</th>
              <th className="px-6 py-4 font-semibold">Nevek</th>
              <th className="px-6 py-4 font-semibold">Fő</th>
              <th className="px-6 py-4 font-semibold">Megjegyzés</th>
            </tr>
          </thead>
          <tbody>
            {rsvps.map((rsvp) => (
              <tr key={rsvp.id} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">{new Date(rsvp.created_at).toLocaleString('hu-HU')}</td>
                <td className="px-6 py-4">{rsvp.is_attending ? '✅ Igen' : '❌ Nem'}</td>
                {/* Itt történt a módosítás: rsvp.name */}
                <td className="px-6 py-4">{rsvp.name}</td>
                <td className="px-6 py-4">{rsvp.guest_count}</td>
                <td className="px-6 py-4">{rsvp.dietary_notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RsvpAdminPage;