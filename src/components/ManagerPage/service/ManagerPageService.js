import axios from "axios";

function GivePersTeacher(userEmailInput) {
    axios({
        url: 'http://44.194.225.221:8080/givePersTeacher',
        method: 'post',
        params: {
            userEmail: userEmailInput
        }
    }).then((res) => {
        console.log(res.data);
        btnDisabledTeacher(userEmailInput);
    }).catch(function (error) {
        console.log(error.response.data);
    })
}
function DeleteTeacher(userEmailInput){
    axios({
        url: 'http://44.194.225.221:8080/deleteTeacher',
        method: 'post',
        params:{
            userEmail : userEmailInput
        }
    }).then((res)=>{
        alert(res.data);
        window.location.reload();
    }).catch(function (error){
        console.log(error.response.data);
    })
}
function GivePersStudent(userEmailInput) {
    axios({
        url: 'http://44.194.225.221:8080/givePersStudent',
        method: 'post',
        params: {
            userEmail: userEmailInput
        }
    }).then((res) => {
        console.log(res.data);
        btnDisabledStudent(userEmailInput);
    }).catch(function (error) {
        console.log(error.response.data);
    })
}
function DeleteStudent(userEmailInput){
    axios({
        url: 'http://44.194.225.221:8080/deleteStudent',
        method: 'post',
        params:{
            userEmail : userEmailInput
        }
    }).then((res)=>{
        alert(res.data);
        window.location.reload();
    }).catch(function (error){
        console.log(error.response.data);
    })
}


function btnDisabledTeacher(ID) {
    const target = document.getElementById(ID);
    target.disabled = true;
}
function btnDisabledStudent(ID) {
    const target = document.getElementById(ID);
    target.disabled = true;
}

export {GivePersTeacher, DeleteTeacher, GivePersStudent, DeleteStudent};