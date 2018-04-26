export function convertToEuropeanDate(date) {
    var date = new Date(date);
    return date.getDate()+"."+date.getMonth()+"."+date.getFullYear();
}
