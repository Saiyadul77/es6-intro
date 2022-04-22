function addBorder() {
    const addBorderMain = document.getElementById('friend-container');
    addBorderMain.style.border = '3px solid tomato';
}
document.getElementById('add-background').addEventListener('click', function () {
    const background = document.getElementsByClassName('friend');
    for (const backgrounds of background) {
        backgrounds.style.backgroundColor = 'yellow';
    }

})
document.getElementById('add-friend').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    const friend = document.createElement('div');
    friend.classList.add('friend');
    friend.innerHTML = `
    <h1 class="friend-name">Salam</h1>
 <p>Eius, dolorum vero! Similique, eos sunt amet obcaecati eius minima.</p>
    `
    container.appendChild(friend);
})