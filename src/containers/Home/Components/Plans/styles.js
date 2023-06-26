const styles = {
    planCardWrapper: {
        border: '1px solid', 
        bgcolor: (theme) => theme.palette.solid.dark5,
        backdropFilter: 'blur(12px)',
        borderRadius: '26px',
        padding: {xs: '8px 16px', md: '16px 24px'},
        width: '100%',
        borderColor: (theme) => theme.palette.solid.dark5,
    },
    activePlanCardWrapper: {
        border: '1px solid', 
        borderColor: (theme) => theme.palette.primary.main,
        backdropFilter: 'blur(12px)',
        borderRadius: '26px',
        padding: '16px 24px',
        width: '100%',
        background: (theme) => theme.palette.solid.dark7,
        animation: 'boxshadow 2s infinite',
    },
    planCardcircle: {
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        background: (theme) => theme.palette.solid.dark5,
    },
    activePlanCardcircle:{
        width: '24px',
        height: '24px',
        borderRadius: '50%',
        background: (theme) => theme.palette.primary.main,
        border: '2px solid',
        borderColor: (theme) => theme.palette.solid.dark5,
        position: 'relative',
        '&::before': {
            content: '""',
            position: 'absolute',
            borderRadius: '50%',
            top: '-3.1px',
            right: '-3.1px',
            zIndex: -1,
            width: '27px',
            height: '27px',
            background: (theme) => theme.palette.primary.main,
            animation: 'filterAnimations 2s infinite',
        },
    },
    
    planCardName: {
        fontSize: {xs: 12, md: 14},
        fontWeight: 400,
        lineHeight: '24px',
        textAlign: 'left',
        color: (theme) => theme.palette.solid.dark2,
    },
    
    planCardFund: {
        fontSize: {xs: 16, md: 26},
        fontWeight: 600,
        lineHeight: '39px',
        letterSpacing: 0,
        textAlign: 'left',
        span: {
            fontSize: 16,
            fontWeight: 400,
            lineHeight: '24px',
            letterSpacing: 0,
            textAlign: 'left',
            color: (theme) => theme.palette.solid.dark2,
            ml: '8px',
        },
    },
    
    planCardButton: {
        color: 'solid.dark1',
        boxShadow: '0px 0px 15px rgba(40, 23, 237, 0.3)',
        borderRadius: '16px',
        alignItems: 'center',
        display: 'flex',
        gap: '4px',
        justifyContent: 'center',
        padding: '12px',
        flexDirection: 'row',
        background: (theme) => theme.palette.primary.main,
        fontWeight: 600,
        fontSize: {xs: 16, md: 26},
        lineHeight: '32px',
        span: {
            fontWeight: 400,
            fontSize: 14,
            lineHeight: '18px',
            color: (theme) => theme.palette.solid.dark2,
        }
    },
    
    activePlanCardButton: {
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(100.84deg, #2817ED 4.93%, #AB30D7 84.35%)',
        backgroundSize: '400% 400%',
        animation: 'gradient 8s ease infinite',
        backgroundPosition: 'center',
        color: '#fff',
        border: '2px solid transparent',
        zIndex: 10,
        boxShadow: '0px 0px 15px rgba(40, 23, 237, 0.3)',
        borderRadius: '16px',
        alignItems: 'center',
        display: 'flex',
        gap: '4px',
        justifyContent: 'center',
        padding: '3.65px 12px',
        flexDirection: 'row',
        fontWeight: 600,
        fontSize: {xs: 16, md: 26},
        span: {
            fontWeight: 400,
            fontSize: 14,
            lineHeight: '18px',
            color: (theme) => theme.palette.solid.dark2,
        },
    },
    
    PlansDetailWrapper: {
        border: '1px solid',
        borderColor: (theme) => theme.palette.primary.main,
        // backdropFilter: 'blur(12px)',
        borderRadius: '26px',
        padding: '16px 24px',
        background: (theme) => theme.palette.solid.dark7,
        animation: 'boxshadow 2s infinite',
        height: "100%",
        padding: '24px',
        overflow: 'hidden',
    },
    
    PlansDetailTitle:{
        fontSize: 20,
        fontWeight: 600,
        lineHeight: '12px',
    },
    
    planDetailText: {
        color: (theme) => theme.palette.solid.dark2,
        fontSize: 16,
        fontWeight: 400,
        lineHeight: '12px',
    },
};

export default styles;