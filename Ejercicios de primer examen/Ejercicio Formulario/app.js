function cambiarAsunto() {
    const asuntoSelect = document.querySelector('select[name="asunto"]');
    const cursoLabel = document.querySelector('label[for="curso"]');
    const cursoInput = document.getElementById('curso');

    if (asuntoSelect.value === '1') { // Si se selecciona "Apuntarse a un curso"
        cursoLabel.style.display = 'block';
        cursoInput.style.display = 'block';
    } else {
        cursoLabel.style.display = 'none';
        cursoInput.style.display = 'none';
    }
}