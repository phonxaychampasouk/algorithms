 /*
 loop through startTime and endTime
 check index for both times
 check if(startTime >= queryTime >=endTime) 
 if true add to studentCount.
   
 
 */
var busyStudent = function(startTime, endTime, queryTime) {
    let studentCount = 0;
    for(let student = 0; student < startTime.length; student += 1 ){
        if(startTime[student] <= queryTime && queryTime <= endTime[student])
            {
                studentCount += 1;
            }
    }
    return studentCount;
};