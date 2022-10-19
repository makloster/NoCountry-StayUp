const getDevice = (e) => {
    const deviceWidth = e.clientWidth;
    const deviceHeight = e.clientHeight;
    return {
        deviceWidth,
        deviceHeight,
    };
};

export default getDevice;
