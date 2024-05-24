
const URL = require('../Model/url.js');
const shortid = require('shortid');

async function handleURLShortner(req, res) {
    const body = req.body;
    if (!body.url) {
        return res.status(400).json({ error: 'URL is required' });
    }
    const shortID = shortid.generate();
    try {
        await URL.create({
            shortId: shortID,
            redirectURL: body.url,
            viewHistory: [],
        });
        console.log(`Created new URL with shortId: ${shortID}`);
        return res.render("home.ejs", { id: shortID });
    } catch (error) {
        console.error('Error creating URL:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

async function gethandleURLShortner(req, res) {
    const myshortID = req.params.shortId;
    console.log(`Received request to redirect for shortId: ${myshortID}`);
    try {
        const entry = await URL.findOneAndUpdate(
            { shortId: myshortID },
            {
                $push: {
                    viewHistory: {
                        timestamp: Date.now(),
                    },
                },
            },
            { new: true } 
        );

        if (!entry) {
            console.log(`URL not found for shortId: ${myshortID}`);
            return res.status(404).json({ error: 'URL not found' });
        }
        console.log(`Redirecting to: ${entry.redirectURL}`);
        return res.redirect(entry.redirectURL);
    } catch (error) {
        console.error('Error redirecting URL:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = { handleURLShortner, gethandleURLShortner };
