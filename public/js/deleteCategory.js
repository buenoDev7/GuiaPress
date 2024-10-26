'use strict'
function confirmDelete() {
    const confirmDelete = confirm("⚠️ You're about to DELETE this data permanently. Are you sure? ⚠️")
    if (confirmDelete) {
        alert(`🗑️ Category successfully deleted!`)
        return true
    } else {
        return false
    }
}