function filterItems() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const selectedFilter = document.getElementById('filterDropdown').value.toLowerCase();
    const items = document.querySelectorAll('.imagen-wrapper');

    items.forEach(item => {
        const itemName = item.querySelector('p').innerText.toLowerCase();
        const matchesSearch = itemName.includes(searchInput);
        const matchesFilter = selectedFilter === '' || itemName.includes(selectedFilter);

        if (matchesSearch && matchesFilter) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
