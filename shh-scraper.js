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

        // dogList contains the li's of each dog
        const dogList = $('.animal-list>li');
        const dogArray = [];

        // loop through tr's and extract relevant information based on css class
        dogList.each(function () {
            let link = $(this.children[0].children).find('p > a')[0].attribs.href;
            let name = $(this.children[0].children).find('p > a')[0].children[0].data

            dogArray.push({
                link,
                name
            });
        });

        console.log($(dogList[0].children[0].children).find('p > a')[0].children[0]);
        // console.log(dogArray)
        
    })
    .catch(console.error);