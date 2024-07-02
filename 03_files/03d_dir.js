const fs = require('fs');

if (!fs.existsSync('./new')) {
    fs.mkdir('./new', (err) => {
        if (err) throw err;
        console.log('Directory Created');
    });
} else {
    console.log('Directory exists, nothing created')
}

if (fs.existsSync('./new')) {
    fs.rmdir('./new', (err) => {
        if (err) throw err;
        console.log('Directory Deleted');
    });
} else {
    console.log('Directory doesnt exist, nothing deleted')
}
