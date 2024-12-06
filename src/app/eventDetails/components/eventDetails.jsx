import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // Hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, skillRequirements, volunteers, status) {
  return { name, skillRequirements, volunteers, status };
}

const rows = [
  createData('UCLM FOCUS', 'Photographer', 6, 'Done'),
  createData('Coastal Clean Up', 'Cleaning, Organizing, Teamwork', 20, 'Done'),
  createData('Medical Assistance', 'First Aid', 10, 'Ongoing'),
  createData('Blood Donation', 'Any', '-', 'Ongoing'),
];

export default function StyledTable() {
  return (
    <TableContainer component={Paper} className="mt-16">
      <Table sx={{ minWidth: 700 }} aria-label="styled table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Event Name</StyledTableCell>
            <StyledTableCell>Skill Requirements</StyledTableCell>
            <StyledTableCell>Volunteers</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell>{row.skillRequirements}</StyledTableCell>
              <StyledTableCell align="center">{row.volunteers}</StyledTableCell>
              <StyledTableCell align="center">{row.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
