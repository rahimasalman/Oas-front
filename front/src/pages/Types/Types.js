import React, { useState } from 'react'
import Sidenav from '../../components/Sidenav'
import iconEdit from '../../images/icon-edit.svg'
import iconDelete from '../../images/icon-delete.svg'
import iconClose from '../../images/icon-close.svg'
import { FaPlus } from 'react-icons/fa'

function Types() {
  const [types, setTypes] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!types) {
      // display alert
    } else if (types && isEditing) {
      // editing
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: types }
          }
          return item
        })
      )
      setTypes('')
      setEditId(null)
      setIsEditing(false)
    } else {
      // show alert
      const newTypes = {
        id: new Date().getTime().toString(),
        title: types,
      }
      list.push(newTypes)
      setTypes('')
      console.log(list)
    }
  }

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id))
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id)
    setIsEditing(true)
    setEditId(id)
    setTypes(specificItem.title)
    console.log(specificItem)
  }

  return (
    <div className="categories">
      <h1>Types</h1>

      <Sidenav />
      <div className="container">
        <div className="col-11 text-right ">
          <button
            type="button"
            className="btn btn-success add-button px-4 mb-4 rounded-3 pull-right"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal">
            <span className="plus-icon">
              <FaPlus
                color="white"
                style={{
                  height: '20px',
                  width: '20px',
                  padding: '4px',
                }}
              />
            </span>
            Add
          </button>

          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Add Category
                  </h5>
                  <button
                    type="button"
                    className="close-button"
                    data-bs-dismiss="modal"
                    aria-label="Close">
                    <img src={iconClose} alt="icon" />
                  </button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label
                        htmlFor="validationCustomUsername"
                        className="col-form-label">
                        Category name
                      </label>
                      <div className="dropdown">
                        <button
                          className="btn dropdown-toggle w-100  text-left align-left"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false">
                          Dropdown button
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton">
                          <a className="dropdown-item" href="#">
                            Action
                          </a>
                          <a className="dropdown-item" href="#">
                            Another action
                          </a>
                          <a className="dropdown-item" href="#">
                            Something else here
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="validationCustomUsername"
                        className="col-form-label">
                        Types
                      </label>
                      <div className="input-group has-validation">
                        <input
                          type="text"
                          className="form-control"
                          id="validationCustomUsername"
                          aria-describedby="inputGroupPrepend"
                          placeholder="Enter"
                          required
                          value={types}
                          onChange={(e) => {
                            setTypes(e.target.value)
                          }}
                        />
                        <div className="invalid-feedback">
                          Please choose a username.
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-success mr-2">
                      Save
                    </button>
                    <button
                      type="button"
                      className="btn btn-light"
                      data-bs-dismiss="modal">
                      Cancel
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col" width="1%">
                №
              </th>
              <th scope="col" className="types-name">
                Type Name
              </th>
              <th scope="col" className="category-name">
                Category Name
              </th>
              <th scope="col" width="15%" className="operation-name">
                Operations
              </th>
            </tr>
          </thead>
          <tbody>
            {list.map((item, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{item.id}</th>
                  <td>{item.title}</td>
                  <td>{item.title}</td>
                  <td>
                    <button onClick={() => editItem(item.id)}>
                      <img src={iconEdit} alt="icon" />
                    </button>
                    <button onClick={() => removeItem(item.id)}>
                      <img src={iconDelete} alt="icon" />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Types
