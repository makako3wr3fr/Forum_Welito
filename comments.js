// Referências aos elementos
const commentInput = document.getElementById('commentInput');
const submitComment = document.getElementById('submitComment');
const commentsSection = document.getElementById('commentsSection');

// Adicionar novo comentário
submitComment.addEventListener('click', () => {
    const commentText = commentInput.value.trim();
    if (commentText) {
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.innerHTML = `<p><strong>@nickname:</strong> ${commentText}</p>`;

        commentsSection.appendChild(newComment);
        commentInput.value = '';
    }
});
