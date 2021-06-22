const CoordinateBlock = (props) => {
    const blockData = props.blockData.blockData;
    const setPlayGroundData = props.blockData.playGroundData;

    const newPlayGroundData = Array.from(Array(20), () => new Array(10).fill(null));
    
    blockData[0].map((i) => {
        newPlayGroundData[i[0]][i[1]] = true;
    });

    componentDidUpdate(prevProps)
    //setPlayGroundData(newPlayGroundData)
    return(
        <>
        </>
    )
}

export default CoordinateBlock;