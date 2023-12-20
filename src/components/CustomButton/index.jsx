import React from "react";
import { ScaleLoader } from "react-spinners";

const CustomButton = ({
    loading,
    disabled,
    type = "button",
    fullWidth,
    children,
    variant,
    spinnerColor='#FFF',
    onClick = () => {},
    className,
}) => {

    if (loading) {
        return (
            <button
                type={type}
                variant={variant}
                disabled={loading || disabled}
                fullWidth={fullWidth}
                className={className}
            >
                <ScaleLoader height={20} width={3} color={spinnerColor} />
            </button>
        )
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={loading || disabled}
            className={className}
        >
            {children}
        </button>
    );
};

export default CustomButton;
