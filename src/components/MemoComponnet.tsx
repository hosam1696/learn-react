import React from "react";


function MemoComponent(props: any) {
    console.log('Memo Render');
    return (
        <div>ToDo List for {props.name}</div>
    )
}

// export default MemoComponent;
export default React.memo(MemoComponent);
