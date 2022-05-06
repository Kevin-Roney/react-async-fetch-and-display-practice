import { client } from './client.js';

export async function getBands() {
  const response = await client
    .from('bands')
    .select('*');

  return response.body;
}

export async function getInstruments() {
  const response = await client
    .from('instruments')
    .select('*');
  
  return response.body;
}