const styles = {
    wrapper: {
        width: '100%',
        borderRadius: '26px',
        border: '1px solid',
        borderColor: (theme) => theme.palette.solid.dark5,
        bgcolor: (theme) => theme.palette.solid.dark5,
        backdropFilter: 'blur(12px)',
    },
    tableText: {
        fontSize: 12,
        lineHeight: '16px',
        color: (theme) => theme.palette.solid.dark1,
    },
    borderColor: {
        'th': {
            border: 'none',
        },
        'td': {
            borderColor: (theme) => theme.palette.solid.dark5,
        },
    },
    increaseBox: {
        bgcolor: (theme) => theme.palette.green.default,
        borderRadius: '4px',
        width: 'fit-content',
        p: '8px'
    },
    decreaseBox: {
        bgcolor: (theme) => theme.palette.red.default,
        borderRadius: '4px',
        width: 'fit-content',
        p: '8px'
    },
    increaseBoxText: {
        fontSize: 12,
        lineHeight: '16px',
        color: (theme) => theme.palette.solid.dark6,
    },
    iconButton: {
        borderRadius: '6px',
        bgcolor: (theme) => theme.palette.solid.dark5,
    }
};

export default styles;