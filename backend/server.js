const express = require('express');
const cors = require('cors');

require('dotenv').config();
const connectDB = require('./mongodb');
const csv = require('csv-parser');
const fs = require('fs');


const app = express();
app.use(cors({
  origin: '*',
}));

app.use(express.json()); // Ensure this middleware is used

const PORT = process.env.PORT || 8080;

app.get('/', async(req,res) => {
    res.status(200).json({message: "Hello world"})
})


//only to load the data into the database once
app.post('/music', async (req, res) => {
    try {
        const db = await connectDB();
        const musicCollection = db.collection('music');

        let results = [];

        // Read and parse the CSV file
        fs.createReadStream('top10s.csv')
            .pipe(csv())
            .on('data', (data) => results.push(data))
            .on('end', async () => {
                // Insert parsed data into MongoDB
                await musicCollection.insertMany(results);
                res.status(200).json({ message: 'Data added successfully', data: results });
            });
    } catch (error) {
        console.error('Failed to add music', error);
        res.status(500).send('Error adding music');
    }
});

app.get('/music/:title', async (req, res) => {

    const { title } = req.params;
    console.log(title);

    try {
        const db = await connectDB();
        const musicCollection = db.collection('music');

        // Query the database for the song
        const result = await musicCollection.findOne({ title: title });

        if (result) {
            res.status(200).json(result); // Send the result back to the client if the song is found
        } else {
            res.status(404).send('Song not found'); // Send a 404 response if the song is not found
        }

        
    } catch (error) {
        console.error('Failed to get song', error);
        res.status(500).send('Error getting song');
    }
})

app.get('/allGenres', async (req, res) => {

    try {
        const db = await connectDB();
        const musicCollection = db.collection('music');

        // Use MongoDB's aggregation framework to find all unique top genres
        const genres = await musicCollection.aggregate([
            { $group: { _id: "$top genre" } }, // Group documents by 'top genre' field
            { $sort: { _id: 1 } }              // Optional: sort genres alphabetically
        ]).toArray();

        if (genres.length > 0) {
            // Extract genres from aggregation result and send back to client
            res.status(200).json(genres.map(g => g._id));
        } else {
            res.status(404).send('No genres found');
        }

        
    } catch (error) {
        console.error('Failed to get song recommendations', error);
        res.status(500).send('Error getting song recommendations');
    }
})

app.get('/allYears', async (req, res) => {

    try {
        const db = await connectDB();
        const musicCollection = db.collection('music');

        // Use MongoDB's aggregation framework to find all unique top genres
        const genres = await musicCollection.aggregate([
            { $group: { _id: "$year" } }, // Group documents by 'top genre' field
            { $sort: { _id: 1 } }              // Optional: sort genres alphabetically
        ]).toArray();

        if (genres.length > 0) {
            // Extract genres from aggregation result and send back to client
            res.status(200).json(genres.map(g => g._id));
        } else {
            res.status(404).send('No genres found');
        }

        
    } catch (error) {
        console.error('Failed to get song recommendations', error);
        res.status(500).send('Error getting song recommendations');
    }
})

app.get('/years/:start?/:end?', async (req, res) => {
    let { start, end } = req.params;
    start = start || '2010';
    end = end || '2019';

    console.log('Requested start year:', start);
    console.log('Requested end year:', end);

    try {
        const db = await connectDB();
        const musicCollection = db.collection('music');

        // Use MongoDB's aggregation framework to find all songs within the year range
        const songs = await musicCollection.aggregate([
            {
                $match: {
                    year: { 
                        $gte: start, 
                        $lte: end 
                    }
                }
            },
            { $sort: { year: 1 } } // Optionally sort by year
        ]).toArray();

        console.log('Fetched songs:', songs);

        if (songs.length > 0) {
            res.status(200).json(songs);
        } else {
            res.status(404).send('No songs found in the given year range');
        }
    } catch (error) {
        console.error('Failed to get songs from year range', error);
        res.status(500).send('Error getting songs from year range');
    }
});





app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`)
  });



module.exports = app;