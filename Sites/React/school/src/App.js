import React from 'react';
import './App.css';
import styled from 'styled-components'
import TableMaterialUI  from "./components/TableMaterialUI/TableMaterialUIContainer";
const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`
const App = ()=>{

    return (
        <div className="App">

            <Styles>
                <TableMaterialUI   />
            </Styles>

        </div>
    );
}


    // componentDidMount() {
    //     fetch('http://localhost:3000/Schoolboy')
    //         .then(res => res.json())
    //         .then((data) => {
    //             console.log( data )
    //         })
    //         .catch(console.log)
    //
    // }

export default App;