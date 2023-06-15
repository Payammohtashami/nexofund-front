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
            color: 'solid.dark1',
            borderRadius: '16px',
            border: '2px solid transparent',
            bgcolor: 'solid.dark5',
            'svg': {
                mr: '6px'
            }
        }
    },
    activeButton: {
        borderColor: '#2817ED !important',
        'svg': {
            mr: '6px'
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
        zIndex: -1,
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

    activeChainButton: {
        width: '100%',
        padding: '12px',
        color: 'solid.dark1',
        borderRadius: '16px',
        backdropFilter: 'blur(12px)',
        border: '1px solid',
        borderColor: 'primary.main',
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

    greenButton: {
        flex: 2,
        width: '100%',
        p: '12px 24px',
        borderRadius: '16px',
        color: 'solid.dark6',
        bgcolor: 'green.default',
        textTransform: 'capitalize',
        '&:hover': {
            color: 'solid.dark1',
        }
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
    walletAddressBox: {
        mt: '6px',
        borderRadius: '16px',
        bgcolor: 'solid.dark7',
        padding: '6px 20px',
        border: '1px solid',
        borderColor: 'primary.main',
        boxShadow: ''
    },
};

export default styles;