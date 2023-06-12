const styles = {
    wrapper: {
        border: '1px solid', 
        bgcolor: (theme) => theme.palette.solid.dark5,
        backdropFilter: 'blur(12px)',
        borderRadius: '26px',
        padding: '16px 0',
        width: '100%',
        borderColor: (theme) => theme.palette.solid.dark5,
    },

    title: {
        fontSize: 26,
        fontWeight: 600,
        lineHeight: '39px',
        mb: '16px',
    },
    headerTableRow: {
        'th': {
            borderRight: '1px solid',
            borderColor: (theme) => theme.palette.solid.dark5,
        }
    },
    bodyTableRow: {
        'td': {
            borderRight: '1px solid',
            borderBottom: 'none',
            borderColor: (theme) => theme.palette.solid.dark5,
        }

    },

    headerTableItem: {
        fontSize: 12,
        fontWeight: 400,
        color: '#A5A2B5',
        lineHeight: '18px',
        minWidth: 120,
    },
    
    bodyTableItem: {
        fontSize: 12,
        fontWeight: 400,
        color: '#DFDEEF',
        lineHeight: '18px', 
    },
    profitBox: {
        bgcolor: (theme) => theme.palette.green.default,
        fontSize: 12,
        fontWeight: 400,
        color: '#08071A',
        lineHeight: '18px',
        borderRadius: '8px',
        p: '8px 18px',
        textAlign: 'center',

    },
    marketButton: {
        bgcolor: '#FFF',
        color: '#2817ED',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '30px',
        borderRadius: '16px',
        textTransform: 'capitalize',
        width: 180,
        '&:hover': {
            bgcolor: '#FFFFFFA0',
            color: '#FFF',
        },
    },
};

export default styles;