const styles = {
    wrapper: {
        my: '148px',
    },
    imageWrapper: {
        width: '100%',
        'img': {
            width: '100%',
        },
    },
    title: {
        fontSize: 20,
        fontWeight: 600,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 600,
        textAlign: 'left',
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

    chainsButton: {
        width: '100%',
        padding: '12px',
        color: 'solid.dark1',
        borderRadius: '16px',
        backdropFilter: 'blur(12px)',
        border: '1px solid transparent',
        'svg': {
            mr: 1
        },
        '&:hover': {
            borderColor: 'primary.main',
        }
    },
    blueButton: {
        flex: 2,
        p: '12px 24px',
        width: '100%',
        color: 'solid.dark1',
        bgcolor: 'primary.main',
        borderRadius: '16px',
        textTransform: 'capitalize',
    },
};

export default styles;