import React, { useState } from 'react'
import { connect } from 'react-redux'
import { getRepositories } from '../../actions/repository'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'




const Dashboard = ({ getRepositories, history }) => {


    const [formData, setFormData] = useState({
        reposName: ''
    })

    const { reposName } = formData;

    const onChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    const onSubmit = e => {
        e.preventDefault()
        getRepositories(reposName, history)

    }



    return (
        <div>
            <div className="card">
                <div className="card-header">
                    Repositories search
                    </div>
                <div className="card-body">
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="form-group">
                            <label htmlFor="reposName">Repository Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="reposName"
                                required
                                onChange={(e) => onChange(e)}
                                value={reposName}
                            />
                        </div>
                        <input
                            type="submit"
                            value="Search"
                            className="btn btn-primary btn-block"
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

Dashboard.propTypes = {
    getRepositories: PropTypes.func.isRequired,
}

export default connect(null, { getRepositories })(withRouter(Dashboard))
