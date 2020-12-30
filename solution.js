// Detailed example
// 7262
// [2,1,2,0,0]
// ["2 hours", "1 minute", "2 seconds"]
// "2 hours, 1 minute and 2 seconds"

// set up list called 'container' where
//  - container[0] == 'seconds'
//  - container[1] == 'minutes'
//  - container[2] == 'hours'
//  - container[3] == 'days'
//  - container[4] == 'years'

// [0,0,0,0,0]

// if total_seconds == 0, then return now

// if total_seconds != 0, then, split total_seconds into seconds, minutes, hours, days, years
// Calculate number of years, and store in container[4]
// Calculate number of days, and store in container[3]
// Calculate number of hours, and store in container[2]
// Calculate number of minutes, and store in container[1]
// Calculate number of seconds, and store in container[0]

// For each element in 'container', convert int to readable format and push result to another container called 'answer_tmp'

// Join strings in 'answer_tmp' and store in variable called 'answer'
//  if answer_tmp.length == 1, set answer = answer_tmp[0]
//  if answer_tmp.length == 2, set answer = `${answer_tmp[1]} and ${answer_tmp[2]}`
//  if answer_tmp.length > 2, split to two one containing the last two elements and the other containing the rest
//      for the container containing the remaining elements, join with ", "
//      for the container containing last two elements, join with " and "
//      combine above and store in 'answer'

// return 'answer'


function formatDuration(total_seconds) {

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
console.log(formatDuration(7200))       // returns "1 hour, 1 minute and 2 seconds"
console.log(formatDuration(7200))       // returns "2 hours"
console.log(formatDuration(7201))       // returns "2 hours and 1 second"
console.log(formatDuration(7202))       // returns "2 hours and 2 seconds"
console.log(formatDuration(7260))       // returns "2 hours and 1 minute"
console.log(formatDuration(7261))       // returns "2 hours, 1 minute and 1 second"
console.log(formatDuration(7262))       // returns "2 hours, 1 minute and 2 seconds"
console.log(formatDuration(7262))       // returns "2 hours, 1 minute and 2 seconds"
console.log(formatDuration(31536000))   // returns "1 year"
console.log(formatDuration(63072000))   // returns "2 years"