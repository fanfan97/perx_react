import React from 'react'
import './RepoContainer.css'
import { GoLinkExternal } from 'react-icons/go'


export default function RepoContainer(props) {
    
    const redirectToRepo=(url)=>{
        window.open(url, "_target");
    }
   
    if(props.isSearch)
    {

        if(props.data_arr?.length > 0)
        {
            return (
                <div>
                    <p className='Repo-title'>{props.title}</p>
                    {props.data_arr.map((item)=>{
                        return (
                            <div style={{ padding:10 }} key={item.id}>
                                <div className='Repo-title-container'>
                                    <div>
                                        <p className='Repo-title' onClick={()=>redirectToRepo(item.svn_url)}>{item.name}</p>
                                    </div>
                                </div>    
                                <div className='bottom-width'>
                                    <p className='Repo-date'>
                                        {reformatDate(item.created_at)}
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
                    <p className='Repo-title'>{props.title}</p>
                    <p style={{ padding:10 }}>No results...</p>    
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

const reformatDate=(date)=>{
    return date.split('T')[0];
}