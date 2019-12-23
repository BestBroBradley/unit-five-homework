var dateP = $("#dateP")
var timeP = $("#timeP")

var dt = new Date();

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
    timeP.text(`12:${dt.getMinutes()} AM`)
} else if (($(dt.getHours())[0]) === 1) {
  timeP.text(`1:${dt.getMinutes()} AM`)
} else if (($(dt.getHours())[0]) === 2) {
    timeP.text(`2:${dt.getMinutes()} AM`)
  } else if (($(dt.getHours())[0]) === 3) {
    timeP.text(`3:${dt.getMinutes()} AM`)
  } else if (($(dt.getHours())[0]) === 4) {
    timeP.text(`4:${dt.getMinutes()} AM`)
  } else if (($(dt.getHours())[0]) === 5) {
    timeP.text(`5:${dt.getMinutes()} AM`)
  } else if (($(dt.getHours())[0]) === 6) {
    timeP.text(`6:${dt.getMinutes()} AM`)
  } else if (($(dt.getHours())[0]) === 7) {
    timeP.text(`7:${dt.getMinutes()} AM`)
  } else if (($(dt.getHours())[0]) === 8) {
    timeP.text(`8:${dt.getMinutes()} AM`)
  } else if (($(dt.getHours())[0]) === 9) {
    timeP.text(`9:${dt.getMinutes()} AM`)
  } else if (($(dt.getHours())[0]) === 10) {
    timeP.text(`10:${dt.getMinutes()} AM`)
  } else if (($(dt.getHours())[0]) === 11) {
    timeP.text(`11:${dt.getMinutes()} AM`)
  } else if (($(dt.getHours())[0]) === 12) {
    timeP.text(`12:${dt.getMinutes()} PM`)
  } else if (($(dt.getHours())[0]) === 13) {
    timeP.text(`1:${dt.getMinutes()} PM`)
  } else if (($(dt.getHours())[0]) === 14) {
    timeP.text(`2:${dt.getMinutes()} PM`)
  } else if (($(dt.getHours())[0]) === 15) {
    timeP.text(`3:${dt.getMinutes()} PM`)
  } else if (($(dt.getHours())[0]) === 16) {
    timeP.text(`4:${dt.getMinutes()} PM`)
  } else if (($(dt.getHours())[0]) === 17) {
    timeP.text(`5:${dt.getMinutes()} PM`)
  } else if (($(dt.getHours())[0]) === 18) {
    timeP.text(`6:${dt.getMinutes()} PM`)
  } else if (($(dt.getHours())[0]) === 19) {
    timeP.text(`7:${dt.getMinutes()} PM`)
  } else if (($(dt.getHours())[0]) === 20) {
    timeP.text(`8:${dt.getMinutes()} PM`)
  } else if (($(dt.getHours())[0]) === 21) {
    timeP.text(`9:${dt.getMinutes()} PM`)
  } else if (($(dt.getHours())[0]) === 22) {
    timeP.text(`10:${dt.getMinutes()} PM`)
  } else if (($(dt.getHours())[0]) === 23) {
    timeP.text(`11:${dt.getMinutes()} PM`)
  }