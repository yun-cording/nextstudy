export default function Layout(props) {
  
  let msg = null;
  if(props.params.id == 1){
    msg="HTML";
  }else{
    msg="CSS"
  }

  return(
    <>
    {props.children}
    <h3> parameters : {props.params.id} </h3>
    <h3> {msg} </h3>
    <div>YOU CLICKED <b>{props.params.id==1?'HTML' : props.params.id==2 ? 'CSS' : props.params.id==3?'JS':'ERROR'}</b></div>
    </>
  )
}