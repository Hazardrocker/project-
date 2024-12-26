function submitForm() {
    const name = document.getElementById('name').value;
    const train = document.getElementById('train').value;
    const date = document.getElementById('date').value;
    const trainClass = document.getElementById('class').value;

    const confirmationDetails = `
        Name: ${name}<br>
        Train: ${train}<br>
        Date: ${date}<br>
        Class: ${trainClass}
    `;

    document.getElementById('reservation-form').classList.add('hidden');
    document.getElementById('confirmation').classList.remove('hidden');
    document.getElementById('confirmation-details').innerHTML = confirmationDetails;
}