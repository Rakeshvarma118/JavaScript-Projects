function doAddition() {
    let data1 = document.getElementById('id1').value
    let data2 = document.getElementById('id2').value
    let result = eval(data1) + eval(data2)
    alert(result)
}
function doErase(){
    let flag=confirm("Are you sure to clear?")
    if(flag){
        document.getElementById('id1').value=''
        document.getElementById('id2').value=''
    }
}