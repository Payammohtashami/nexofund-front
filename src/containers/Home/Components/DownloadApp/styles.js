const styles = {
    descriptionText: {
        color: (theme) => theme.palette.solid.dark2,
        fontSize: 16,
        lineHeight: '30px',
        fontWeight: 400,
        mt: '10px',
        mb: '24px',
    },
    
    buttonWrapper: {
        borderRadius: '16px',
        p: 0,
    },
    
    secondButtonWrapper: {
        bgcolor: 'rgba(234, 233, 255, 0.08)',
        backdropFilter: 'blur(17px)',
        borderRadius: 'inherit',
        p: '16px 32px',
        border: 'solid 1px',
        borderColor: (theme) => theme.palette.solid.dark3,
        backgroundClip: 'padding-box',
        position: 'relative',
        svg: {
            fill: (theme) => theme.palette.solid.dark1,
            width: '32px',
            height: '32px',
        },
        '&:hover': {
            background: (theme) => theme.palette.solid.dark7,
            borderColor:(theme) => theme.palette.primary.main,
            svg: {
                fill: (theme) => theme.palette.primary.main,
            }
        }
    },
};

export default styles;