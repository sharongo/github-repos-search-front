import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { bookmark } from '../../actions/repository'


const Repositories = ({ repos, bookmark }) => {

    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <h2><i className="fab fa-github">Repositories</i></h2>
                </div>
            </div>
            <table className="table table-striped">
                <thead className="thead-inverse">
                    <tr>
                        <th>image</th>
                        <th>Name</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {repos && repos.length > 0 && repos.map(repository => (
                        <tr key={repository.id}>
                            <td>
                                <img className="rounded" width={40} src={repository.owner.avatar_url} />
                            </td>
                            <td>
                                {repository.name}
                            </td>
                            <td>
                                <button
                                    className="btn btn-primary btn-md"
                                    onClick={() => bookmark(repository.id, repository.owner.avatar_url, repository.name)}
                                >
                                    <i className="fas fa-star">Bookmark</i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

Repositories.propTypes = {
    repos: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
    repos: state.repository.repos
})
export default connect(mapStateToProps, {bookmark})(Repositories)