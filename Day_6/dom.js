var aw = {
    name: "Amrit",
    b: 20.
};
console.log(this);
var funf = function(aa,jk){
    console.log(this.name,aa,jk);
};
//funf(300);

//call, apply, bind
//bind => will return  new fun
//call => run immediately, pass args
//apply(call and apply are same, usage is diff)
let boundedfn = funf.bind(Object,500,"kl");
boundedfn();
//return a new func
//call
funf.call(Object,400,500);

//apply
funf.apply(Object,[600,900]);