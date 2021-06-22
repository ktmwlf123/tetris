const MakeGrid = (props) => {
    const col = (i) => { 
        let colList = i.map((i, index) => {
            return <div key={index} className={"grid col col_" + index}></div>
        })
        return(
            <>
                {colList}
            </>
        );
    }

    let row = props.playGroundData.map((i,index) => {
		return <div key={index} className={"grid row row_" + index}>{col(i)}</div>
	});
    return(
        <div className="contents">
            {row}
        </div>
    )
}

export default MakeGrid;