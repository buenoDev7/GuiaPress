'use strict'
function confirmDelete() {
    const confirmDelete = confirm("You're about to remove permanently this data. Are you sure?")

    if (confirmDelete) {
        return true;
    } else {
        return false;
    }
}