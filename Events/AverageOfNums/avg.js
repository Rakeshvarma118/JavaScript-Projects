function findAverage() {
    let total = 0;
    for (let i = 1; i <= 6; i++) {
        let value = Number(document.getElementById('n' + i).value);
        total += value;
    }
    let avg = total / 6;
    alert("The average is: " + avg);
}

function clearInputs() {
    let flag=confirm("Are you sure?")
    if(flag){
        for (let i = 1; i <= 6; i++) {
            document.getElementById('n' + i).value = '';
            }
        }
}
