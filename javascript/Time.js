const date = document.getElementById('date');
const time = document.getElementById('time');
const image = document.getElementById('image');

const formatTimeElement = function (TimeElement) {
    if (TimeElement < 10){
        TimeElement = '0' + TimeElement;
    }
    return TimeElement;
}

const formatTimeToString = function (hours, minuts, seconds) {
    hours = formatTimeElement(hours);
    minuts = formatTimeElement(minuts);
    seconds = formatTimeElement(seconds);
    return `${hours}:${minuts}:${seconds}`;
}

const transformDayOfWeek = function(day){
    const week = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];
    
    for(let index in week){
        if(index == day){
            return week[index];
        }
    }
}

const formatDateToString = function (dayOfWeek, day, month, year) {
    dayOfWeek = transformDayOfWeek(dayOfWeek);
    day = formatTimeElement(day);
    month = formatTimeElement(month);
    return `${dayOfWeek} ${day}/${month}/${year}`;
}

setInterval( () => {

    let dateNow = new Date();

    let hours = dateNow.getHours();
    let minuts = dateNow.getMinutes();
    let seconds = dateNow.getSeconds();

    let dayOfWeek = dateNow.getDay();

    let day = dateNow.getDate();
    let month = dateNow.getMonth() + 1;
    let yaer = dateNow.getFullYear();

    time.textContent = formatTimeToString(hours, minuts, seconds);
    date.textContent = formatDateToString(dayOfWeek, day, month, yaer);

}, 1000);

setInterval ( () => {
    image.classList.toggle('pulse');
}, 500);

