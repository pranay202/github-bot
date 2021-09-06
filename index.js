const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit =require('simple-git');

const FILE_PATH = './data.json';

const DATE = moment().subtract(5,'d').format;

const data = {
    date: DATE
}

jsonfile.writeFile(FILE_PATH, data, () => {
    simpleGit().add([FILE_PATH]).commit(`DATE`, {'--date':DATE }).push();
});

// commits and push the changes to the github repo!
// simpleGit().add([FILE_PATH]).commit(DATE,{'--date':DATE }).push();