let a : string = "fvjksbdkjvfsd"; 

let nambo :number=3; 

let check :boolean = true ; 

// Another way of declaring it is 

let namee=<string>"Ayush" ; 

// To assign two types 

let op : string | number ;

op="jfjbdj" ;
op=9428042;

const func =(n:number , m:number):number => {
    console.log(n,m)  
    return n*m ; 
}
 
func(56387  , 34782) ;   

// TYPE in TS  

type Username = string | number ; // Username can only take string and number 

const functions =  (n :number , m:number ):number =>   {
    console.log(n*m); 
    return n*m ; 
}
  
type functionsDeclarations = (n :number , m:number ) => number ; 

const function2  : functionsDeclarations = (n,m )  =>{ 
    console.log(n,m) 
    return n*m ;
    
}
 

