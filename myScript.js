function generatePassword() {
    let strongPass = "";

    let size = (Math.random() * 100) % 50;
    size = Math.max(25, size);
    size = 45;

    for (let i = 0; i < size; i++) {
        let charAscii = (Math.random() * 1000) % 123;
        charAscii = charAscii <= 32 ? charAscii += 33 : charAscii;
        strongPass += String.fromCharCode(charAscii)
    }

    var strongPassField = document.getElementById("strong-pass-field");
    strongPassField.value = strongPass;      
}
