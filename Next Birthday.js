function calculateDaysUntilNextBirthday() {
    const birthdateInput = document.getElementById("birthdate");
    const birthdate = new Date(birthdateInput.value);
    const today = new Date();

    birthdate.setFullYear(today.getFullYear());

    if (birthdate.getTime() < today.getTime()) {
        birthdate.setFullYear(today.getFullYear() + 1);
    }

    const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
    const daysUntilNextBirthday = Math.round((birthdate.getTime() - today.getTime()) / oneDay);

    const resultElement = document.getElementById("result");
    resultElement.textContent = `Days until your next birthday: ${daysUntilNextBirthday} days`;
}
