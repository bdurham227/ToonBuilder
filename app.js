const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 7000;

//set up middleware functions both are body parsers
//express.urlencoded() is middleare that parses incoming request with urlencoded payloads 
app.use(express.urlencoded({ extended: true }));
//(express.json()) is middleware that parses incoming requests with JSON payloads
//based on body parser
app.use(express.json());

//data
const toons = [
    {
        routeName: "pramsey",
        name: "Pramsey",
        role: "Farmer",
        skill: "Farming",
        combatLevel: 123,
        
    },
    {
        routeName: "runite",
        name: "Runite",
        role: "Miner",
        skill: "Mining",
        combatLevel: 126,
        
    },
    {
        routeName: "ilpenguin",
        name: "il Penguin",
        role: "not a real ironman",
        skill: "Firemaking",
        combatLevel: 125,
        
    },
    {
        routeName: 'camel',
        name: "camel",
        role: "real ironman",
        skill: "Fishing",
        combatLevel: 120,
        
    },
    {
        routeName: 'socrempres',
        name: "socrempres",
        role: "mage",
        skill: "magic",
        combatLevel: 99
    }
];

//routes
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'view.html'));
})
app.get('/add', (req,res) => {
    res.sendFile(path.join(__dirname, 'add.html'));
})
app.get('/characters', (req, res) => {
    return res.json(toons);
})
app.get('/characters/:character', (req, res) => {
    const chosen = req.params.character;

    if (chosen) {
        console.log(chosen);
        for(let i = 0; i < toons.length; i++) {
            if(chosen === toons[i].routeName) {
                return res.json(toons[i]);
            }
        }
        return res.send('no character found, try searching again!')
    } else {
        res.json(false);
    }
})
//create a new toon with post - takes in json input

app.post('/characters/add', (req, res) => {
    const newToon = req.body;

    newToon.routeName = newToon.name.replace(/\s+/g, '').toLowerCase();
    toons.push(newToon);
    res.json(newToon);
})



app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));








