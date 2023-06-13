const styles = {
    wrapper: {
        my: '148px',
    },
    imageWrapper: {
        'img': {
            width: '100%'
        }
    },
    title: {
        fontSize: 20,
        fontWeight: 600,
    },
    groupButton: {
        mb: 1,
        'button': {
            p: '12px 18px',
            bgcolor: 'solid.dark5',
            border: '2px solid',
            borderColor: 'primary.main',
            color: 'solid.dark1',
            borderRadius: '16px',
            'svg': {
                mr: '6px'
            }
        }
    },
    balanceText: {
        lineHeight: '30px',
        textAlign: 'center',
        'span': {
            fontWeight: 600
        }
    },
    dogeBalanceText: {
        fontSize: 12,
        color: 'solid.dark2',
        lineHeight: '30px',
        textAlign: 'center',
        mb: '30px',
    },
    walletWrapper: {
        mt: '10px',
        maxWidth: 480,
        width: '100%',
        border: '1px solid', 
        padding: '24px',
        borderRadius: '26px',
        backdropFilter: 'blur(12px)',
        bgcolor: (theme) => theme.palette.solid.dark5,
        borderColor: (theme) => theme.palette.solid.dark5,
    },
    depositButton: {
        borderRadius: '16px',
        p: '12px 24px',
        bgcolor: 'green.default',
        color: 'solid.dark6',
        textTransform: 'capitalize',
        '&:hover': {
            color: 'solid.dark1',
        }
    },

    withdrawButton: {
        borderRadius: '16px',
        p: '12px 24px',
        bgcolor: 'red.default',
        color: 'solid.dark6',
        textTransform: 'capitalize',
        '&:hover': {
            color: 'solid.dark1',
        }
    },
};

export default styles;