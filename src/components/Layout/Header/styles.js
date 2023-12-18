const styles = {
    showHeader: {
        width: '100%'
    },
    hideHeader: {
        transform: 'translateY(-74px)',
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
    
  

    gradinetButton: {
        color: '#FFF',
        fontSize: '16px',
        fontWeight: 500,
        borderRadius: '16px',
        textTransform: 'none',
        padding: '0',
        p: '1px',
        background: 'linear-gradient(90deg, #2817ED 0%, #AB30D7 100%)',
        boxShadow: '0px 0px 16px 0px #2817ED80',
        '&:hover': {
            background: 'linear-gradient(180deg, rgba(140, 220, 255, 0.1) 0%, rgba(140, 220, 255, 0) 100%)',
            backdropFilter: 'blur(12px)',
            filter: 'drop-shadow(0px 0px 11px rgba(40, 23, 237, 0.5))',
        }
    },
    walletButton: {
        p: '10px 24px',
        borderRadius: 'inherit',
        bgcolor: (theme) => theme.palette.solid?.dark6,
    },
    menuWrapper: {
        '.MuiPaper-root': {
            width: 150,
            px: '8px',
            border: '1px solid',
            borderRadius: '16px',
            borderColor: (theme) => theme.palette.solid?.dark4,
            backgroundColor: (theme) => theme.palette.solid?.dark6,
        }
    }
};

export default styles;