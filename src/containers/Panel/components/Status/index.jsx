import React, { useRef } from 'react';
import styles from './styles';
import Icon from 'components/Icon';
import { Box, Button, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

const Status = () => {
    const ref = useRef(null);
    const prev = () => {
        requestAnimationFrame(() => {
          const scrollLeft = ref.current.scrollLeft;
          ref.current.scrollLeft = scrollLeft - 1000;
        });
      };
    
      const next = () => {
        requestAnimationFrame(() => {
          const scrollLeft = ref.current.scrollLeft;
          ref.current.scrollLeft = scrollLeft + 1000;
        });
      };
    return (
        <Box>
            <Typography sx={styles.title}>Status</Typography>
            <Box sx={styles.wrapper}>
                <TableContainer ref={ref} sx={{
                    transition: 'all 0.2s ease',
                    scrollBehavior: "smooth",
                }}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow sx={styles.headerTableRow}>
                                <TableCell sx={styles.headerTableItem}>Coin</TableCell>
                                <TableCell sx={styles.headerTableItem}>Position</TableCell>
                                <TableCell sx={styles.headerTableItem}>status</TableCell>
                                <TableCell sx={styles.headerTableItem}>Take Profit</TableCell>
                                <TableCell sx={styles.headerTableItem}>Stop Loss</TableCell>
                                <TableCell sx={styles.headerTableItem}>Start Price</TableCell>
                                <TableCell sx={styles.headerTableItem}>End Price</TableCell>
                                <TableCell sx={styles.headerTableItem}>Leverage</TableCell>
                                <TableCell sx={styles.headerTableItem}>Liquid Price</TableCell>
                                <TableCell sx={styles.headerTableItem}>Profit%</TableCell>
                                <TableCell sx={styles.headerTableItem}>Profit$</TableCell>
                                <TableCell sx={styles.headerTableItem}>Market Price</TableCell>
                                <TableCell sx={styles.headerTableItem}></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow sx={styles.bodyTableRow}>
                                <TableCell>
                                    <Stack direction='row' alignItems='center' gap='6px'>
                                        <Icon name='Bitcoin' size='24px' />
                                        <Typography sx={styles.bodyTableItem}>Bitcoin</Typography>
                                    </Stack>
                                </TableCell>
                                <TableCell>
                                    <Typography sx={styles.bodyTableItem}>Buy</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography sx={styles.bodyTableItem}>Open</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography sx={styles.bodyTableItem}>350,350,477,778</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography sx={styles.bodyTableItem}>350,350,477,778</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography sx={styles.bodyTableItem}>350,350,477,778</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography sx={styles.bodyTableItem}>-</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography sx={styles.bodyTableItem}>4x</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography sx={styles.bodyTableItem}>350,350,477,778</Typography>
                                </TableCell>

                                <TableCell>
                                    <Typography sx={styles.profitBox}>36%</Typography>
                                </TableCell>

                                <TableCell>
                                    <Typography sx={styles.bodyTableItem}>$0.038</Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography sx={styles.bodyTableItem}>100</Typography>
                                </TableCell>
                                <TableCell>
                                    <Button sx={styles.marketButton}>Market Close</Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
};

export default Status;