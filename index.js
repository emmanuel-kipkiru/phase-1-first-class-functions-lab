function returnFirstTwoDrivers(drivers ){
   return drivers.slice(0,2)
}

function returnLastTwoDrivers(drivers){
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]


function createFareMultiplier(fr){
    function unnamed (quad){
        let quadroupled = fr * quad;
        return(quadroupled)
    }
    return unnamed
}

function fareDoubler(fare){
    return fare*2
}

function fareTripler(fare){
    return fare*3
}
function selectDifferentDrivers(arryOfDrivers, returnDrivers){
    let selectingDrivers = returnDrivers(arryOfDrivers);return selectingDrivers;
}
