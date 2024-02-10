const { axiosConfigInstance } = require('../config/axiosConfig');

/**
 * This is a interface between ollama and slack
 * @param {'hi'} prompt A prompt for the AI chatbot
 * @returns chatReply
 */
const chat = async (prompt) => {
  const { data } = await axiosConfigInstance.post('/', {
    model: 'llama2:chat',
    prompt: `reply pretending you are my girlfriend + ${prompt}`,
    stream: false,
    raw: false,
  });
  return data;
};

module.exports = { chat };
