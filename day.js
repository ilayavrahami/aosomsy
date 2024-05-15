function calculateDaysLived() {
    const birthdateInput = document.getElementById("birthdate");
    const birthdate = new Date(birthdateInput.value);
    const currentDate = new Date();

    const diffInMs = currentDate - birthdate;
    const daysLived = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    const resultElement = document.getElementById("result");
    resultElement.textContent = `אתה חיי במשך ${daysLived} ימים מאז לידתך.`;
}
