"use strict";

var selectQuery = "SELECT * FROM student WHERE id = 1";

function generateSelectQuery(numOfQuery){
  let queries = [];
  for(var i = 1; i<= numOfQuery ; i++)
  {

      let query = "SELECT * FROM student WHERE id = " + i
      queries.push(query);
  }
  return queries;
}

let queries = generateSelectQuery(10);

console.log(queries);

var insertQuery = "INSERT INTO student(id, name, lName, age, phNumber) VALUES (1, 'Name-1', 'LName-1', '1', '1')";
var studentInfo = {"id":"1", "name":"Name-1", "lName":"lName-1", "age":"1", "phNumber":"1"};
function generateInsertQuery(studentInfo)
{
	let query = " INSERT INTO student(";
	let columnClause = "";
	let valuesClause = "";
	for(let key in studentInfo)
	{
	   columnClause = columnClause + key + ", ";
	   valuesClause = valuesClause + studentInfo[key] + ", "; 
	}

   query = query + columnClause + ") VALUES (" + valuesClause + ")";
   query = query.slice(0,-1);
   console.log(query);
   return query;
}
   
  generateInsertQuery(studentInfo);

  function generateUpdateQuery(studentInfo)
  {
    let query = "Update student set"
    let columnClause = " ";
     for(let key in studentInfo)
     {
       columnClause = columnClause  +  key + "='" + studentInfo[key] + "', ";
     }
     query = query + columnClause;
     query = query.slice(0,-1);
     console.log(query);
  }

  generateUpdateQuery(studentInfo);

