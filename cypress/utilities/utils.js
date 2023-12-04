export function getRandomDateInLastMonth() {
    // Get today's date
    const today = new Date();
    // Get the last month's date
    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    // Calculate the time range between today and last month's date in milliseconds
    const timeRange = today.getTime() - lastMonth.getTime();
    // Generate a random time within the time range
    const randomTime = Math.random() * timeRange;
    // Set the generated time to a new Date object
    const randomDate = new Date();
    randomDate.setTime(lastMonth.getTime() + randomTime);
    const onlyDate = randomDate.toISOString().split('T')[0]
    return onlyDate;
}

export function getRandomNumber() {
    // Generate a random number between 1 and 7 (inclusive)
    const randomNumber = Math.floor(Math.random() * 7) + 1;
    console.log(randomNumber);
    return randomNumber
}

export function todayDate() {
    const today = new Date().toISOString().split('T')[0];
    return today
}

export function generateRandomString() {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let randomString = '';
    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        randomString += charset[randomIndex];
    }
    return randomString;
}