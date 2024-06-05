function sendToWhatsApp() {
    const color = document.querySelector('input[name="color"]:checked').value;
    const size = document.querySelector('input[name="size"]:checked').value;
    const type = document.querySelector('input[name="type"]:checked').value;
    const imageInput = document.getElementById('image');

    const message = `Hola, me gustaría personalizar una prenda con las siguientes características:\n Color: ${color}\n Talla: ${size}\n Tipo de prenda: ${type}`;

    const whatsappUrl = `https://wa.me/573013777546?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}
