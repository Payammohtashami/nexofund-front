const styles = {
    wrapper: {
        border: '1px solid', 
        position: 'relative',
        bgcolor: (theme) => theme.palette.solid.dark5,
        backdropFilter: 'blur(12px)',
        borderRadius: '26px',
        width: '100%',
        height: '100%',
        minHeight: '600px',
        maxHeight: '600px',
        overflowY: 'auto',
        borderColor: (theme) => theme.palette.solid.dark5,
        '::-webkit-scrollbar': {
            width: '0px',
        }
    },
    title: {
        fontSize: 20,
        fontWeight: 600,
        lineHeight: '39px',
        padding: '16px 24px 0',
    },
    newsWrapper: {
        padding: '6px 24px',
        textAlign: 'left',
        borderBottom: '1px solid',
        borderColor: (theme) => theme.palette.solid.dark5,
        transition: 'all 0.2s ease',
        
        '&:hover': {
            bgcolor: '#EAE9FF14',
        },
    },
    newsTitle: {
        color: '#DFDEEF',
        lineHeight: '30px',
        'span': {
            fontSize: 12,
            color: '#A5A2B5',
        }
    },
    circle: {
        mx: '2px',
        width: '6px',
        height: '6px',
        display: 'inline-block',
        borderRadius: '50%',
        background: (theme) => theme.palette.primary.main,
    },
    backButton: {
        p: '8px 20px',
        bgcolor: '#DFDEEF',
        borderRadius: '16px',
        '&:hover':{
            color: '#DFDEEF'
        },
        'svg': {
            mr: 0.5,   
        }
    },
    detailWrapper: {
        borderTop: '1px solid',
        borderBottom: '1px solid',
        borderColor: 'primary.main',
        padding: '16px 24px'
    },
    description: {
        color: '#A5A2B5',
        lineHeight: '30px',
        my: 2,
    },
    analysStats: {
        color: '#DFDEEF',
        fontSize: 12,
        fontWeight: 400,
    },
    statsTitle: {
        color: '#DFDEEF',

    },
};

export default styles;