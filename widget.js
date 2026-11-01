const dailyScript = document.createElement('script');
dailyScript.src = 'https://unpkg.com/@daily-co/daily-js';
dailyScript.onload = () => {
    const container = document.getElementById('daily-room-container');
    container.innerHTML = ''; // Clears the 'Initializing...' placeholder text
    
    const callFrame = window.DailyIframe.createFrame(container, {
        iframeStyle: {
            width: '100%',
            height: '100%',
            border: '0',
            borderRadius: '12px'
        },
        showLeaveButton: true,
        showFullscreenButton: true
    });
    
    // TODO: Uncomment the line below and insert your Daily.co room URL when the implementation packet arrives
    // callFrame.join({ url: 'https://your-domain.daily.co/your-room-name' });
};
document.head.appendChild(dailyScript);
