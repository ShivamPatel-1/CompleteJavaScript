let myDate = new Date;
console.log(myDate.toDateString());
console.log(myDate.toString());
console.log(myDate.toLocaleString());


let newDate = new Date;
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getSeconds());
console.log(newDate.getTime());

newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "UTC",
})

// customisation of localeString format