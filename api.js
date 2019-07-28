const dotenv = require('dotenv');
dotenv.config();

const axios = require('axios')

// An api key is emailed to you when you sign up to a plan
const api_key = process.env.api_key

// Get a list of in season sports
// axios.get('https://api.the-odds-api.com/v3/sports', {
//     params: {
//         api_key: api_key
//     }
// }).then(response => {

//     console.log(response.data.data)
// })
//     .catch(error => {
//         console.log('Error status', error.response.status)
//         console.log(error.response.data)
//     })

// To get odds for a sepcific sport, use the sport key from the last request
//   or set sport to "upcoming" to see live and upcoming across all sports
let sport_key = 'upcoming'

let getSportsOdds = {
    getAll: function (req, res) {
        axios.get('https://api.the-odds-api.com/v3/odds', {
            params: {
                api_key: api_key,
                sport: sport_key,
                region: 'us', // uk | us | au
                mkt: 'spreads' // h2h | spreads | totals
            }
        }).then(response => {
            res.json(response.data.data)
            console.log()
            console.log('Remaining requests', response.headers['x-requests-remaining'])
            console.log('Used requests', response.headers['x-requests-used'])

        })
            .catch(error => {
                console.log(error)
            })
    }
}

module.exports = getSportsOdds