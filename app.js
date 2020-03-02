const axios = require("axios");
const cheerio = require("cheerio");

var Jogadores = [];

axios("https://www.premierleague.com/stats/top/players/goals?se=-1&cl=-1&iso=-1&po=-1?se=-1")
    .then( async (response) => {
        
        const $ = await cheerio.load(response.data);

        var rankAll = $(".rank").find("strong").text();
        var nameAll = $(".table .playerName").text();
        var nationalityAll = $(".playerCountry").text();
        var goalsAll = $(".mainStat").text();
        
        for(i = 0; i < 19; i++){
            Jogadores.push({
                rank: rankAll[i],
                name: nameAll[i],
                nationality: nationalityAll[i],
                goals: goalsAll[i]
            })
        }
        
        
        
        console.log(Jogadores);
    }).catch(()=>{
        console.log("Erro ao executar webScraping")
    });