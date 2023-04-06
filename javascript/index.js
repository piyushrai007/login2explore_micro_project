var jpdBaseURL = "http://api.login2explore.com:5577";
var jpdbIRL = "/api/irl";
var jpdbIML = "/api/iml";
var Prodbname = "Pro-table";
var ProRelationName = "Collage-db";
var connToken = "90932880|-31949282450821111|90948012";

$('#proid').focus();

function saveRecNoZLS(jsonObj) {
    var lvData = JSON.parse(jsonObj.data);
    localStorage.setItem("recno", lvData.rec_no);
}
function getproidAsJsonobj() {
    var proid = $("#proid").val();
    var jsonStr = {
        id: proid
    };
    return JSON.stringify(jsonStr);
}

function fillData(jsonObj) {
    saveRecNoZLS(jsonObj);
    var record = JSON.parse(jsonObj.data).record;
    $("#proname").val(record.proname);
    $("#assiTo").val(record.assiTo);
    $("#AssiDate").val(record.AssiDate);
    $("#deadline").val(record.deadline);
    
}
function resetForm() {
    $("#proid").val("");
    $("#proname").val("");
    $("#assiTo").val("");
    $("#AssiDate").val("");
    $("#deadline").val("");
    $("").val("");
    $("#proid").prop('disabled', false);
    $("#save").prop("disabled", true);
    $("#change").prop("disabled", true);
    $("#reset").prop("disabled", true);
    $("#proid").focus();
}


function validateData() {
    var proid, proname, assiTo, AssiDate, deadline;
    proid = $("#proid").val();
    proname = $("#proname").val();
    assiTo = $("#assiTo").val();
    AssiDate = $("#AssiDate").val();
    deadline = $("#deadline").val();


    if (proid === "") {
        alert("Employee ID Required Value");
        $("#proid").focus();
        return " ";
    }
    if (proname === "") {
        alert("Employee name Required Value");
        $("#proname").focus();
        return " ";
    }
    if (assiTo === "") {
        alert("Employee salary is  Required Value");
        $("#assiTo").focus();
        return " ";
    }
    if (AssiDate === "") {
        alert("AssiDate Required Value");
        $("#AssiDate").focus();
        return " ";
    }
    if (deadline === "") {
        alert("deadline is  Required Value");
        $("#deadline").focus();
        return " ";
    }
    
    var JasonObj = {
        id: proid,
        proname: proname,
        assiTo: assiTo,
        AssiDate: AssiDate,
        deadline: deadline,
    

    };
    return JSON.stringify(JasonObj);

}

function saveData() {
    var jsonStrobj = validateData();
    if (jsonStrobj === '') {
        return "";
    }
    var putRequest = createPUTRequest(connToken, jsonStrobj, Prodbname, ProRelationName)
    jQuery.ajaxSetup({ async: false });
    var resJsonObj = executeCommandAtGivenBaseUrl(putRequest, jpdBaseURL, jpdbIML)
    jQuery.ajaxSetup({ async: true });
    resetForm()
    $('#proid').focus();
}

function getProIdAsJsonObj() {
    var proid = $('#proid').val();
    var jsonStr = {
        id: proid
    }
    return JSON.stringify(jsonStr);
}
function getPro() {
    var proidJsonObj = getProIdAsJsonObj();
    var getRequest = createGET_BY_KEYRequest(connToken, Prodbname, ProRelationName, proidJsonObj);
    jQuery.ajaxSetup({ async: false });
    var resJsonObj = executeCommandAtGivenBaseUrl(getRequest, jpdBaseURL, jpdbIRL);
    jQuery.ajaxSetup({ async: true });
    if (resJsonObj.status === 400) {
        console.log(resJsonObj.status)
        $("#save").prop("disabled", false);
        $("#reset").prop("disabled", false);
        $("#proname").focus();
    } else if (resJsonObj.status === 200) {
        console.log(resJsonObj.status)
        $("#proid").prop("disabled", true);
        fillData(resJsonObj);
        $("#change").prop("disabled", false);
        $("#reset").prop("disabled", false);
        $("#proname").focus();
    }
}

function changeData() {
    $("#change").prop("disabled", true);
    jsonChg = validateData();
    var updateRequest = createUPDATERecordRequest(connToken, jsonChg, Prodbname, ProRelationName, localStorage.getItem("recno"));
    jQuery.ajaxSetup({ async: false });
    var resJsonobj = executeCommandAtGivenBaseUrl(updateRequest, jpdBaseURL, jpdbIML);
    jQuery.ajaxSetup({ async: true });
    console.log(resJsonobj);
    resetForm();
    $('#proid').focus();
}