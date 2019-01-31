function time(input) {
    if (input < 0) {
        return 'error';
    } else {
        const hour = Math.floor(input / 3600);
        const min = Math.floor((input - hour * 3600) / 60);
        const sec = input - hour * 3600 - min * 60;
        return hour + 'h : ' + min + 'min : ' + sec + 'sec';
    }
}

exports.print = time;