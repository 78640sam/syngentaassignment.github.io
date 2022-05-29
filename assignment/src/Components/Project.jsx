import "./style.css";
import {useState} from "react";
function Project() {

    const [val, setVal] = useState();
    const [hide1, setHide1] = useState(true);
    const [hide2, setHide2] = useState(true);
    const [hide3, setHide3] = useState(true);
    const [hide4, setHide4] = useState(true);
    const [hide5, setHide5] = useState(true);
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
    
        setHide1(true)
        
      }
      const show3 = () => {
    
        setHide3(false)
        
      }
      const show13 = () => {
    
        setHide1(true)
        
      }
      const show4 = () => {
    
        setHide4(false)
        
      }
      const show14 = () => {
    
        setHide1(true)
        
      }
      const show5 = () => {
    
        setHide5(false)
        
      }
      const show15 = () => {
    
        setHide1(true)
        
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
              hide1? null: <div className="div-1" onClick={show11} ></div>
            }
              {
              hide2? null: <div className="div-2" onClick={show12}></div>
            }
              {
              hide3? null: <div className="div-3" onClick={show13}></div>
            }
              {
              hide4?null:  <div className="div-4" onClick={show14}></div>
            }
              {
              hide5? null:  <div className="div-5" onClick={show15}></div>
            }

        </div>
        <div className="main-div-2">
            {
              hide1? <div className="div-1"></div>:null
            }
              {
              hide2? <div className="div-2"></div>:null
            }
              {
              hide3? <div className="div-3"></div>:null
            }
              {
              hide4? <div className="div-4"></div>:null
            }
              {
              hide5? <div className="div-5"></div>:null
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