// Dependencies

const express = require('express');
const path = require('path');

// Sets up the Express App
// init express
const app = express();

//lisen on a port
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Basic route that sends the user first to the AJAX Page

app.use(express.static(path.join(__dirname, 'public')));



// Create endpoints/route handlers
// app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));
// app.get('api', (req, res) => res.json(path.join(__dirname, './db/db.json')));

app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    const savedNotes = JSON.parse(fs.readFileSync(".db/db.json", "utf8"));

    if (tables.length <= 5) {
        tables.push(newReservation);

    } else {
        waitlist.push(newReservation);
    }
    res.json(newReservation)

})




// Starts the server to begin listening
// app.listen(3000)
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
