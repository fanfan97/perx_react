import React from 'react'
import { connect } from 'react-redux'
import OrgContainer from '../../components/resultbox/OrgContainer'
import RepoContainer from '../../components/resultbox/RepoContainer'
import { Searchbar } from '../../components/searchbar/Searchbar'
import './Dashboard.css'
export const Dashboard = (props) => {
  return (
    <div data-testid={"dashboard-comp"}>
       <header className="Dashboard-header">
        <div style={{ margin:20 }}>
          <Searchbar />
        </div>
      </header>
      
      <div className="Dashboard-body Dashbaord-div-flex">
          {props.orgs.isSearch && props.repo.isSearch && <div data-testid={"repo-div-container"} className='Dashboard-div-body'>
            <RepoContainer data_arr={props.repo.repos_arr} isSearch={props.repo.isSearch} title={"Public Repositories"}/>
          </div>}

          {props.orgs.isSearch && props.repo.isSearch && <div data-testid={"orgs-div-container"} className='Dashboard-div-body'>
            <OrgContainer data_arr={props.orgs.orgs_arr} isSearch={props.orgs.isSearch} title={"Organization"}/>
          </div>}

          {!props.orgs.isSearch && !props.repo.isSearch && 
          <div className='Dashboard-div-body Dashboard-msg-box'>
            <p className='msg-text'>Please "Enter" to search...</p>
          </div>}

      </div>
    </div>    
  )
}

const mapStateToProps = (state) => ({
  repo:state.repoStore,
  orgs:state.orgStore,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)