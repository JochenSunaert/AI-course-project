const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());


const OPENAI_API_KEY = 'zomaar in code kijken voor mijn key!';


app.post('/generate-text', async (req, res) => {
    const { prompt, style, model } = req.body;

    console.log('Received request:', { prompt, style, model }); // Log the received data

    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: model || 'gpt-3.5-turbo', // Default to gpt-3.5-turbo if model is not provided
            messages: [
                { role: 'user', content: prompt },
                { role: 'assistant', content: style }
            ],
        }, {
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        console.log('Response data:', response.data); // Log the response data

        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error generating text');
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
