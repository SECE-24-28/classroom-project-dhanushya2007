const Component=()=>{
    return (
        <div>
            <h2>This is Component</h2>
        </div>
    );
};
export default Component;//default export

export const Component1=(props)=>{
    return(
        <div>
            <h2>This is Component1</h2>
            <h2>{props.m}</h2>
        </div>
    );
}

export const Component4=({a,h})=>{
    return(
        <div>
            <h2>This is Component4</h2>
            <h3>{a}{h}</h3>
        </div>
    );
}