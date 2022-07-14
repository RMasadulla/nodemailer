const contactForm = document.getElementById("mailBox");
let name = document.getElementById("userName");
let email = document.getElementById("userMail");
let subject = document.getElementById("userSub");
let message = document.getElementById("userText");
let submitBtn = document.getElementById("btn");


contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if ((name.value && email.value && subject.value && message.value) === '') {
        alert('empty input!')
    } else {
        let formData = {
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value
        }

        let xhr = new XMLHttpRequest();
        xhr.open('POST', '/');
        xhr.setRequestHeader('content-type', 'application/json');
        xhr.onload = function () {
            console.log(xhr.responseText);
            if (xhr.responseText === 'success') {
                alert("Email Successfully Sent")
                name.value = '';
                email.value = '';
                subject.value = '';
                message.value = '';
            } else {
                console.log("something went wrong")
            }
        }
        xhr.send(JSON.stringify(formData))
    }
})
