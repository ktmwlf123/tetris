import CoordinateBlock from './CoordinateBlock';

const choiceBlock = () => {
    const tetrimino = {
        omino: [
            [[0,0],[0,1],[1,0],[1,1]],
            [[0,0],[0,1],[1,0],[1,1]],
            [[0,0],[0,1],[1,0],[1,1]],
            [[0,0],[0,1],[1,0],[1,1]] 
        ],
        imino: [
            [[0,0],[0,1],[0,2],[0,3]],
            [[0,0],[1,0],[2,0],[3,0]],
            [[0,0],[0,1],[0,2],[0,3]],
            [[0,0],[1,0],[2,0],[3,0]]
        ],
        zmino: [
            [[0,0],[0,1],[1,1],[1,2]],
            [[0,1],[1,0],[1,1],[2,0]],
            [[0,0],[0,1],[1,1],[1,2]],
            [[0,1],[1,0],[1,1],[2,0]]
        ],
        smino: [
            [[0,1],[0,2],[1,0],[1,1]],
            [[0,0],[1,0],[1,1],[2,1]],
            [[0,1],[0,2],[1,0],[1,1]],
            [[0,0],[1,0],[1,1],[2,1]]
        ],
        jmino: [
            [[0,1],[1,1],[2,0],[2,1]],
            [[0,0],[1,0],[1,1],[1,2]],
            [[0,0],[0,1],[1,0],[2,0]],
            [[0,0],[0,1],[0,2],[1,2]]
        ],
        lmino: [
            [[0,0],[1,0],[2,0],[2,1]],
            [[0,0],[0,1],[0,2],[1,0]],
            [[0,0],[0,1],[1,1],[2,1]],
            [[0,2],[1,0],[1,1],[1,2]]
        ],
        tmino: [
            [[0,0],[0,1],[0,2],[1,1]],
            [[0,1],[1,0],[1,1],[2,1]],
            [[0,1],[1,0],[1,1],[1,2]],
            [[0,0],[1,0],[1,1],[2,0]]
        ]
    }
    let randomNum = Math.floor(Math.random() * 6);

    switch(randomNum){
        case 0: return tetrimino.omino;
        case 1: return tetrimino.imino;
        case 2: return tetrimino.zmino;
        case 3: return tetrimino.smino;
        case 4: return tetrimino.jmino;
        case 5: return tetrimino.lmino;
        case 6: return tetrimino.tmino;
        default: return;
    }
}

const MakeBlocks = (props) => {
    let propsData = {
        blockData: choiceBlock(),
        playGroundData: props.setPlayGroundData
    }
    return(
        <>
            <CoordinateBlock blockData={propsData} />
        </>
    )
}

export default MakeBlocks;