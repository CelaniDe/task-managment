import coffe_image from "../../images/coffee.png"
import Tasks from "./Tasks";

function TaskManagment() {
    return ( 
    <div style={{display : 'flex', flexDirection : 'column', justifyContent : 'center', alignItems : 'center'}}>
        <img src={coffe_image} alt="I Love Coffe!" style={{width : '200px'}}/>
        <h1>Good morning Member.</h1>
        <p>DAILY TASKS</p>
        <Tasks />
    </div> 
    );
}

export default TaskManagment;