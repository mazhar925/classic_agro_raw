// Modal Operation
function openModal(signal){
    document.getElementById(signal).style.display = "block";
}
function closeModal(signal){
    document.getElementById(signal).style.display = "none";
}

// Table Filter
function searchFunction() {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("dataInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableData");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}


// Pagination