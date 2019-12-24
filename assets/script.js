var dateP = $("#dateP")
var timeP = $("#timeP")

var dt = new Date();

function pageOpen() {

    var todoArray
    
    todoArray = JSON.parse(localStorage.getItem("todo array")) || [];

    for (var i = 0; i < todoArray.length; i++) {
        document.getElementsByTagName("textarea")[i].value = todoArray[i]
    }

    for (var i = 9; i < ($(dt.getHours())[0]); i++) {

        $(("#" + [i])).addClass("pastHour")
    } 

    for (var i = 17; i > ($(dt.getHours())[0]); i--) {

        $(("#" + [i])).addClass("futureHour")
    }

    if (($(dt.getDay())[0]) === 1) {
        dateP.text(`Monday, ${dt.toLocaleDateString()}`);
    } else if (($(dt.getDay())[0]) === 2) {
        dateP.text(`Tuesday, ${dt.toLocaleDateString()}`);
    } else if (($(dt.getDay())[0]) === 3) {
        dateP.text(`Wednesday, ${dt.toLocaleDateString()}`);
    } else if (($(dt.getDay())[0]) === 4) {
        dateP.text(`Thursday, ${dt.toLocaleDateString()}`);
    } else if (($(dt.getDay())[0]) === 5) {
        dateP.text(`Friday, ${dt.toLocaleDateString()}`);
    } else if (($(dt.getDay())[0]) === 6) {
        dateP.text(`Saturday, ${dt.toLocaleDateString()}`);
    } else if (($(dt.getDay())[0]) === 7) {
        dateP.text(`Sunday, ${dt.toLocaleDateString()}`);
    }

    if (($(dt.getHours())[0]) === 0) {
        if (dt.getMinutes() < 10) {
            timeP.text(`12:0${dt.getMinutes()} AM`)
        } else { timeP.text(`12:${dt.getMinutes()} AM`) }
    }

    else if (($(dt.getHours())[0]) === 1) {
        if (dt.getMinutes() < 10) {
            timeP.text(`1:0${dt.getMinutes()} AM`)
        } else { timeP.text(`1:${dt.getMinutes()} AM`) }
    }

    else if (($(dt.getHours())[0]) === 2) {
        if (dt.getMinutes() < 10) {
            timeP.text(`2:0${dt.getMinutes()} AM`)
        } else { timeP.text(`2:${dt.getMinutes()} AM`) }
    }

    else if (($(dt.getHours())[0]) === 3) {
        if (dt.getMinutes() < 10) {
            timeP.text(`3:0${dt.getMinutes()} AM`)
        } else { timeP.text(`3:${dt.getMinutes()} AM`) }
    }

    else if (($(dt.getHours())[0]) === 4) {
        if (dt.getMinutes() < 10) {
            timeP.text(`4:0${dt.getMinutes()} AM`)
        } else { timeP.text(`4:${dt.getMinutes()} AM`) }
    }

    else if (($(dt.getHours())[0]) === 5) {
        if (dt.getMinutes() < 10) {
            timeP.text(`5:0${dt.getMinutes()} AM`)
        } else { timeP.text(`5:${dt.getMinutes()} AM`) }
    }

    else if (($(dt.getHours())[0]) === 6) {
        if (dt.getMinutes() < 10) {
            timeP.text(`6:0${dt.getMinutes()} AM`)
        } else { timeP.text(`6:${dt.getMinutes()} AM`) }
    }

    else if (($(dt.getHours())[0]) === 7) {
        if (dt.getMinutes() < 10) {
            timeP.text(`7:0${dt.getMinutes()} AM`)
        } else { timeP.text(`7:${dt.getMinutes()} AM`) }
    }

    else if (($(dt.getHours())[0]) === 8) {
        if (dt.getMinutes() < 10) {
            timeP.text(`8:0${dt.getMinutes()} AM`)
        } else { timeP.text(`8:${dt.getMinutes()} AM`) }
    }

    else if (($(dt.getHours())[0]) === 9) {
        $("#9").addClass("currentHour")
        if (dt.getMinutes() < 10) {
            timeP.text(`9:0${dt.getMinutes()} AM`)
        } else { timeP.text(`9:${dt.getMinutes()} AM`) }
        if ((todoArray[0]) !== ("")) {
        $("#thisHour").text(todoArray[0]) } else {
            $("#thisHour").text("Nothing scheduled for this hour!")
        }
    }

    else if (($(dt.getHours())[0]) === 10) {
        $("#10").addClass("currentHour")
        if (dt.getMinutes() < 10) {
            timeP.text(`10:0${dt.getMinutes()} AM`)
        } else { timeP.text(`10:${dt.getMinutes()} AM`) }
        if ((todoArray[1]) !== ("")) {
            $("#thisHour").text(todoArray[1]) } else {
                $("#thisHour").text("Nothing scheduled for this hour!")
            }
    }

    else if (($(dt.getHours())[0]) === 11) {
        $("#11").addClass("currentHour")
        if (dt.getMinutes() < 10) {
            timeP.text(`11:0${dt.getMinutes()} AM`)
        } else { timeP.text(`11:${dt.getMinutes()} AM`) }
        if ((todoArray[2]) !== ("")) {
            $("#thisHour").text(todoArray[2]) } else {
                $("#thisHour").text("Nothing scheduled for this hour!")
            }
    }

    else if (($(dt.getHours())[0]) === 12) {
        $("#12").addClass("currentHour")
        if (dt.getMinutes() < 10) {
            timeP.text(`12:0${dt.getMinutes()} PM`)
        } else { timeP.text(`12:${dt.getMinutes()} PM`) }
        if ((todoArray[3]) !== ("")) {
            $("#thisHour").text(todoArray[3]) } else {
                $("#thisHour").text("Nothing scheduled for this hour!")
            }
    }

    else if (($(dt.getHours())[0]) === 13) {
        $("#13").addClass("currentHour")
        if (dt.getMinutes() < 10) {
            timeP.text(`1:0${dt.getMinutes()} PM`)
        } else { timeP.text(`1:${dt.getMinutes()} PM`) }
        if ((todoArray[4]) !== ("")) {
            $("#thisHour").text(todoArray[4]) } else {
                $("#thisHour").text("Nothing scheduled for this hour!")
            }
    }

    else if (($(dt.getHours())[0]) === 14) {
        $("#14").addClass("currentHour")
        if (dt.getMinutes() < 10) {
            timeP.text(`2:0${dt.getMinutes()} PM`)
        } else { timeP.text(`2:${dt.getMinutes()} PM`) }
        if ((todoArray[5]) !== ("")) {
            $("#thisHour").text(todoArray[5]) } else {
                $("#thisHour").text("Nothing scheduled for this hour!")
            }
    }

    else if (($(dt.getHours())[0]) === 15) {
        $("#15").addClass("currentHour")
        if (dt.getMinutes() < 10) {
            timeP.text(`3:0${dt.getMinutes()} PM`)
        } else { timeP.text(`3:${dt.getMinutes()} PM`) }
        if ((todoArray[6]) !== ("")) {
            $("#thisHour").text(todoArray[6]) } else {
                $("#thisHour").text("Nothing scheduled for this hour!")
            }
    }

    else if (($(dt.getHours())[0]) === 16) {
        $("#16").addClass("currentHour")
        if (dt.getMinutes() < 10) {
            timeP.text(`4:0${dt.getMinutes()} PM`)
        } else { timeP.text(`4:${dt.getMinutes()} PM`) }
        if ((todoArray[7]) !== ("")) {
            $("#thisHour").text(todoArray[7]) } else {
                $("#thisHour").text("Nothing scheduled for this hour!")
            }
    }

    else if (($(dt.getHours())[0]) === 17) {
        $("#17").addClass("currentHour")
        if (dt.getMinutes() < 10) {
            timeP.text(`5:0${dt.getMinutes()} PM`)
        } else { timeP.text(`5:${dt.getMinutes()} PM`) }
        $("#thisHour").text(todoArray[8])
        if ((todoArray[8]) !== ("")) {
            $("#thisHour").text(todoArray[0]) } else {
                $("#thisHour").text("Nothing scheduled for this hour!")
            }
    }

    else if (($(dt.getHours())[0]) === 18) {
        if (dt.getMinutes() < 10) {
            timeP.text(`6:0${dt.getMinutes()} PM`)
        } else { timeP.text(`6:${dt.getMinutes()} PM`) }
    }

    else if (($(dt.getHours())[0]) === 19) {
        if (dt.getMinutes() < 10) {
            timeP.text(`7:0${dt.getMinutes()} PM`)
        } else { timeP.text(`7:${dt.getMinutes()} PM`) }
    }

    else if (($(dt.getHours())[0]) === 20) {
        if (dt.getMinutes() < 10) {
            timeP.text(`8:0${dt.getMinutes()} PM`)
        } else { timeP.text(`8:${dt.getMinutes()} PM`) }
    }

    else if (($(dt.getHours())[0]) === 21) {
        if (dt.getMinutes() < 10) {
            timeP.text(`9:0${dt.getMinutes()} PM`)
        } else { timeP.text(`9:${dt.getMinutes()} PM`) }
    }

    else if (($(dt.getHours())[0]) === 22) {
        if (dt.getMinutes() < 10) {
            timeP.text(`10:0${dt.getMinutes()} PM`)
        } else { timeP.text(`10:${dt.getMinutes()} PM`) }
    }

    else if (($(dt.getHours())[0]) === 23) {
        if (dt.getMinutes() < 10) {
            timeP.text(`11:0${dt.getMinutes()} PM`)
        } else { timeP.text(`11:${dt.getMinutes()} PM`) }
    }

    $("button").on("click", function () {
        var textbox = (this.parentElement.parentElement.getElementsByTagName("textarea")[0]);
        var newNotes = (textbox).value
        textbox = $(textbox)
        var index = parseInt(textbox.attr("index"))
        todoArray[index] = newNotes
        localStorage.setItem("todo array", JSON.stringify(todoArray))
        console.log(localStorage["todo array"])
        pageOpen();

    });
}

pageOpen();