import "./style.css";
import {useState} from "react";
function Project() {
    const [col1, setCol1]=useState("#111");
    const [col2, setCol2]=useState("#fffff");
    const [col3, setCol3]=useState("#111");
    const [col4, setCol4]=useState("#111");
    const [col5, setCol5]=useState("#111");
    
    const [val, setVal] = useState();
    const [hide1, setHide1] = useState(true);
    const [hide2, setHide2] = useState(true);
    const [hide3, setHide3] = useState(true);
    const [hide4, setHide4] = useState(true);
    const [hide5, setHide5] = useState(true);

    const randomcol1= () =>{
        const randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
    
        setCol1(randomColor);
      
    }
    const randomcol2= () =>{
        const randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
    
       
        setCol2(randomColor);
       
    }
    const randomcol3= () =>{
        const randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
    
    
        setCol3(randomColor);
    }
    const randomcol4= () =>{
        const randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
    
      
        setCol4(randomColor);
    }
    const randomcol5= () =>{
        const randomColor = "#"+Math.floor(Math.random()*16777215).toString(16);
    
       
        setCol5(randomColor);
    }
    const show1 = () => {
    
        setHide1(false)
        
      }
      const show11 = () => {
    
        setHide1(true)
        
      }
      const show2 = () => {
    
        setHide2(false)
        
      }
      const show12 = () => {
    
        setHide2(true)
        
      }
      const show3 = () => {
    
        setHide3(false)
        
      }
      const show13 = () => {
    
        setHide3(true)
        
      }
      const show4 = () => {
    
        setHide4(false)
        
      }
      const show14 = () => {
    
        setHide4(true)
        
      }
      const show5 = () => {
    
        setHide5(false)
        
      }
      const show15 = () => {
    
        setHide5(true)
        
      }
    const soot = () => {
        
if(val==="1"){
alert("1")
  show1()
}else if(val==="2"){
    alert("2")  
    show2() 
}
else if(val==="3"){
    alert("3") 
    show3()  
}
else if(val==="4"){
    alert("4") 
    show4()  
}
else if(val==="5"){
    alert("5")  
    show5() 
}else{
    alert("Please Enter Correct Number");   
}



    }
    return (
      <div className="project">
    
    <div className="main-div">
        <div className="main-div-1">
        {
              hide1? null: <div  style={{ backgroundColor: `${col1}`}}  className="div-1" onClick={show11} ></div>
            }
              {
              hide2? null: <div style={{ backgroundColor: `${col2}`}} className="div-2" onClick={show12}></div>
            }
              {
              hide3? null: <div style={{ backgroundColor: `${col3}`}} className="div-3" onClick={show13}></div>
            }
              {
              hide4?null:  <div  style={{ backgroundColor: `${col4}`}} className="div-4" onClick={show14}></div>
            }
              {
              hide5? null:  <div style={{ backgroundColor: `${col5}`}} className="div-5" onClick={show15}></div>
            }

        </div>
        <div className="main-div-2">
            {
              hide1? <div  style={{ backgroundColor: `${col1}`}} onClick={randomcol1} className="div-1"></div>:null
            }
              {
              hide2? <div style={{ backgroundColor: `${col2}`}} onClick={randomcol2} className="div-2"></div>:null
            }
              {
              hide3? <div style={{ backgroundColor: `${col3}`}} onClick={randomcol3} className="div-3"></div>:null
            }
              {
              hide4? <div style={{ backgroundColor: `${col4}`}} onClick={randomcol4} className="div-4"></div>:null
            }
              {
              hide5? <div style={{ backgroundColor: `${col5}`}} onClick={randomcol5} className="div-5"></div>:null
            }
           
        </div>

        <div className="main-div-3">
            <input type="text"  onChange={(el) => {
            setVal(el.target.value);

          }} />
            <button onClick={soot} >Soot</button>
            
        </div>
    </div>
      </div>
    );
  }
  
  export default Project;