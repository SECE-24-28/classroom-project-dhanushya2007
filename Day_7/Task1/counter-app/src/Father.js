import Son from "./Son";
const Father =({as})=>{
   return(
    <div className="Container">
    <h1>Father Component</h1>
    {as}
    <Son s={as}></Son>
</div>
   );
};
export default Father