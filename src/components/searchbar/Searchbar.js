import React, { useContext, useState } from 'react'
import { connect } from 'react-redux'
import './Searchbar.css'
import { AiOutlineSearch,AiOutlineClose } from 'react-icons/ai'
import { AppContext } from '../../Contexts'


export const Searchbar = (props) => {

  const appContext = useContext(AppContext);
  
  const [searchTerm,setSearchTerm] = useState("");
  const [isSearch,setIsSearch] = useState(false);

  const searchChange = (e) =>{
    setSearchTerm(e.target.value);
    setIsSearch(false);
    appContext.ClearReposAction();
    appContext.ClearOrgsAction();
  }

  const onKeyBoardPress = (e) =>{
    if (e.key === 'Enter') {
      searchProcess(e.target.value);
    }
  }

  const searchProcess=()=>{
    if(searchTerm)
    {
      setIsSearch(true);
      appContext.GetReposAction(searchTerm);
      appContext.GetOrgsAction(searchTerm);

    }
    else
    {
      alert("Please insert username");
    }
  }

  const clearSearch=()=>{
    setIsSearch(false);
    setSearchTerm("");
    appContext.ClearReposAction();
    appContext.ClearOrgsAction();

  }
  return (
    <div data-testid={"searchbar-comp"} style={{ display:"flex" }}>
        <div className='SearchBar-div-left'>
            <input className='SearchBar-input' value={searchTerm} onKeyPress={onKeyBoardPress} onChange={searchChange} placeholder='Search Username...'/>
        </div>
        <div className='SearchBar-div-right'>
          {!isSearch ? <AiOutlineSearch onClick={searchProcess} size={30} /> :
          <AiOutlineClose onClick={clearSearch} size={30} />}
        </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  repo:state.repo
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar)