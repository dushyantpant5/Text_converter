import React from 'react'


function Alerts(props) {
  return (
    
    //props.message agar != NULL hua tabhi aage ka function chalega , nahi to nahi chalega 
    props.message && <div className={`alert alert-${props.message.tp==='Error' || props.message.tp==='Danger'?'danger':'success'}`}role="alert">
                        <strong>{props.message.tp}</strong> {props.message.msg}
                      
    </div>
    
  )
}

export default Alerts