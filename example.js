const { getQuickStats } = require('./index');

var desiredNumberOfTopPosts = 10;
getQuickStats('mistaradesoga', desiredNumberOfTopPosts).then(stats => {
    console.log(stats);
});