import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Avatar,
  Box,
  Typography,
  Chip,
  TablePagination,
  styled,
} from '@mui/material';
import { User } from '../interfaces/user';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  padding: '16px',
  '&.MuiTableCell-head': {
    backgroundColor: '#F9FAFB',
    color: '#6B7280',
    fontSize: '12px',
    fontWeight: 500,
    borderTop: '1px solid #E5E7EB',
    borderBottom: '1px solid #E5E7EB',
  },
  '&.MuiTableCell-body': {
    fontSize: '14px',
    borderBottom: '1px solid #E5E7EB',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:hover': {
    backgroundColor: '#F9FAFB',
  },
}));

const StatusChip = styled(Chip)({
  backgroundColor: '#EFF6FF',
  color: '#2563EB',
  height: '24px',
  borderRadius: '16px',
  '& .MuiChip-label': {
    fontSize: '14px',
    fontWeight: 500,
    padding: '2px 8px',
  },
});

const TeamChip = styled(Chip)({
  backgroundColor: '#F3F4F6',
  color: '#374151',
  height: '24px',
  borderRadius: '16px',
  '& .MuiChip-label': {
    fontSize: '14px',
    fontWeight: 500,
    padding: '2px 8px',
  },
});

interface DataTableProps {
  data: User[];
}

export const DataTable: React.FC<DataTableProps> = ({ data }) => {
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const rowsPerPage = 10;

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = data.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (id: string) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const isSelected = (id: string) => selected.indexOf(id) !== -1;

  return (
    <Paper elevation={0}>
      <TableContainer>
        <Table sx={{ minWidth: 750 }}>
          <TableHead>
            <TableRow>
              <StyledTableCell padding="checkbox">
                <Checkbox
                  indeterminate={selected.length > 0 && selected.length < data.length}
                  checked={data.length > 0 && selected.length === data.length}
                  onChange={handleSelectAllClick}
                  sx={{
                    color: '#D1D5DB',
                    '&.Mui-checked': {
                      color: '#2563EB',
                    },
                  }}
                />
              </StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell>Role</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Teams</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                const isItemSelected = isSelected(row.id);

                return (
                  <StyledTableRow
                    hover
                    onClick={() => handleClick(row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                  >
                    <StyledTableCell padding="checkbox">
                      <Checkbox
                        checked={isItemSelected}
                        sx={{
                          color: '#D1D5DB',
                          '&.Mui-checked': {
                            color: '#2563EB',
                          },
                        }}
                      />
                    </StyledTableCell>
                    <StyledTableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Avatar
                          src={row.avatar}
                          sx={{ width: 32, height: 32, border: '1px solid #E5E7EB' }}
                        />
                        <Box>
                          <Typography
                            sx={{
                              fontSize: '14px',
                              fontWeight: 500,
                              color: '#111827',
                              lineHeight: '20px',
                            }}
                          >
                            {row.firstname} {row.lastname}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: '14px',
                              color: '#6B7280',
                              lineHeight: '20px',
                            }}
                          >
                            @{row.username}
                          </Typography>
                        </Box>
                      </Box>
                    </StyledTableCell>
                    <StyledTableCell>
                      <StatusChip label={row.status} />
                    </StyledTableCell>
                    <StyledTableCell>{row.role}</StyledTableCell>
                    <StyledTableCell>{row.email}</StyledTableCell>
                    <StyledTableCell>
                      <Box sx={{ display: 'flex', gap: 0.5 }}>
                        {row.teams.map((team) => (
                          <TeamChip key={team} label={team} />
                        ))}
                      </Box>
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPageOptions={[10]}
        sx={{
          borderTop: '1px solid #E5E7EB',
          '.MuiTablePagination-selectLabel, .MuiTablePagination-displayedRows': {
            display: 'none',
          },
        }}
      />
    </Paper>
  );
};