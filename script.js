function saveUsername() {
    const username = document.getElementById('username').value;
    if (username.trim() !== "") {
        localStorage.setItem('parkwise_username', username);
        window.location.href = 'select_lot.html';
    } else {
        alert("Please enter your name!");
    }
}

function selectLot(lotName) {
    localStorage.setItem('parkwise_lot', lotName);
    const currentTime = new Date().toLocaleString();
    localStorage.setItem('parkwise_time', currentTime);
    window.location.href = 'confirm_reservation.html';
}

function generateQR() {
    // (We are not using dynamic QR anymore, so you can ignore this function or leave it empty.)
}

function loadReservation() {
    const username = localStorage.getItem('parkwise_username');
    const lot = localStorage.getItem('parkwise_lot');
    const time = localStorage.getItem('parkwise_time');

    if (!username || !lot || !time) {
        document.getElementById('savedReservation').innerText = "No active reservation.";
        return;
    }

    document.getElementById('savedReservation').innerText = 
        `${username} - ${lot}\n${time}`;
}
