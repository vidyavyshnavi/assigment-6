// Function to toggle sidebar visibility
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Function to remove a match card
function removeMatch(event) {
    const matchCard = event.target.closest('.match-card');
    if (matchCard) {
        matchCard.remove();
    }
}

// Attach event listeners to remove buttons after DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    const removeButtons = document.querySelectorAll('.remove-button');
    removeButtons.forEach(button => {
        button.addEventListener('click', removeMatch);
    });
});
