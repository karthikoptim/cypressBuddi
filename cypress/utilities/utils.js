export function getRandomDateInLastMonth() {
    const today = new Date();
    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    const timeRange = today.getTime() - lastMonth.getTime();
    const randomTime = Math.random() * timeRange;
    const randomDate = new Date();
    randomDate.setTime(lastMonth.getTime() + randomTime);
    const onlyDate = randomDate.toISOString().split('T')[0]
    return onlyDate;
}

export function getRandomNumber() {
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