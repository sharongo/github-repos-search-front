import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getBookmarks, bookmark } from '../../actions/repository'

const Bookmarks = ({ bookmarks, getBookmarks }) => {
    
    useEffect(() => {
        getBookmarks()
    }, [])

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
                    {bookmarks && bookmarks.length > 0 && bookmarks.map(bookmark => (
                        <tr key={bookmark.id}>
                            <td>
                                <img className="rounded" width={40} src={bookmark.avatar} />
                            </td>
                            <td>
                                {bookmark.name}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
    bookmarks: state.repository.bookmarks
})

export default connect(mapStateToProps, { getBookmarks })(Bookmarks)
