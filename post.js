// function previewImage(event) {
//     const preview = document.getElementById('image-preview');
//     const file = event.target.files[0];
//     const reader = new FileReader();

//     reader.onloadend = function() {
//         const img = document.createElement('img');
//         img.src = reader.result;
//         img.classList.add('preview-img');
//         preview.innerHTML = '';
//         preview.appendChild(img);
//     }

//     if (file) {
//         reader.readAsDataURL(file);
//     } else {
//         preview.innerHTML = 'No image selected';
//     }
// }
