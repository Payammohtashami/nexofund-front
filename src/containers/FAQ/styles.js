const styles = {
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
};

export default styles;