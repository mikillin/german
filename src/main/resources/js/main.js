/** consts **/
const defaultHistoryOptionsAmount = 20;

var HistoryItemsArray = [];
var correctAnswer = "";


class Word {
    constructor(description, question, option1, option2, option3, translation, correct) {
        this.description = description;
        this.question = question;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.translation = translation;
        this.correct = correct;
    }
}


$(document).ready(function () {
    console.log("ready!");
    updateStoredData();

    $("#saveNewItem").click(function(){
        console.log("saveNewItem clicked");
        saveRule();
    })


});



$(document).keyup(function (event) {
     //37, 38, 39
    if (event.which == 37 && correctAnswer == HistoryItemsArray[0].option1) {
        console.log("correct!")
    } else if (event.which == 38 && correctAnswer == HistoryItemsArray[0].option2) {
        console.log("correct!")
    } else if (event.which == 39 && correctAnswer == HistoryItemsArray[0].option3) {
        console.log("correct!")
    } else {
        console.log("wrong!")
    }
});

/*
function go() {
    let selectHistory = document.getElementById("selectHistory");
    let newOption = document.createElement("option");
    let currentSearchAddressFieldValue = document.getElementById("searchAddressField").value;

    if (currentSearchAddressFieldValue == "")
        return;
    //check for inserting previous place
    let insrt = 1;
    if (HistoryItemsArray) {
        if (HistoryItemsArray[HistoryItemsArray.length - 1].description == currentSearchAddressFieldValue) {
            insrt = 0;
        }
    }

    map.panTo(center);
    map.setZoom(11);

    let lat = autocomplete.getPlace().geometry.location.lat();
    let lng = autocomplete.getPlace().geometry.location.lng();
    let zoom = map.getZoom();
    let newHistoryItem = new HistoryItem(currentSearchAddressFieldValue, lng, lat, zoom);

    if (insrt == 1) {
        newOption.text = currentSearchAddressFieldValue;
        selectHistory.add(newOption, selectHistory[1]);

        if (selectHistory.length > defaultHistoryOptionsAmount)
            selectHistory.remove(defaultHistoryOptionsAmount + 1); // + 1    - default "History"

        //form structure with required information
        HistoryItemsArray.push(newHistoryItem);
        //delete redundant results
        while (HistoryItemsArray.length > defaultHistoryOptionsAmount)
            HistoryItemsArray.shift();

        //save data in cookie as JSON object
        $.cookie('ConcisoTestTask', JSON.stringify(HistoryItemsArray, null, 2));

        //save new item in DB

        $.ajax({
            type: "POST",
            contentType: "application/json",
            url: "/addNewHistoryItem",
            data: JSON.stringify(newHistoryItem, null, 2),

            error: function (e) {
                console.log("DB ERROR: ", e);
            }
        });
    }
}
*/

function saveRule(){

    console.log("clicked saveRule");
    word = new Word(
    $("#description_add").val(),
    $("#question_add").val(),
    $("#firstAnswer_add").val(),
    $("#secondAnswer_add").val(),
    $("#thirdAnswer_add").val(),
    $("#translation_add").val(),
    $("#correct_add").val())

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "/addNewWordItem",
        data: JSON.stringify(word, null, 2),

        error: function (e) {
            console.log("DB ERROR: ", e);
        }
    });
}
function updateStoredData() {

    //for test delete all cookie
    // $.cookie('ConcisoTestTask', null);

    //cookie
    //if ($.cookie('ConcisoTestTask'))
    //    HistoryItemsArray = JSON.parse($.cookie('ConcisoTestTask'));

    // if no info in cookie, than restore data from backup in DB
    //db
    if (HistoryItemsArray.length == 0) {
        $.ajax("/getWords", {

            success: function (data) {
                console.log(">>> ajax success.  Data: " + data);
                if (data) {
                    HistoryItemsArray = JSON.parse(data);
                    fillHistorySelect(HistoryItemsArray);
                }
            },
            error: function (data) {
                console.log(">>> ajax error.  Data:" + data);
            }
        });
    } else {
        fillHistorySelect(HistoryItemsArray);
    }
}

function fillHistorySelect(HistoryItemsArray) {

    for (let i = 0; i < HistoryItemsArray.length; i++) {
        $("#description").val(HistoryItemsArray[i].description);
        $("#firstAnswer").val(HistoryItemsArray[i].option1);
        $("#secondAnswer").val(HistoryItemsArray[i].option2);
        $("#thirdAnswer").val(HistoryItemsArray[i].option3);
        $("#question").val(HistoryItemsArray[i].question);
        $("#translation").val(HistoryItemsArray[i].translation);
        correctAnswer = HistoryItemsArray[i].correct;
        //ectHistory.add(newOption, selectHistory[1]);
    }
}


