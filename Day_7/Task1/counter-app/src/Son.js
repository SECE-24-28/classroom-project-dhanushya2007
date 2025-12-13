import Grandson from "./Grandson";
const Son =({s})=>{
   return(
    <div className="Container">
    <h1>Son Component</h1>
    {s}
    <Grandson gs={s}></Grandson>
</div>
   );
};
export default Son;