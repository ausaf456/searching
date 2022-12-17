var inpVal = document.getElementById("inpval");
var namee=document.getElementById("name")
var roll_No=document.getElementById("rollno")
var stdclass=document.getElementById("class")

var students1 = {
    name: "Ausaf",
    class: "10th",
    rollno: "34",
}
var students2 = {
    name: "Hamza  ",
    class: "4th",
    rollno: "347",
}
var students3 = {
    name: "Azlan ",
    class: "9th",
    rollno: "364",
}
var students4 = {
    name: "Hasan  ",
    class: "8th",
    rollno: "354",
}
var students5 = {
    name: "Abbas ",
    class: "3rd",
    rollno: "334",
}
var arr = [students1, students2, students3, students4, students5];


function searching() {
    // console.log(inpVal.value);
    for (var i = 0; i < arr.length; i++) {
        if (inpVal.value === arr[i].rollno) {
            console.log("sahi hey")
            namee.innerHTML+=arr[i].name;
            stdclass.innerHTML+=arr[i].class;
            roll_No.innerHTML+=arr[i].rollno;
            break;
        } else {

            console.log("sahi nhi hey")

        }
    }
}
