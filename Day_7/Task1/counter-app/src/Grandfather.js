import Father from "./Father";
const Grandfather =({msg})=>{
   return(
    <div className="Container">
    <h1>GrandFather Component</h1>
    {msg}
    <Father as={msg}></Father>
</div>
   );
};
export default Grandfather