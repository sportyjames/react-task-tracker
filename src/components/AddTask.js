import { useState } from 'react'


const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    
    const [isTimeoutRunning, setIsTimeoutRunning] = useState(false)

    const onInputChange = (e, className) => {
        if(isTimeoutRunning){    //third
            e.preventDefault()
            e.stopPropagation()
        }
        else
        {
            if(className == '1')
            {
                setText(e.target.value)   //first
            }
            else
            {
                setDay(e.target.value)   //first
            }
           
            setIsTimeoutRunning(true) //second

            setTimeout(() => {
                setIsTimeoutRunning(false)  //fourth
            },200) //suspend 0.2 second
        }
    }





    const onSubmit = (e) => {
        e.preventDefault(); //prevent refresh the page 
        //do the form validation here 

        if(!text)
        {
            alert('Please add a task')
            return
        }

        onAdd({ text, day, reminder})

        setText('')
        setDay('')
        setReminder(false)
    }



    return (
        <form className='add-form' onSubmit={onSubmit} >
            <div className='form-control'>
                <label>Task</label>
                <input className="1" type="text" placeholder='Add Task' value={text} onChange={(e) => {
                    onInputChange(e, '1')
                }} />
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input className="2" type="text" placeholder='Add Day & Time' value={day} onChange={(e) => {
                    onInputChange(e, '2')
                }} />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type="checkbox" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input type="submit" checked={reminder} value='Save Task' className='btn btn-block'/>
        </form>
    )
}

export default AddTask
