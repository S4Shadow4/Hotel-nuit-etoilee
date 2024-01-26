function sendMessage() {
    const clientName = document.getElementById('clientName').value;
    const messageText = document.getElementById('message').value;

    fetch('/messages/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ clientName, messageText }),
    })
        .then(response => response.json())
        .then(data => {
            console.log('Message sent:', data.message);
            document.getElementById('sendMessageForm').reset();
        })
        .catch(error => console.error('Error:', error));
}

function displayMessages() {

    fetch('/messages')
        .then(response => response.json())
        .then(messages => {
            const messageBody = document.getElementById('messageBody');
            messageBody.innerHTML = '';

            messages.forEach(message => {
                const row = document.createElement('tr');
                row.innerHTML = `<td>${message.message_text}</td><td>${message.date_message}</td>`;
                messageBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error:', error));
}
