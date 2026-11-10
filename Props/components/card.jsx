const Card = (props) => {  
  return (
    <div className='main'>
        
       <div className='top'>
            <div><img src={props.photo} /></div>   
            <button>save</button>
       </div>

       <div className='center'>   
            <div className='incneter'>
                <div className='user'>{props.name}</div>   
                <div className='possion'>{props.description}</div>   
            </div>
            <div className='skills'>
                <div className='skill-1'>{props.skills[0]}</div>  
                <div className='skill-2'>{props.skills[1]}</div>
            </div>
       </div>   

       <div className='bottom'>
            <div className='rating'>{props.rating} star</div>   
            <div className='earning'>{props.status}</div>   
            <div className='price'>${props.hourlyRate}/hr</div>   
       </div>
       <div>
            <div className='talk'><button>Get in touch</button></div>
       </div>

    </div>
  )
}

export default Card