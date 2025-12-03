document.addEventListener('DOMContentLoaded', () => {
    const whites = document.querySelectorAll('.white');
    const blacks = document.querySelectorAll('.black');
    const whiteNotes = ['C', 'D', 'E', 'F', 'G', 'A'];
    const blackNotes = ['C#', 'D#', '', 'F#', 'G#', 'A#'];

    whites.forEach((key, index) => {
        key.textContent = whiteNotes[index];
        key.addEventListener('click', () => {
            const aud = new Audio(`music/${whiteNotes[index]}.mp3`);
            aud.play();
        });
    });

    blacks.forEach((key, index) => {
        if (blackNotes[index]) key.textContent = blackNotes[index];
        key.addEventListener('click', () => {
            if (blackNotes[index]) {
                const aud = new Audio(`music/${blackNotes[index].replace('#', 's')}.mp3`);
                aud.play();
            }
        });
    });
});
