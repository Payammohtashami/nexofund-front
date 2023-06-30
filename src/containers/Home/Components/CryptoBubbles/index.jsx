import React from 'react';
import styles from './styles';
import { Box, IconButton, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TableSortLabel, Typography } from '@mui/material';
import Icon from 'components/Icon';

const CryptoBubbles = () => {
    return (
        <Box sx={{mb: '48px'}}>
            <Stack direction='row' justifyContent='space-between' sx={{mb: 1}}>
                <Typography className='title'>Crypto Bubble</Typography>
            </Stack>
            <Box sx={styles.wrapper}>
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                    >
                        <EnhancedTableHead />
                        <TableBody sx={{
                            'tr': {
                                '&:last-child':{
                                    'td': {
                                        border: 'none'
                                    }
                                }
                            }
                        }}>
                        {[1, 2, 3].map((row, index) => {
                            return (
                            <TableRow
                                hover
                                key={index}
                                sx={styles.borderColor}
                            >
                                <TableCell align="left" sx={{p: '0 0 0 24px'}}>
                                    <Stack direction='row' gap='6px' alignItems='center'>
                                        <Icon name='bitcoin' size='24' />
                                        <Typography sx={styles.tableText}>Bitcoin</Typography>
                                    </Stack>
                                </TableCell>
                                <TableCell>
                                    <Typography sx={styles.tableText}>$520,71B</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography sx={styles.tableText}>$520,71B</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography sx={styles.tableText}>$10.00B</Typography>
                                </TableCell>
                                <TableCell>
                                    <Stack direction='row' alignItems='center' justifyContent='center' sx={styles.increaseBox}>
                                        <Icon name='increase' size='16' />
                                        <Typography sx={styles.increaseBoxText}>2.2%</Typography>
                                    </Stack>
                                </TableCell>
                                <TableCell>
                                    <Stack direction='row' alignItems='center' justifyContent='center' sx={styles.decreaseBox}>
                                        <Icon name='decrease' size='16' />
                                        <Typography sx={styles.increaseBoxText}>2.2%</Typography>
                                    </Stack>
                                </TableCell>
                                <TableCell>
                                    <Stack direction='row' gap='16px'>
                                        <IconButton sx={styles.iconButton}>
                                            <Icon name='ArrowTop' size='16' />
                                        </IconButton>
                                        <IconButton sx={styles.iconButton}>
                                            <Icon name='ArrowBottom' size='16' />
                                        </IconButton>
                                    </Stack>
                                </TableCell>
                            </TableRow>
                            );
                        })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
};

function EnhancedTableHead() {
    const headCells = [
        {
          id: 'name',
          label: 'Name',
          numeric: false,
          disablePadding: true,
        },
        {
          id: 'price',
          label: 'Price',
          numeric: true,
          disablePadding: false,
        },
        {
          id: 'Marcet Cap',
          label: 'Marcet Cap',
          numeric: true,
          disablePadding: false,
        },
        {
            id: '24h Volume',
            label: '24h Volume',
            numeric: true,
            disablePadding: false,
        },
        {
            id: 'Hour',
            label: 'Hour',
            numeric: true,
            disablePadding: false,
        },
        {
            id: 'Day',
            label: 'Day',
            numeric: true,
            disablePadding: false,
        },
        {
            label: 'Dogecoin',
            numeric: true,
            disablePadding: false,
        },
      ];
    return (
      <TableHead>
        <TableRow sx={styles.borderColor}>
          {headCells.map((headCell) => (
            <TableCell 
                key={headCell.id} 
                sx={{'&:first-child': {
                    pl: '24px'
                }}}
            >
              <TableSortLabel>
                <Typography sx={{
                    fontSize: '16px',
                    fontWeight: 600,
                    lineHeight: '26px',
                    color: (theme) => theme.palette.solid.dark1,
                }}>
                    {headCell.label}
                </Typography>
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  }

export default CryptoBubbles;