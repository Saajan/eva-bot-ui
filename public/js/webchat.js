window.onload = () => {
    window.WebChat.renderWebChat(
        {
            directLine: window.WebChat.createDirectLine({
                token: 'SauwRyvuZBY.pCwKV3RP3oNjNpbZnOjlsfy4Zm3hnyZdp9l5F5LIhuQ'
            }),
            userID: 'YOUR_USER_ID',
            username: 'Web Chat User',
            locale: 'en-US'
        },
        document.getElementById('webchat')
    );
}