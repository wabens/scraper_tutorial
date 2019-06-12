// pl-scraper.js

const axios = require('axios');

// allows html to be parsed with Jquery
const cheerio = require('cheerio');

const url = 'https://www.premierleague.com/stats/top/players/goals?se=-1&cl=-1&iso=-1&po=-1?se=-1';

// Get the stats of the top players of the premier league
axios(url)
    .then(response => {

        const html = response.data; // raw data
        const $ = cheerio.load(html) // able to be parsed

        // targets the body of the table holding player information
        // returns array with objects of 'tr's 
        // note the array is weird and doesn't use square brackets
        const statsTable = $('.statsTableContainer > tr');
        const topPremierLeagueScorers = [];

        // loop through tr's and extract relevant information based on css class
        statsTable.each(function () {
            const rank = $(this).find('.rank > strong').text();
            const playerName = $(this).find('.playerName > strong').text();
            const nationality = $(this).find('.playerCountry').text();
            const goals = $(this).find('.mainStat').text();

            topPremierLeagueScorers.push({
                rank,
                name: playerName,
                nationality,
                goals,
            });
        });

        console.log(statsTable[2].children[1].children[0]);
        
        // console.log(topPremierLeagueScorers);
    })
    .catch(console.error);