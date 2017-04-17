function convertTemp(temp, unit) {

   if (unit === 'f') {
       return (temp * 9/5) + 32;

}  else if (unit === 'c') {
       return (temp - 32) * (5/9);
}

}


console.log(convertTemp(32,'c'));
