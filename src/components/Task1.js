import MaterialTable from 'material-table';
import React, { useState } from 'react';
import PostData from '../assets/sample.json';
import { TextField, Button } from '@material-ui/core';

var data;
var finalArr = [];

// using sessions to store added data
if (sessionStorage.getItem('myData') === null) {
  data = PostData.table;

} else {
  data = JSON.parse(sessionStorage.getItem('myData'));
}

// group by ppu
var groups = data.map(function(value, index) {return value['ppu']});

// group by number of counts
const counts = {};
groups.forEach(ppu => {
  counts[ppu] = (counts[ppu] || 0) + 1
});

// remove all duplicates
var filtered = Object.fromEntries(Object.entries(counts).filter(([k,v]) => v===1));
filtered = Object.keys(filtered);


// add unique obj into finalarr
for (var i = 0; i < data.length; i++ ) {
  console.log(data[i].ppu);
  for (var x = 0; x<filtered.length; x++ ) {

    if ((data[i].ppu).toString() === filtered[x]) {
      finalArr.push(data[i]);
    }
  }
}

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

        // add data and store in sessions
        data.push(dest);
        sessionStorage.setItem('myData', JSON.stringify(data));
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
            pageSize:5,
          }}
        />

        <br></br>
        <br></br>

        <form onSubmit={submitButton} autoComplete="off">

          <TextField required
            id="id"
            onChange={e => setId(e.target.value)}
            label="id"
            value={id}/> <br></br>

          <TextField required
            id="type"
            onChange={e => setType(e.target.value)}
            label="type"
            value={type}/> <br></br>

          <TextField required
            id="name"
            onChange={e => setName(e.target.value)}
            label="name"
            value={name}/> <br></br>

          <TextField required
            id="ppu"
            onChange={e => setPpu(e.target.value)}
            label="ppu"
            value={ppu}/> <br></br>

          <TextField required
            id="student"
            onChange={e => setStudent(e.target.value)}
            label="student"
            value={student}/>

          <br></br>
          <br></br>
          <Button type="submit" variant="outlined" color="primary">Add</Button>
          <br></br>
          <br></br>

        </form>

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />

      </div>
  )
};

