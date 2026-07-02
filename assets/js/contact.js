const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const formData = new FormData();

    formData.append("entry.123456789", document.getElementById("name").value);

    formData.append("entry.987654321", document.getElementById("email").value);

    formData.append("entry.456789123", document.getElementById("phone").value);

    formData.append("entry.741852963", document.getElementById("program").value);

    formData.append("entry.369258147", document.getElementById("message").value);

    await fetch("YOUR_GOOGLE_FORM_URL", {

        method: "POST",

        mode: "no-cors",

        body: formData

    });

    alert("Thank you! We received your enquiry.");

    form.reset();

});