import { client } from './client.js';

export async function getBands() {
  const response = await client
    .from('bands')
    .select('*');

  return response.body;
}