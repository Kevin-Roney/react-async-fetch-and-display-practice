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

export async function getCars() {
  const response = await client
    .from('cars')
    .select('*');
  
  return response.body;
}

export async function getCandies() {
  const response = await client
    .from('candies')
    .select('*');
  
  return response.body;
}