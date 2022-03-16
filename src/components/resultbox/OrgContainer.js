import React from 'react'
import './OrgContainer.css'
export default function OrgContainer(props) {
   
    const redirectToRepo=(org_login)=>{
        window.open(`https://github.com/${org_login}`, "_target");
    }
    
    if(props.isSearch)
    {
        if(props.data_arr?.length > 0)
        {
            return (
                <div>
                    <p className='Org-title'>{props.title}</p>
                        {props.data_arr.map((item)=>{
                            return (
                                <div style={{ padding:10 }} key={item.id}>
                                    <div className='Org-title-container'>
                                        <div>
                                            <img src={item.avatar_url} onClick={()=>redirectToRepo(item.login)} className="Org-avatar"></img>
                                        </div>
                                        <div>
                                            <p className='Org-title' onClick={()=>redirectToRepo(item.login)}>{item.login}</p>
                                        </div>
                                    </div>    
                                    <div className='bottom-width'>
                                        <p className='Org-description'>
                                            {item.description}
                                        </p>
                                    </div>    
                                </div>
                            )
                        })}
                </div>
            )
        }
        else
        {
            return(
                <div>
                    <p className='Org-title'>{props.title}</p>
                    <p>No results...</p>    
                </div>
            )
        }
        
    }
    else
    {
        return (
            <div>
                {/* <p>Search Something...</p> */}
            </div>
        )
    }  
}

