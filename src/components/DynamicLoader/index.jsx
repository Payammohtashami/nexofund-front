import { BeatLoader } from "react-spinners";

const DynamicLoader = (loadingParams) => {
    if(loadingParams.isLoading) {
        return (
            <div className="flex min-h-[50vh] items-center justify-center">
                <BeatLoader color='#007aff' />
            </div>
        )
    } else if(loadingParams.error){
        return (
            <span>{loadingParams.error?.message?.toString()}</span>
            );
    } else {
        return (
            <div className="flex min-h-[50vh] items-center justify-center">
                <BeatLoader color='#007aff' />
            </div>
        )
    }
};

export default DynamicLoader;