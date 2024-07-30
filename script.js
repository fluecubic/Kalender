let year = 2024;
let month = 6;
let months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
let shortWeekdays = [ "mon", "di", "mi", "do", "fr", "sa","son"];
let Year = document.getElementById("Year");
let Month = document.getElementById("Month");
let Arrowleft = document.getElementById("Arrow-left");
let Arrowright = document.getElementById("Arrow-right");
let firstDayOfMonth;
let cells = [];
let n=0;
let row;

(function initalizeCells() {

    for (row = 1; row <= 6; row++) {
        for (let i = 0; i < shortWeekdays.length; i++) {
            
            cells[n] = document.getElementById(shortWeekdays[i] + row)
            n++
        }
    }
    return cells
})()

function respawnCells() {
    for (let i = 0; i < cells.length; i++) {  
     cells[i].style.border = "1px solid black"
    cells[i].style.height = "52px"
    cells[i].style.padding = "30px"
    cells[i].style.paddingtop = "15px"
    cells[i].style.paddingbottom = "15px"     
    }
    
}

function clearCells() {
    for (let i = 0; i < cells.length; i++) {
        switch (cells[i].innerHTML) {
            case "-5":
            case "-4":            
            case "-3":                        
            case "-2":            
            case "-1":            
            case "0" :           
            case "42":
            case "41":
            case "40":
            case "39":
            case "38":
            case "37":
            case "36":
            case "35":
            case "34":
            case "33":
            case "32":
            cells[i].innerHTML = ""    
                break;
        }
        
    }
    switch (month) {
        case 1:
        case 3:
        case 4:
        case 8:
        case 10:
        for (let i = 0; i < cells.length; i++) {
         if (cells[i].innerHTML == "31") {
            cells[i].innerHTML = ""
         }    
        }
        if (month==1) {
            if (year % 4 == 0) {

                for (let i = 0; i < cells.length; i++) {
                    if (cells[i].innerHTML == "30" ) {
                       cells[i].innerHTML = ""
                    }    
                   }      
            } else {
            for (let i = 0; i < cells.length; i++) {
                if (cells[i].innerHTML == "30" || cells[i].innerHTML == "29" ) {
                   cells[i].innerHTML = ""
                }    
               }      
            }
            
        }
            break;
    
    }
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].innerHTML == "") {
            cells[i].style.border = "0px"
            cells[i].style.height = "0px"
            cells[i].style.padding = "0px"
        }
        
    }
}


function setCells() {
   if (firstDayOfMonth == "mon1") {
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = i + 1
    }
   }
   if (firstDayOfMonth == "di1") {
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = i 
    }
   }
   if (firstDayOfMonth == "mi1") {
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = i - 1
    }
   }
   if (firstDayOfMonth == "do1") {
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = i - 2
    }
   }
   if (firstDayOfMonth == "fr1") {
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = i - 3
    }
   }
   if (firstDayOfMonth == "sa1") {
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = i - 4
    }
   }
   if (firstDayOfMonth == "son1") {
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = i - 5
    }
   }
   
}
function UpDate() {
    Month.innerHTML = months[month]
    Year.innerHTML = year
    //Umwandlung
    if (getFirstWeekdayofMonth()!=0) {
     firstDayOfMonth = shortWeekdays[getFirstWeekdayofMonth()-1] + "1";   
    } else{firstDayOfMonth = shortWeekdays[6] + "1";}
    respawnCells()
    setCells()
    clearCells()
} UpDate()

function Dateforward() {
    if (month == 11) {
        year++
        month = 0
    } else {
        month++
    }
    UpDate()
}

function Datebackward() {
    if (month == 0) {
        year--
        month = 11
    } else {
        month--
    }
    UpDate()
}

function getFirstWeekdayofMonth() {
    const firstDayOfMonthDate = new Date(year, month, 1);
    return firstDayOfMonthDate.getDay();
}




Arrowleft.onclick = Datebackward;
Arrowright.onclick = Dateforward;