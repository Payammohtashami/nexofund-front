const styles = {
    wrapper: {
        mx: 'auto',
        maxWidth: 1000,
        width: '100%',
        border: '1px solid', 
        padding: '24px',
        borderRadius: '26px',
        backdropFilter: 'blur(12px)',
        bgcolor: (theme) => theme.palette.solid.dark5,
        borderColor: (theme) => theme.palette.solid.dark5,
    },
    accordionWrapper: {
        borderRadius: 0,
        boxShadow: 'none',
        borderBottom: '1px solid',
        borderColor: 'solid.dark4',
        backgroundColor: 'transparent',
        '&:last-child': {
            borderBottom: 'none',
        },
        '&::before': {
            backgroundColor: 'transparent',
        },
    },
    accordionTitle: {
        my: '12px',
        fontSize: 16,
        fontWeight: 600,
        lineHeight: '30px',
        color: 'solid.dark1',
    },
    activeTitle: {
        my: '12px',
        fontSize: 16,
        fontWeight: 600,
        lineHeight: '30px',
        color: '#4A3AFF',
    },
    accordionDescription: {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: '30px',
        color: 'solid.dark2'
    },
};

export default styles;