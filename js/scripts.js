function showMapModal() {
    var modal = document.getElementById('modal-content-map');
    modal.classList.add("active");
}

function hideMapModal() {
    var modal = document.getElementById('modal-content-map');
    modal.classList.remove("active");
}

function showFeedbackModal() {
    event.preventDefault();
    var modal = document.getElementById('modal-content');
    modal.classList.add("active");
}

function hideFeedbackModal() {
    var modal = document.getElementById('modal-content');
    modal.classList.remove("active");
}