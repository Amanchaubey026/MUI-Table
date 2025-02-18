/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Avatar,
  Box,
  Typography,
  styled,
} from '@mui/material';

// Interfaces
export interface User {
  id: string;
  firstname: string;
  lastname: string;
  username: string;
  status: string;
  role: string;
  email: string;
  teams: string[];
  avatar: string;
}



// Styled Components
const StyledTableContainer = styled(TableContainer)({
  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
  borderRadius: '8px',
  border: '1px solid #E5E7EB',
  backgroundColor: 'white',
});

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  padding: '12px 16px',
  '&.MuiTableCell-head': {
    backgroundColor: 'white',
    color: '#6B7280',
    fontSize: '13px',
    fontWeight: 500,
    borderBottom: '1px solid #E5E7EB',
  },
  '&.MuiTableCell-body': {
    fontSize: '14px',
    color: '#111827',
    borderBottom: '1px solid #E5E7EB',
  },
}));

const StyledTableRow = styled(TableRow)({
  '&:hover': {
    backgroundColor: '#F9FAFB',
  },
});

const StatusChip = styled('span')({
  backgroundColor: '#EFF6FF',
  color: '#2563EB',
  padding: '2px 8px',
  borderRadius: '12px',
  fontSize: '13px',
  fontWeight: 500,
});

const TeamChip = styled('span')({
  display: 'inline-block',
  backgroundColor: '#EFF6FF',
  color: '#2563EB',
  padding: '2px 8px',
  borderRadius: '12px',
  fontSize: '13px',
  fontWeight: 500,
  marginRight: '4px',
});

const StyledCheckbox = styled(Checkbox)({
  padding: '0 12px',
  '&.Mui-checked': {
    color: '#2563EB',
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
});

const PaginationContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '12px 16px',
  borderTop: '1px solid #E5E7EB',
});

const PaginationBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
});

const PageButton = styled('button')<{ active?: boolean }>(({ active }) => ({
  minWidth: '28px',
  height: '28px',
  padding: '4px 8px',
  border: '1px solid #E5E7EB',
  backgroundColor: active ? '#2563EB' : 'white',
  color: active ? 'white' : '#6B7280',
  fontSize: '14px',
  borderRadius: '4px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '&:hover': {
    backgroundColor: active ? '#2563EB' : '#F9FAFB',
  },
  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
}));

const PageText = styled(Typography)({
  color: '#6B7280',
  fontSize: '14px',
  userSelect: 'none',
});

const ActionDot = styled('div')({
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  backgroundColor: '#D1D5DB',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#9CA3AF',
  },
});

// Main Component
interface DataTableProps {
  data: User[];
}

export const DataTable: React.FC<DataTableProps> = ({ data }) => {
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<string[]>([]);
  const rowsPerPage = 10;
  const totalPages = Math.ceil(data.length / rowsPerPage);

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

  const isSelected = (id: string) => selected.indexOf(id) !== -1;

  return (
    <StyledTableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell padding="checkbox">
              <StyledCheckbox
                indeterminate={selected.length > 0 && selected.length < data.length}
                checked={data.length > 0 && selected.length === data.length}
                onChange={handleSelectAllClick}
              />
            </StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>Role</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>Teams</StyledTableCell>
            <StyledTableCell align="right">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            .slice((page - 1) * rowsPerPage, page * rowsPerPage)
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
                    <StyledCheckbox checked={isItemSelected} />
                  </StyledTableCell>
                  <StyledTableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Avatar
                        src={row.avatar}
                        sx={{ 
                          width: 32, 
                          height: 32, 
                          backgroundColor: '#F3F4F6',
                          border: '1px solid #E5E7EB'
                        }}
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
                    <StatusChip>{row.status}</StatusChip>
                  </StyledTableCell>
                  <StyledTableCell>{row.role}</StyledTableCell>
                  <StyledTableCell>{row.email}</StyledTableCell>
                  <StyledTableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {row.teams.map((team) => (
                        <TeamChip key={team}>{team}</TeamChip>
                      ))}
                      <Typography 
                        sx={{ 
                          color: '#6B7280', 
                          fontSize: '13px',
                          marginLeft: '8px'
                        }}
                      >
                        +5
                      </Typography>
                    </Box>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                      <ActionDot />
                      <ActionDot />
                    </Box>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
        </TableBody>
      </Table>
      <PaginationContainer>
        <PageText>Prev</PageText>
        <PaginationBox>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <PageButton
              key={pageNum}
              active={page === pageNum}
              onClick={() => setPage(pageNum)}
            >
              {pageNum}
            </PageButton>
          ))}
        </PaginationBox>
        <PageText>Next</PageText>
      </PaginationContainer>
    </StyledTableContainer>
  );
};