function addMedicine() {
    const select = document.getElementById('medicine-select');
    const newMed = document.getElementById('new-medicine').value.trim();
    const timings = Array.from(document.querySelectorAll('.timing-options input:checked'))
                        .map(input => input.value)
                        .join(", ");

    let medicineName = "";

    if (newMed !== "") {
        medicineName = newMed;
    } else if (select.value !== "") {
        medicineName = select.value;
    } else {
        alert("Please select or enter a medicine name.");
        return;
    }

    const prescriptionList = document.getElementById('prescription-list');
    const listItem = document.createElement('li');
    listItem.textContent = `${medicineName} - ${timings}`;
    prescriptionList.appendChild(listItem);

    // Reset fields
    select.value = "";
    document.getElementById('new-medicine').value = "";
    document.querySelectorAll('.timing-options input').forEach(input => input.checked = false);
}
