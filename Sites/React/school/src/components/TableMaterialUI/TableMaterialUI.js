import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from "axios";

const columns = [
    { Id: 1, Title: '#', },
    { Id: 2, Title: 'Ученик', },
    {
        Id: 4,
        Title: "1/2"
    },
    {
        Id: 5,
        Title: "2/2"
    },
    {
        Id: 6,
        Title: "3/2"
    },
    {
        Id: 7,
        Title: "5/2"
    },
    {
        Id: 8,
        Title: "3/3"
    },
    {
        Id: 9,
        Title: "4/1"
    }
]

const rate = [
    {
        Id: 19,
        Title: "Н",
        SchoolboyId: 25,
        ColumnId: 7
    },
    {
        Id: 21,
        Title: "Н",
        SchoolboyId: 21,
        ColumnId: 4
    },
    {
        Id: 22,
        Title: "Н",
        SchoolboyId: 27,
        ColumnId: 5
    },
    {
        Id: 24,
        Title: "Н",
        SchoolboyId: 5,
        ColumnId: 9
    }
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

export default function TableMaterialUI({ schoolboys, createSchoolchild }) {
    const classes = useStyles();

    let [absent, setAbsent] = useState('');
    let [schoolboy, setSchoolboy] = useState([]);

    useEffect(() => {

        axios
            // .get("http://localhost:8080/Schoolboy")
            .get("http://94.131.246.109:5555/v1/2/Schoolboy")
            .then(response => {
                    setSchoolboy(response.data)
                }
            );
    }, []);

    const handleValue = (e) => {
        if (e.target.innerText === '') {
            e.target.innerText = 'Н'
        } else if (e.target.innerText === 'Н') {
            e.target.innerText = ''
        }
    }

    return (
        <div>
            <button onClick={createSchoolchild}>async schoolboy</button>
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.Id}
                                    >
                                        {column.Title}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {schoolboy.map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.Id}>

                                        {columns.map((column, index) => {

                                            let progulshicTitle;
                                            let columnId;

                                            rate.forEach((item) => {
                                                if (item.SchoolboyId === row.Id) {
                                                    progulshicTitle = item.Title;
                                                    columnId = item.ColumnId;
                                                }
                                            })

                                            return (

                                                <TableCell key={column.Id} onClick={(e) => handleValue(e)}>
                                                    {index === 0 && row.Id}
                                                    {index === 1 && `${row.FirstName + ' ' + row.SecondName + ' ' + row.LastName}`}
                                                    {column.Id === columnId && progulshicTitle}

                                                </TableCell>
                                            );

                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>

    );
}
