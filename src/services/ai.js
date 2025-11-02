const API_KEY = process.env.OPENAI_API_KEY;
const API_URL = 'https://api.openai.com/v1/chat/completions';

export const getRecommendation = async (weather, preferences) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{
          role: 'user',
          content: `Given the weather conditions: ${JSON.stringify(weather)} 
                   and user preferences: ${JSON.stringify(preferences)}, 
                   suggest a perfume that would be suitable.`
        }],
      }),
    });

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    throw new Error('Error getting AI recommendation: ' + error.message);
  }
};