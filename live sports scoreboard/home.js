// Toggle the sidebar visibility
function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.display === "block") {
        sidebar.style.display = "none";
    } else {
        sidebar.style.display = "block";
    }
}

// Remove match from watchlist
const removeButtons = document.querySelectorAll(".remove-button");

removeButtons.forEach(button => {
    button.addEventListener("click", function () {
        const match = this.parentElement;
        match.remove();
        alert("Match removed from your watchlist.");
    });
});

// Optional: Remember sidebar state (open/close) on page reload using localStorage
document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    if (localStorage.getItem("sidebar") === "open") {
        sidebar.style.display = "block";
    } else {
        sidebar.style.display = "none";
    }

    document.querySelector(".toggle-button").addEventListener("click", () => {
        const currentState = sidebar.style.display === "block" ? "open" : "closed";
        localStorage.setItem("sidebar", currentState === "open" ? "closed" : "open");
    });
});s