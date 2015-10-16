/*
    Build a table
                    
    Excercise #1 for EJS in CH13
    http://eloquentjavascript.net/13_dom.html#h_g/5UC3zznV
    
    - Turns an array of objects all with the same keys into a nicely formatted table
    - output can be seen with 'table.html'
*/
function buildTable(data) {
    var table = document.createElement("table");
    var HTMLrow, td, tdText;
    var count = 0;
    
    data.forEach(function(row) {
      
      	// create heading row
    	if (table.childNodes.length === 0) {
	    	HTMLrow = document.createElement("tr");
          	Object.keys(row).forEach(function(heading) {
            	td = document.createElement("th");
                tdText = document.createTextNode(heading);
				td.appendChild(tdText);
				HTMLrow.appendChild(td);
				table.appendChild(HTMLrow);
            });
        }
        
        HTMLrow = document.createElement("tr");
        
        Object.keys(row).forEach(function(val) {
	       td = document.createElement("td");
           tdText = document.createTextNode(row[val]);
           td.appendChild(tdText);
           HTMLrow.appendChild(td);
           table.appendChild(HTMLrow); 
        });
        
    });
    
    return table;
}
  
  var MOUNTAINS = [
	  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
	  {name: "Everest", height: 8848, country: "Nepal"},
	  {name: "Mount Fuji", height: 3776, country: "Japan"},
	  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
	  {name: "Vaalserberg", height: 323, country: "Netherlands"},
	  {name: "Denali", height: 6168, country: "United States"},
	  {name: "Popocatepetl", height: 5465, country: "Mexico"}
  ];
  
  document.body.appendChild(buildTable(MOUNTAINS));