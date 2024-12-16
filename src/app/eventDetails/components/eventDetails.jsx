import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function createData(name, calories, fat, carbs) {
  return { name, calories, fat, carbs};
}
const rows = [
  createData('UCLM FOCUS', 'Photographer', 6, 'Done'),
  createData('Coastal Clean Up', 'Cleaning, Organizing, Teamwork', 20, 'Done'),
  createData('Medical Assistance', 'First Aid', 10, 'Ongoing'),
  createData('Blood Donation', 'Any', '-', 'Ongoing'),
  createData('Brush & Canvas', 'Photographer, Videographer', '10', 'Ongoing'),
];
export default function BasicTable() {
  return (
    <TableContainer className='mt-16' component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><strong>Event Name</strong></TableCell>
            <TableCell align="center"><strong>Skill Requirements</strong></TableCell>
            <TableCell align="center"><strong>Volunteers</strong></TableCell>
            <TableCell align="center"><strong>Status</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}