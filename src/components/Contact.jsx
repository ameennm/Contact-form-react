const Contact = (props) => {
    
    return ( 
        <div className="px-3 mt-2">
            
            <h3>Contact List</h3>
            <div className="d-flex">
                {props.ar.map((con) => (
                            
        
                    <div class="card mx-3">
                        <div class="card-body">
                            <h5 class="card-title">{con.name}</h5>
                            <p class="card-text">{con.email}</p>
                            <button onClick={()=>{props.deleted(con.id)}} class="btn btn-danger">Delete</button>
                        </div>
                    </div> 
                ))
            }

            </div>
        </div>

     );
}
 
export default Contact;