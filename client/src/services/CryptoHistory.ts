export const fetchCryptoData = async (id: string, days = 7) => {
  try {
    const res = await fetch(`http://localhost:5000/${id}?days=${days}`);
    if (!res.ok) {
      throw new Error('Failed to load coin data');
    }
    return res.json(); // מחזיר את המבנה { detail, history }
    
  } catch (error) {
    throw new Error('Failed to load coin data');
  }
};