const DataFrame = require('dataframe-js').DataFrame;
const fs = require("fs");
const df_filename = "football-history.csv";
const df_fullpath = __dirname + "/" + df_filename;
const teams_filename = "teams.txt";
const teams_fullpath = __dirname + "/" + teams_filename;
const data = {};

exports.data = data;
exports.loadData = function(callback){
    DataFrame.fromCSV(df_fullpath).then(df => {
        data.football_df = df;
        fs.readFile(teams_fullpath, function(err, file){
            if (err) throw err;
            data.teams = file.toString('utf-8').split('\n');
        }); 
        callback();
    });
}


