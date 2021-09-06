import MaterialTable from 'material-table';
import React, { useState } from 'react';
import PostData from '../assets/sample.json';

var data;

// using sessions to store added data
if (sessionStorage.getItem('myData') === null) {
  data = PostData.table;

} else {
  data = JSON.parse(sessionStorage.getItem('myData'));
}

// for (var i = 0; i < data.length; i++ ) {
//   console.log(data[i].ppu);
// }

// group by ppu
var groups = data.map(function(value, index) {return value['ppu']});
// console.log("Groups", groups);

// group by number of counts
const counts = {};
groups.forEach(ppu => {
  counts[ppu] = (counts[ppu] || 0) + 1
});

// remove all duplicated
var filtered = Object.fromEntries(Object.entries(counts).filter(([k,v]) => v===1));
filtered = Object.keys(filtered);

// console.log("counts: ", counts);
console.log("filtered: ", filtered);

var finalArr = []

for (var i = 0; i < data.length; i++ ) {
  console.log(data[i].ppu);
  for (var x = 0; x<filtered.length; x++ ) {

    if ((data[i].ppu).toString() === filtered[x]) {
      finalArr.push(data[i]);
      console.log('hello');
    }
  }
}

console.log("Final arr: ", finalArr);

const columns = [
  {
    title: 'ID',
    field: 'id',
  },
  {
    title: 'Type',
    field: 'type',
  },
  {
    title: 'Name',
    field: 'name',
  },
  {
    title: 'ppu',
    field: 'ppu',
  },
  {
    title: 'Student',
    field: 'student',
  },
];


export default function Task1() {

    const [id, setId] = useState();
    const [type, setType] = useState();
    const [name, setName] = useState();
    const [ppu, setPpu] = useState();
    const [student, setStudent] = useState();


    const submitButton = (event) =>{

        alert('Record added.');

        var dest = {
                "id": id,
                "type": type,
                "name": name,
                "ppu": ppu,
                "student": student
              };
        data.push(dest);
        sessionStorage.setItem('myData', JSON.stringify(data));
        console.log(data);

    };


    return (
      <div>
        <h1>Task 1</h1>
        <MaterialTable
          columns={columns}
          data={finalArr}
          title="Table"
          options={{
            paging:true,
            pageSize:15,
          }}
        />

        <br></br>
        <br></br>

        <form>

          <input
            type="text"
            name="id"
            onChange={e => setId(e.target.value)}
            placeholder="id"
            value={id}/> <br></br>

          <input
            type="text"
            name="type"
            onChange={e => setType(e.target.value)}
            placeholder="type"
            value={type}/> <br></br>

          <input
            type="text"
            name="name"
            onChange={e => setName(e.target.value)}
            placeholder="name"
            value={name}/> <br></br>

          <input
            type="text"
            name="ppu"
            onChange={e => setPpu(e.target.value)}
            placeholder="ppu"
            value={ppu}/> <br></br>

          <input
            type="text"
            name="student"
            onChange={e => setStudent(e.target.value)}
            placeholder="student"
            value={student}/>

          <br></br>
          <br></br>
          <button onClick={submitButton}>Add</button>
          <br></br>
          <br></br>
{/*          <div>{id}</div>
          <div>{type}</div>
          <div>{name}</div>
          <div>{ppu}</div>
          <div>{student}</div>*/}

        </form>

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />

      </div>
  )
};




// function hash(o){
//     return o.ppu;
// }

// var hashesFound = {};

// data.forEach(function(o){
//     hashesFound[hash(o)] = o;
// })

// data = Object.keys(hashesFound).map(function(k){
//     return hashesFound[k];
// })
