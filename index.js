const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    { year: "2012", result: "N/A"},
    { year: "2011", result: "W"},
    { year: "2010", result: "L"},
    { year: "2009", result: "L"},
    //... more records go here...
  ]
  
  function superbowlWin(array) {
    let winningObject = array.find(obj => obj.result === "W");
        if (winningObject) {
            return winningObject.year;
                } else {
                return undefined;
    }
  }
  console.log(winningObject);
