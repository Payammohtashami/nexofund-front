const styles = {
    showHeader: {
        width: '100%'
    },
    hideHeader: {
        transform: 'translateY(-74px)',
    },
   
    wrapper: {
        py: 2,
        maxWidth: "100vw",
        boxShadow: "none",
        background: 'none',
        transition: 'all 0.2s ease-out',
    },
    logoWrapper: {
        svg:{
            width: '48px',
            height: '48px',
        },
    },
    menuItem: {
        color: (theme) => theme.palette.solid.dark1,
        fontWeight: 500,
        fontSize: 15,
        position: 'relative',
        '&:hover': {
            '&::before':{
                animation: 'headerLine 0.8s ease-out',
            },
        },
        '&::before': {
            content: '""',
            bottom: -2,
            height: '3px',
            position: 'absolute',
            borderRadius: '12px',
            bgcolor: 'primary.main',
        }
    }, 
    whiteButton: {
        borderRadius: '16px',
        bgcolor: '#FFF',
        color: 'primary.main',
        fontWeight: 500,
        fontSize: '16px',
        textTransform: 'none',
        padding: '0 24px',
        border: '1px solid transparent',
        "&:hover": {
            boxShadow: '0px 0px 16px 0px #2817ED80',
            background: 'linear-gradient(180deg, rgba(140, 220, 255, 0.1) 0%, rgba(140, 220, 255, 0) 100%)',
            borderColor: '#2817ED',
            backdropFilter: 'blur(12px)',
            filter: 'drop-shadow(0px 0px 11px rgba(40, 23, 237, 0.5))',
            color: '#FFF',
        },
    },
    
    blueButton: {
        borderRadius: '16px',
        bgcolor: 'primary.main',
        color: '#FFF',
        fontWeight: 500,
        fontSize: '16px',
        textTransform: 'none',
        padding: '0 24px',
        border: '1px solid transparent',
        boxShadow: '0px 0px 16px 0px #2817ED80',
        '&:hover': {
            background: 'linear-gradient(180deg, rgba(140, 220, 255, 0.1) 0%, rgba(140, 220, 255, 0) 100%)',
            borderColor: '#2817ED',
            backdropFilter: 'blur(12px)',
            filter: 'drop-shadow(0px 0px 11px rgba(40, 23, 237, 0.5))',
        }
    },

    gradinetButton: {
        color: '#FFF',
        fontSize: '16px',
        fontWeight: 500,
        borderRadius: '16px',
        textTransform: 'none',
        padding: '0',
        border: '1px solid transparent',
        background: 'linear-gradient(90deg, #2817ED 0%, #AB30D7 100%)',
        boxShadow: '0px 0px 16px 0px #2817ED80',
        '&:hover': {
            background: 'linear-gradient(180deg, rgba(140, 220, 255, 0.1) 0%, rgba(140, 220, 255, 0) 100%)',
            borderColor: '#2817ED',
            backdropFilter: 'blur(12px)',
            filter: 'drop-shadow(0px 0px 11px rgba(40, 23, 237, 0.5))',
        }
    },
    walletButton: {
        p: '10px 24px',
        borderRadius: 'inherit',
        bgcolor: (theme) => theme.palette.solid.dark6,
    },
    menuWrapper: {
        '.MuiPaper-root': {
            width: 150,
            border: '1px solid',
            borderRadius: '16px',
            borderColor: (theme) => theme.palette.solid.dark4,
            backgroundColor: (theme) => theme.palette.solid.dark6,
        }
    }
};

export default styles;