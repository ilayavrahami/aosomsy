function calculateDaysSinceLastBirthday() {
    const birthdateInput = document.getElementById("birthdate");
    const birthdate = new Date(birthdateInput.value);
    const today = new Date();

    // Set the birthdate year to the current year
    birthdate.setFullYear(today.getFullYear());

    // If the birthday has not occurred yet this year, set it to last year
    if (birthdate > today) {
        birthdate.setFullYear(today.getFullYear() - 1);
    }

    // Calculate days since last birthday
    const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
    const daysSinceLastBirthday = Math.round((today - birthdate) / oneDay);

    const resultElement = document.getElementById("result");
    resultElement.textContent = `ימים מאז יום ההולדת האחרון שלך: ${daysSinceLastBirthday} ימים`;
}
