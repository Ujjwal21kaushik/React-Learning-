const ans = useState(0);

so this *ans* is an array 
ans[0] = value (0)
ans[1] = function (that update the counter)

*** Important ***
jha state define h vhi use sue krskte h na ki define app.jsx me h and sue humuse props.jsx me krrhe h *** not possibile ***

*** Destructring ***
const [score, setScore] = useState(0);
<!--  setScore(score + 1); -->
<!-- setScore(prev => prev +1); -->

<!-----------------Props-------------- -->
They are use to amke components reusable

<!-- function App() {

  const data =[
    {name: "laxman Aggrawal", profession:"SDC-II", image:"https://images.unsplash.com/photo-1758335068076-7564a9ada09f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", isFriend:false},
    {name: "Utkarsh gaur", profession:"Teacher", image:"https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", isFriend:false},
    {name: "Keshavi Gupta", profession:"Psychologist", image:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", isFriend:false},
    {name: "Shubham Pathak", profession:"Professor", image:"https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", isFriend:false},
    {name: "Dhruv Sharma", profession:"Doctor", image:"https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", isFriend:false},
  ]

  const [val, setval] = useState(data);
  const handleFriend = (index)=>{
    setval((prev)=>{
      return prev.map((ele, idx)=>{
        if(idx === index){
          return {...ele, isFriend: !ele.isFriend}
        }
        return ele;
      })
    })
  };


  return(
    <div className="w-full h-screen flex justify-center items-center gap-4 bg-zinc-200 ">
      {
        val.map((item , index)=>
          <Prop key={index} index = {index} handleFriend={handleFriend} values={item}/>
        )
      }
    </div>
  )
} -->


*** css module ***


*** three ways to handle forms ***
*** 1:- useRef ***
<!-- export default function Formhandling(){
    const username = useRef(null);
    const age = useRef(null);

    const handleSubmit = (e)=>{
        e.preventDefault();

        console.log(username.current.value, age.current.value);
        
    }

    return(
        <form action="#" className="p-4" onSubmit={handleSubmit}>
            <input type="text" ref={username} name="username" id="username" placeholder="name"/>
            <input type="text" ref={age} name="age" id="age" placeholder="age"/>
            <input type="submit" value="Submit" />

            
        </form>    
    )
} -->


*** 2:- controlled components ***
<!-- export default function Formhandling(){
    // const username = useRef(null);
    // const age = useRef(null);

    const [val, setVal] = useState({username: "", age:""})

    const handleSubmit = (e)=>{
        e.preventDefault();

        console.log(val);
        
    }

    return(
        <form action="#" className="p-4" onSubmit={handleSubmit}>
            <input type="text" onChange={(e)=> setVal({...val, username: e.target.value})} name="username" id="username" placeholder="name"/>
            <input type="text" onChange={(e)=> setVal({...val, age: e.target.value})} name="age" id="age" placeholder="age"/>

            <input type="submit" value="Submit" />

            
        </form>    
    )
} -->

*** 2:- React Hook Form ***
<!-- 
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form"

export default function Formhandling(){
    // const username = useRef(null);
    // const age = useRef(null);

    // const [val, setVal] = useState({username: "", age:""})

    const {register, handleSubmit, formState: { errors },} = useForm()


    return(
        <form action="#" className="p-4" onSubmit={handleSubmit(data => console.log(data)
        )}>
            
            <input type="text" {...register('username', {
                required: "Username is required"
            })} 
                name="username" id="username" placeholder="name"
            />
            {(<p className="text-red-500 text-sm">{errors.username?.message}</p>)}

            <input type="number" {...register('age',{
                required: "Age is required", 
                valueAsNumber: true, 
            })} 
                name="age" id="age" placeholder="age"
            />
            {(<p className="text-red-500 text-sm">{errors.age?.message}</p>)}

            <input type="submit" value="Submit" />

            
        </form>    
    )
}
 -->



 ***UseE ffect***

reconcilition and Updation 

compontent updation => components deletion + components updations

    <!-- useEffect (()=>{
        console.log("Services Connected");
        

        return()=>{
            console.log("Services Deleted"); // callback function --> as we go to another component we se deleted services..
            
        }
    ***},[])*** is called updation no re-rendering done -->

    <!-- useEffect (()=>{
        console.log("Services Connected");
        

        return()=>{
            console.log("Services Deleted"); // callback function --> as we go to another component we se deleted services..
            
        }
    }) --> this is re-rendring