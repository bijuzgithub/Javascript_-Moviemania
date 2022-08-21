
let btnAdd = document.querySelector('button');
let table = document.querySelector('table');
let btnHide = document.querySelector('#hideMovieList');
let nameInput = document.querySelector('#name');
let ageInput = document.querySelector('#age');
let mycheckbox = document.getElementById('toggle');


mycheckbox.addEventListener('change', e => {
    if (e.target.checked) {
        if (table.style.display === 'none') {
            table.style.display = 'block';
            document.getElementById("toggle").checked = false;
            document.getElementById('toggle1').innerHTML = "Hide Movie List";
        } else {
            table.style.display = 'none';
            document.getElementById('toggle1').innerHTML = "Double Click the Check Box to Unhide Movie List";
        }
    }
});


btnAdd.addEventListener('click', () => {
    let name = nameInput.value;
    let Year = ageInput.value;
    if (name == "" || Year == "") {
        // alert("Movie Name and its Release Year is mandatory to Add a Movie in the Movie Database");
        // Swal.fire('Success');
        Swal.fire(
            'Oops!',
            'Movie Name and its Release Year is mandatory, <br>Kindly cross check the values',
            'failure'
          );
        
    } else {
        let template = `
                <tr>
                    <td>${name}</td>
                    <td style="text-align: center;">${Year}</td>
                    <td><button class="btnDel btn btn-sm btn-outline-danger">Delete</button></td>
                </tr>`;
        table.innerHTML += template;
        nameInput.value="";
        ageInput.value="";        
    }
    
});

table.addEventListener('click', deleteMovieRecord);
function deleteMovieRecord(e) {
    if (!e.target.classList.contains('btnDel')) {
        return;
    }
    const delRec = e.target;
    delRec.closest("tr").remove();
}

function movieSearch() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}






