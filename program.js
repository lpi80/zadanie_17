process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    let input = process.stdin.read().toString().trim();
        
    switch (input) {
        case 'os':  process.stdout.write(process.env.os);
                    break;
        case 'lang': process.stdout.write(process.env.lang);
                    break;
        case 'version': process.stdout.write(process.versions.node);
                    break;
        case '/exit': process.stdout.write('Quitting app!\n');
                    break;
        default: process.stderr.write('Wrong instruction!');
    }
 });