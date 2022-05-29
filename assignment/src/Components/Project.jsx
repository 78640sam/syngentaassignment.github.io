import "./style.css";
import {useState} from "react";
function Project() {

    const [val, setVal] = useState();
    const [hide, setHide] = useState(true);


    const soot = () => {
if(val==1){
alert("1")
//  show1()
}else if(val==2){
    alert("2")   
}
else if(val==3){
    alert("3")   
}
else if(val==4){
    alert("4")   
}
else if(val==5){
    alert("5")   
}else{
    alert("No")   
}

const show1 = () => {
  setHide(true)
}

    }
    return (
      <div className="project">
    
    <div className="main-div">
        <div className="main-div-1">

        </div>
        <div className="main-div-2">
            {
              hide?   <div className="div-1"></div>:null
            }
            <div className="div-1"></div>
            <div className="div-1"></div>
            <div className="div-1"></div>
            <div className="div-1"></div>
            <div className="div-1"></div>
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