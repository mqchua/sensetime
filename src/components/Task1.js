import React, { Component, useState } from 'react';
import PostData from '../assets/sample.json';
import MaterialTable from 'material-table';
import ReactSession from 'react-client-session';

var data;

// using sessions to store added data
if (sessionStorage.getItem('myData') === null) {
  data = PostData.table;

} else {
  data = JSON.parse(sessionStorage.getItem('myData'));
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
        data.push(dest);
        sessionStorage.setItem('myData', JSON.stringify(data));
        console.log(data);

    };


    return (
      <div>
        <h1>Task 1</h1>
        <MaterialTable
          columns={columns}
          data={data}
          title="Table"
          options={{
            paging:true,
            pageSize:5,
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
