const Container = ({ children }) => {
    return (
        <div className="w-full h-full absolute top-0 left-0 bg-cyan-400 flex items-center justify-center">
            <div className="bg-white  w-[90%]  md:w-[940px] rounded-[15px]">
                {children}
            </div>
        </div>
    );
};

export default Container;
