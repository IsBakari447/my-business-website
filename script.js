const themeToggle = document.getElementById("theme-toggle");
const infoToggle = document.getElementById("info-toggle");
const additionalInfo = document.getElementById("additional-info");
const contactForm = document.getElementById("contact-form");
const formConfirmation = document.getElementById("form-confirmation");

themeToggle.addEventListener("click", () => {
    const isDark = document.body.dataset.theme !== "dark";
    document.body.dataset.theme = isDark ? "dark" : "light";
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.textContent = isDark ? "Ljust tema" : "Mörkt tema";
});

infoToggle.addEventListener("click", () => {
    const isExpanded = infoToggle.getAttribute("aria-expanded") !== "true";
    infoToggle.setAttribute("aria-expanded", String(isExpanded));
    additionalInfo.hidden = !isExpanded;
    infoToggle.textContent = isExpanded ? "Dölj information" : "Visa mer information";
});

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) {
        return;
    }

    formConfirmation.textContent = "Tack! Formuläret är ifyllt. Inga uppgifter har skickats.";
    formConfirmation.hidden = false;
    contactForm.reset();
});

contactForm.addEventListener("input", () => {
    formConfirmation.textContent = "";
    formConfirmation.hidden = true;
});