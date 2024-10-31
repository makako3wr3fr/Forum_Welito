// Abrir e fechar o pop-up
const addPostBtn = document.getElementById('addPostBtn');
const postPopup = document.getElementById('postPopup');
const closePopup = document.getElementById('closePopup');
const postForm = document.getElementById('postForm');
const timeline = document.getElementById('timeline');
const asciiPlaceholder = document.getElementById('asciiPlaceholder');

addPostBtn.addEventListener('click', () => {
    postPopup.style.display = 'flex';
});

closePopup.addEventListener('click', () => {
    postPopup.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == postPopup) {
        postPopup.style.display = 'none';
    }
});

// Função para animar botões de like e dislike
function animateButton(button) {
    button.classList.add('clicked');
    setTimeout(() => {
        button.classList.remove('clicked');
    }, 300);
}

// Postar e exibir na timeline
postForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const postTitle = document.getElementById('postTitle').value;
    const postMessage = document.getElementById('postMessage').value;
    const postImage = document.getElementById('postImage').files[0];

    // Remover o ASCII ao adicionar o primeiro post
    if (asciiPlaceholder) {
        asciiPlaceholder.remove();
    }

    const postElement = document.createElement('div');
    postElement.classList.add('post');

    postElement.innerHTML = `
        <h3>@nickname</h3>
        <h4>${postTitle}</h4>
        <p class="post-content">${postMessage}</p>
        ${postImage ? `<img src="${URL.createObjectURL(postImage)}" alt="Post Image" style="width: 100%; margin-top: 10px;">` : ''}
        <div class="post-footer">
            <button class="like-btn" onclick="animateButton(this)">👍</button>
            <button class="dislike-btn" onclick="animateButton(this)">👎</button>
            <a href="comments.html" class="comment-btn">💬 Comentários</a>
        </div>
    `;

    timeline.prepend(postElement);

    postPopup.style.display = 'none';
    postForm.reset();
});
