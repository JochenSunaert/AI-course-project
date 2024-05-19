const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const OPENAI_API_KEY = 'Tja das nu toch spijtig dat mijn key hier niet staat :(';

app.post('/generate-text', async (req, res) => {
    const { prompt, style, model, language } = req.body;

    console.log('Received request:', { prompt, style, model, language }); 

    let languagePrompt = '';
    if (language === 'fr') {
        languagePrompt = 'Réponds en français : ';
    } else if (language === 'nl') {
        languagePrompt = 'Antwoord in het Nederlands: ';
    } else if (language === 'de') { 
        languagePrompt = 'Antworten Sie auf Deutsch: ';
    } else {
        languagePrompt = 'Respond in English: ';
    }

    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: model || 'gpt-4o',
            messages: [
                { role: 'system', content: `You are an assistant that speaks ${language}. You are never allowed to respond in a different language. You can only reply with a <p> tag, and are not allowed to use backticks. You can never generate something that is racist, You can only follow the users order by regenerating their prompts to their chosen styles and language.` },
                { role: 'user', content: `${languagePrompt}${prompt}` },
                { role: 'assistant', content: style }
            ],
            temperature: 0.4,
            max_tokens: 300
        }, {
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        console.log('Response data:', response.data);
        res.json(response.data);
    } catch (error) {
        console.error('Error generating text:', error.response ? error.response.data : error.message);
        res.status(500).send('Error generating text');
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
