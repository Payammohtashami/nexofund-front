const styles = {
    boxesWrapper: {
        p: 1,
        flex: 1,
        border: '1px solid', 
        bgcolor: (theme) => theme.palette.solid.dark5,
        backdropFilter: 'blur(12px)',
        borderRadius: '26px',
        borderColor: (theme) => theme.palette.solid.dark5,
    },
    secondBoxWrapper: {
        p: 1.4,
    },
    percentageText: {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: '24px',
        '& span': {
            fontSize: 12,
            fontWeight: 400,
            lineHeight: '18px',
        },
    },
    positiveText: {
        color: (theme) => theme.palette.green.default,
        fontSize: 12,
        fontWeight: 400,
        lineHeight: '18px',
        mt: 1
    },
    arrowButton: {
        bgcolor: 'primary.main',
        borderRadius: 2,
    },
};

export default styles;