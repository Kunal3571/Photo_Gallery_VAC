function openModal(imageId) {
    var modal = document.getElementById('modal');
    var modalImg = document.getElementById('modal-img');
    var captionText = document.getElementById('caption');

    // Set the src of the modal image
    modalImg.src = document.querySelector(`.${imageId}`).src;
    captionText.innerHTML = imageId; // You can customize the caption here

    modal.style.display = 'block';
}

function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none';
}
