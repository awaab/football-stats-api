const DataFrame = require('dataframe-js').DataFrame;
const fs = require("fs");
const dfFilename = "football-history.csv";
const dfFullpath = __dirname + "/" + dfFilename;
const teamsFilename = "teams.txt";
const teamsFullpath = __dirname + "/" + teamsFilename;
const data = {};

exports.data = data;
exports.loadData = function(callback){
    // load football stats csv source:
    // https://www.kaggle.com/martj42/international-football-results-from-1872-to-2017
    DataFrame.fromCSV(dfFullpath).then(df => {
        data.footballDf = df;
        fs.readFile(teamsFullpath, function(err, file){
            if (err) throw err;
            data.teams = file.toString('utf-8').split('\n');
        }); 
        callback();
    });
}


