const Counter=({val,handleInc,handleDec})=>{
    return(
        <div className="Counter">
            <h1>{val}</h1>
            <div className='buttons'>
                <button onClick={handleInc} className='inc'>Increment</button>
                <button onClick={handleDec} className='dec'>Decrement</button>
            </div>
      </div>
    );
}
export default Counter