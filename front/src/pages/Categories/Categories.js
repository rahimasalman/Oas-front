import React from 'react'
import Sidenav from '../../components/Sidenav'
import iconEdit from '../../images/icon-edit.svg'
import iconDelete from '../../images/icon-delete.svg'
import iconClose from '../../images/icon-close.svg'
import { FaPlus } from 'react-icons/fa'

function Categories() {
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
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Add Category
                  </h5>
                  <button
                    type="button"
                    className="close-button"
                    data-bs-dismiss="modal"
                    aria-label="Close">
                    <img src={iconClose} />
                  </button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="mb-3">
                      <label
                        for="validationCustomUsername"
                        class="col-form-label">
                        Add a category
                      </label>
                      <div class="input-group has-validation">
                        <input
                          type="text"
                          class="form-control"
                          id="validationCustomUsername"
                          aria-describedby="inputGroupPrepend"
                          placeholder="Enter"
                          required
                        />
                        <div class="invalid-feedback">
                          Please choose a username.
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="submit" class="btn btn-success">
                    Save
                  </button>
                  <button
                    type="button"
                    class="btn btn-light"
                    data-bs-dismiss="modal">
                    Cancel
                  </button>
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
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>
                <button>
                  <img src={iconEdit} />
                </button>
                <button>
                  <img src={iconDelete} />
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>
                <button>
                  <img src={iconEdit} />
                </button>
                <button>
                  <img src={iconDelete} />
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>
                <button>
                  <img src={iconEdit} />
                </button>
                <button>
                  <img src={iconDelete} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Categories
