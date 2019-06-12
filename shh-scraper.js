// The goal of shh-scraper is to build an array of adoptable dogs

const axios = require('axios');

// allows html to be parsed with Jquery
const cheerio = require('cheerio');

const url = 'https://secondhandhounds.org/dogs-for-adoption/';

// Get the stats of the top players of the premier league
axios(url)
    .then(response => {

        const html = response.data; // raw data
        const $ = cheerio.load(html) // able to be parsed

        // targets the body of the table holding player information
        // returns array with objects of 'tr's 
        // note the array is weird and doesn't use square brackets
        const dogList = $('.animal-list>li');
        const dogArray = [];

        // loop through tr's and extract relevant information based on css class
        // dogList.each(function () {
        //     const rank = $(this).find('.rank > strong').text();
        //     const playerName = $(this).find('.playerName > strong').text();
        //     const nationality = $(this).find('.playerCountry').text();
        //     const goals = $(this).find('.mainStat').text();

        //     topPremierLeagueScorers.push({
        //         rank,
        //         name: playerName,
        //         nationality,
        //         goals,
        //     });
        // });

        // console.log(dogList[0].children[0]);
        console.log(dogList[0]);
        
    })
    .catch(console.error);