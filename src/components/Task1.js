import React, { Component, useState } from 'react';
import PostData from '../assets/sample.json';
import MaterialTable from 'material-table';
import ReactSession from 'react-client-session';

var data = PostData.table;

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

    const [inputField , setInputField] = useState({
        id: '',
    });

    const inputsHandler = (e) =>{
        setInputField( {[e.target.name]: e.target.value} )
    };

    // prevent submitting
    const submitButton = (event) =>{
        alert(inputField.id);
        event.preventDefault();
        var dest = {
                "id": "2000",
                "type": "hello",
                "name": "Cake1",
                "ppu": 0.5,
                "student": "excellence"
              };
        data = [...data, dest]


    };

    function renderMain() {

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
            pageSize:5,       // make initial page size
          }}
        />

        <form>

        <br></br>
        <br></br>

          <input
            type="id"
            name="id"
            onChange={inputsHandler}
            placeholder="id"
            value={inputField.id}/>

          <br></br>
          <br></br>
          <button onClick={submitButton}>Add</button>
          <br></br>
          <br></br>
          <div>{inputField.id}</div>

        </form>

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />

      </div>
  )
};



{/*          <label for="type">type:</label><br></br>
          <input type="text" id="type" name="type" defaultValue=""/><br></br>
          <label for="name">name:</label><br></br>
          <input type="text" id="name" name="name" defaultValue=""/><br></br>
          <label for="ppu">ppu:</label><br></br>
          <input type="text" id="ppu" name="ppu" defaultValue=""/><br></br>
          <label for="student">student:</label><br></br>
          <input type="text" id="student" name="student" defaultValue=""/><br></br>*/}
