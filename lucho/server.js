const express = require('express')
const cors = require('cors')
const app = express()
const port = 81
const axios = require('axios')

app.use(cors())

const api_key = 'RGAPI-42cd3704-b0e8-4905-af6a-dab1f332571a'
//const api_key = '237c9488-489b-43d6-91dd-682acd36fb53'

app.get('/bySum', (req, res) => {

    let sum = req.query.sum


    let encoded = encodeURI(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${sum}?api_key=${api_key}`)

    axios.get(encoded)
        .then(response => {

            res.send(response.data);
        })
        .catch(error => {

            console.log(error);
        });
})

app.get('/byId', (req, res) => {

    let id = req.query.id

    axios.get(`https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${api_key}`)
    .then(response => {


        res.send(response.data);
    })
    .catch(error => {

        console.log(error);
    });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})