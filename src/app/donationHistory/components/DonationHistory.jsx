import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

function createData(eventName, referenceNumber, eventType, donatedAt, action) {
  return { eventName, referenceNumber, eventType, donatedAt, action };
}

const rows = [
  createData(
    'Charity Event Fundraiser',
    '82f3b45e-a264-4d93-bb5e-b03ba36e1b20',
    'Donation Event',
    'December 05, 2024 12:45 PM',
    'View Details'
  ),
  createData(
    'Philantropic Enterprise',
    '3d827038-2e85-4032-8f34-525ab5feb6f0',
    'Donation Event',
    'December 12, 2024 03:07 PM',
    'View Details'
  ),
  createData(
    'Pledge Campaign',
    '2x981729-2e69-2013-8f34-188s8486adv1',
    'Donation Event',
    'December 22, 2024 03:07 PM',
    'View Details'
  ),
];

export default function DonationHistoryTable() {
  return (
    <TableContainer component={Paper} sx={{ marginTop: 8, borderRadius: '8px' }}>
      <Table sx={{ minWidth: 650 }} aria-label="donation history table">
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: '#f5f5f5',
              fontWeight: 'bold',
            }}
          >
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>
              Event Name
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>
              Reference Number
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>
              Event Type
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>
              Date
            </TableCell>
            <TableCell align="center" sx={{ fontWeight: 'bold' }}>
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                '&:nth-of-type(odd)': {
                  backgroundColor: '#f9f9f9',
                },
              }}
            >
              <TableCell align="center">{row.eventName}</TableCell>
              <TableCell align="center">{row.referenceNumber}</TableCell>
              <TableCell align="center">{row.eventType}</TableCell>
              <TableCell align="center">{row.donatedAt}</TableCell>
              <TableCell align="center">
                <Button variant="contained" color="primary" size="small">
                  {row.action}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
