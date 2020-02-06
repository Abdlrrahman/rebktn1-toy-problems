/*
Military Time
Given a string that represents time in hours and minutes, convert the string to military time (if necessary).

Examples: 

toMilitary("3:00pm") // "15:00"
toMilitary("9:15am") // "09:15"
toMilitary("12:00am") // "00:00"
toMilitary("04:00") // "04:00"
*/

function toMilitary(time) {
  var result = '';
  var temp = '';
  var i = 0;
  if (time[time.length - 2] === 'a') {
    while (i < time.length - 2) {
      result += time[i];
      i++;
    }
    if ( result[0] === '1' && result[1] === '2'){
      result = '00:00'
    }
  }
  else if (time[time.length - 2] === 'p') {
    while (i < time.length - 2) {
      result += time[i];
      if (result[i] === ':'){
        temp +=time[i];
        temp +=time[i + 1];
        temp +=time[i + 2];
      }
      i++;
    }
    
    result = parseInt(result)
    result +=12;
    result = JSON.stringify(result)
    result += temp;
  }
  else {
    return time;
  }
  return result;
}


toMilitary("3:00pm") // "15:00"
toMilitary("9:15am") // "09:15"
toMilitary("12:00am") // "00:00"
toMilitary("04:00") // "04:00"
