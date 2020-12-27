fs = require('fs');

(function () {
    fs.watch('./hello.txt', (eventType, filename) => {
        if (filename && eventType === 'change') {
            console.log(filename);
            
            const data = fs.readFileSync(filename, 'utf8');
            console.log(data);
        }
    });
}());
