unction submitComment() {
    const commentInput = document.querySelector('#comment-input textarea');
    const commentsList = document.getElementById('comments-list');

    if (commentInput.value.trim()) {
        const newComment = document.createElement('div');
        newComment.classList.add('comment');
        newComment.innerHTML = `<p><strong>@nickname:</strong> ${commentInput.value}</p>`;

        commentsList.appendChild(newComment);
        commentInput.value = '';
    }
}
