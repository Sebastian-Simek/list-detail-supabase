const SUPABASE_URL = 'https://aqordevvnruktzytnrtm.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxb3JkZXZ2bnJ1a3R6eXRucnRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyOTc4ODUsImV4cCI6MTk2Nzg3Mzg4NX0.paVZTcltRhN61IqrwWNRAkNdX3pf7FOsHUYHh2DnJ_8';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getCats() {
    const response = await client.from('cats').select('*');
    return response.data;
}

export async function getCat(id) {
    const response = await client.from('cats').select('*').match({ id: id }).single();
    return response.data;
}

