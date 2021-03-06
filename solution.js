'use strict';

function formatDuration(total_seconds) {
    let answer = "";

    // Set up list called 'container' where
    //  - container[0] == 'years'
    //  - container[1] == 'days'
    //  - container[2] == 'hours'
    //  - container[3] == 'minutes'
    //  - container[4] == 'seconds'
    let container = [0,0,0,0,0];

    // If total_seconds == 0, then return now
    if (total_seconds == 0) {
        return "Now";
    }

    // If total_seconds != 0, then, split total_seconds into years, days,
    // hours, minutes and seconds

    // Calculate number of years, and store in container[0]
    let YEAR_IN_SECONDS = 31536000;
    let number_of_years = Math.floor(total_seconds / YEAR_IN_SECONDS);
    container[0] = number_of_years;
    total_seconds = total_seconds - (YEAR_IN_SECONDS * number_of_years);

    // Calculate number of days, and store in container[1]
    let DAY_IN_SECONDS = 86400;
    let number_of_days = Math.floor(total_seconds / DAY_IN_SECONDS);
    container[1] = number_of_days;
    total_seconds = total_seconds - (DAY_IN_SECONDS * number_of_days);

    // Calculate number of hours, and store in container[2]
    let HOUR_IN_SECONDS = 3600;
    let number_of_hours = Math.floor(total_seconds / HOUR_IN_SECONDS);
    container[2] = number_of_hours;
    total_seconds = total_seconds - (HOUR_IN_SECONDS * number_of_hours);

    // Calculate number of minutes, and store in container[3]
    let MINUTE_IN_SECONDS = 60;
    let number_of_minutes = Math.floor(total_seconds / MINUTE_IN_SECONDS);
    container[3] = number_of_minutes;
    total_seconds = total_seconds - (MINUTE_IN_SECONDS * number_of_minutes);

    // Calculate number of seconds, and store in container[4]
    container[4] = total_seconds;

    // For each element in 'container', convert from integer to readable
    // format and push result to another container called 'answer_tmp'
    let answer_tmp = [];
    for (let i = 0; i < container.length; i++) {
        if (container[i] == 0) {
            continue;
        }

        let e = `${container[i]}`;

        if (i == 0) {
            e += container[i] > 1 ? " years" : " year";
        } else if (i == 1) {
            e += container[i] > 1 ? " days" : " day";
        } else if (i == 2) {
            e += container[i] > 1 ? " hours" : " hour";
        } else if (i == 3) {
            e += container[i] > 1 ? " minutes" : " minute";
        } else {
            e += container[i] > 1 ? " seconds" : " second";
        }

        answer_tmp.push(e);
    }

    // Join strings in 'answer_tmp' and return answer
    if (answer_tmp.length == 1) {
        return `${answer_tmp[0]}`;
    }

    if (answer_tmp.length == 2) {
        return `${answer_tmp[0]} and ${answer_tmp[1]}`;
    }

    answer = (`${answer_tmp.slice(0, answer_tmp.length - 1).join(", ")} and ` +
              `${answer_tmp[answer_tmp.length - 1]}`);

    return answer;
}

console.log(formatDuration(0))          // returns "Now"
console.log(formatDuration(1))          // returns "1 second"
console.log(formatDuration(2))          // returns "2 seconds"
console.log(formatDuration(40))         // returns "40 seconds"
console.log(formatDuration(60))         // returns "1 minute"
console.log(formatDuration(61))         // returns "1 minute and 1 second"
console.log(formatDuration(62))         // returns "1 minute and 2 seconds"
console.log(formatDuration(120))        // returns "2 minutes"
console.log(formatDuration(121))        // returns "2 minutes and 1 second"
console.log(formatDuration(122))        // returns "2 minutes and 2 seconds"
console.log(formatDuration(3600))       // returns "1 hour"
console.log(formatDuration(3601))       // returns "1 hour and 1 second"
console.log(formatDuration(3602))       // returns "1 hour and 2 seconds"
console.log(formatDuration(3660))       // returns "1 hour and 1 minute"
console.log(formatDuration(3661))       // returns "1 hour, 1 minute and 1 second"
console.log(formatDuration(3662))       // returns "1 hour, 1 minute and 2 seconds"
console.log(formatDuration(7200))       // returns "2 hours"
console.log(formatDuration(7201))       // returns "2 hours and 1 second"
console.log(formatDuration(7202))       // returns "2 hours and 2 seconds"
console.log(formatDuration(7260))       // returns "2 hours and 1 minute"
console.log(formatDuration(7261))       // returns "2 hours, 1 minute and 1 second"
console.log(formatDuration(7262))       // returns "2 hours, 1 minute and 2 seconds"
console.log(formatDuration(86400))      // returns "1 day"
console.log(formatDuration(16059661))   // returns "185 days, 21 hours, 1 minute and 1 second"
console.log(formatDuration(31536000))   // returns "1 year"
console.log(formatDuration(63072000))   // returns "2 years"
console.log(formatDuration(1592859661)) // returns "50 years, 185 days, 21 hours, 1 minute and 1 second"