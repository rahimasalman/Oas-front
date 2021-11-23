import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import Sidenav from '../../components/Sidenav'
import iconEdit from '../../images/icon-edit.svg'
import iconDelete from '../../images/icon-delete.svg'
import iconClose from '../../images/icon-close.svg'
import { FaPlus } from 'react-icons/fa'

function Categories() {
  const [category, setCategory] = useState({
    name: '',
  })
  const [editedCategory, setEditedCategory] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  const [deleteId, setDeleteId] = useState(null)

  const tokenUsers = localStorage.getItem('tokenUsers')

  const onInputChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await axios
      .post(
        `${process.env.REACT_APP_API_URL}api/categories`,
        {
          name: category.name,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer 46|s2qMomccCBR0uO1dw6v1W9qSwtIFd6xaTXxh3FTe',
          },
        }
      )
      .then((res) => {
        console.log(res)
        setCategory({
          name: '',
        })
        getCategories()
      })
      .catch((err) => console.log(err))

    if (!category) {
      // display alert
    } else if (editedCategory && isEditing) {
      // editing
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: editedCategory }
          }
          return item
        })
      )
      setEditedCategory('')
      setEditId(null)
      setIsEditing(false)
    } else {
      // show <alert>                                                                                                                                                                                                                                                                                     </alert>
    }
  }

  const navigate = useNavigate()

  const getCategories = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}api/categories`, {
        headers: {
          Authorization: 'Bearer 46|s2qMomccCBR0uO1dw6v1W9qSwtIFd6xaTXxh3FTe',
        },
      })
      .then((res) => {
        if (res.data.categories) {
          console.log(res.data.categories)
          setList(res.data.categories)
        } else {
          setList([])
        }
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    tokenUsers ? getCategories() : navigate('/')
  }, [tokenUsers, navigate])

  const removeItem = (id) => {
    // setList(list.filter((item) => item.id !== id))
    console.log(id)
    axios
      .delete(`${process.env.REACT_APP_API_URL}api/categories/${id}`, {
        headers: {
          Authorization: 'Bearer 46|s2qMomccCBR0uO1dw6v1W9qSwtIFd6xaTXxh3FTe',
        },
      })
      .then((res) => {
        getCategories()
      })
      .catch((err) => console.log(err))
  }

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id)
    setIsEditing(true)
    setEditId(id)
    setEditedCategory(specificItem.title)
    console.log(specificItem.title)
  }

  return (
    <div className="categories">
      <h1>Categories</h1>

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
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="mb-3">
                      <label
                        htmlFor="validationCustomUsername"
                        className="col-form-label">
                        Add a category
                      </label>
                      <div className="input-group has-validation">
                        <input
                          type="text"
                          className="form-control"
                          id="validationCustomUsername"
                          aria-describedby="inputGroupPrepend"
                          placeholder="Enter"
                          required
                          name="name"
                          value={category.name}
                          onChange={(e) => onInputChange(e)}
                        />
                        <div className="invalid-feedback">
                          Please choose a username.
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-success"
                      data-bs-dismiss="modal">
                      Save
                    </button>
                    <button
                      type="submit"
                      className="btn btn-light mx-3"
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
              <th scope="col" width="5%">
                №
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
                  <td>
                    {isEditing ? (
                      <input
                        disabled
                        value={editedCategory}
                        onChange={(e) => setEditedCategory(e.target.value)}
                      />
                    ) : (
                      <span>{item.name}</span>
                    )}
                  </td>
                  <td>
                    <button
                      data-bs-toggle="modal"
                      onClick={() => editItem(item.id)}>
                      <img src={iconEdit} alt="icon" />
                    </button>
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal1"
                      onClick={() => setDeleteId(item.id)}>
                      <img src={iconDelete} alt="icon" />
                    </button>
                    <div
                      className="modal fade"
                      id="exampleModal1"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true">
                      <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              Confirm Deletion
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
                            <form>
                              <div className="my-3 text-center">
                                <p className="fw-bold">Delete this row?</p>
                                <span>This action can’t be undone</span>
                              </div>
                              <div className="d-flex justify-content-center">
                                <button
                                  type="button"
                                  data-bs-dismiss="modal"
                                  className="btn btn-danger mx-3"
                                  onClick={() => removeItem(deleteId)}>
                                  Delete
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-light mx-3"
                                  data-bs-dismiss="modal">
                                  Cancel
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Categories
