import React from 'react'
import Button from 'devextreme-react/button'
import DataGrid, {
  Column,
  Editing,
  Paging,
  Lookup,
} from 'devextreme-react/data-grid'

import { employees } from './data.js'

class TableApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = { events: [] }
    this.logEvent = this.logEvent.bind(this)
    this.onEditingStart = this.logEvent.bind(this, 'EditingStart')
    this.onInitNewRow = this.logEvent.bind(this, 'InitNewRow')
    this.onRowInserting = this.logEvent.bind(this, 'RowInserting')
    this.onRowInserted = this.logEvent.bind(this, 'RowInserted')
    this.onRowUpdating = this.logEvent.bind(this, 'RowUpdating')
    this.onRowUpdated = this.logEvent.bind(this, 'RowUpdated')
    this.onRowRemoving = this.logEvent.bind(this, 'RowRemoving')
    this.onRowRemoved = this.logEvent.bind(this, 'RowRemoved')
    this.onSaving = this.logEvent.bind(this, 'Saving')
    this.onSaved = this.logEvent.bind(this, 'Saved')
    this.onEditCanceling = this.logEvent.bind(this, 'EditCanceling')
    this.onEditCanceled = this.logEvent.bind(this, 'EditCanceled')

    this.clearEvents = this.clearEvents.bind(this)
  }

  logEvent(eventName) {
    this.setState((state) => ({ events: [eventName].concat(state.events) }))
  }

  clearEvents() {
    this.setState({ events: [] })
  }

  render() {
    return (
      <React.Fragment>
        <DataGrid
          id="gridContainer"
          dataSource={employees}
          keyExpr="ID"
          allowColumnReordering={true}
          showBorders={true}
          onEditingStart={this.onEditingStart}
          onInitNewRow={this.onInitNewRow}
          onRowInserting={this.onRowInserting}
          onRowInserted={this.onRowInserted}
          onRowUpdating={this.onRowUpdating}
          onRowUpdated={this.onRowUpdated}
          onRowRemoving={this.onRowRemoving}
          onRowRemoved={this.onRowRemoved}
          onSaving={this.onSaving}
          onSaved={this.onSaved}
          onEditCanceling={this.onEditCanceling}
          onEditCanceled={this.onEditCanceled}>
          <Paging enabled={true} />
          <Editing
            mode="row"
            allowUpdating={true}
            allowDeleting={true}
            allowAdding={true}
          />

          <Column dataField="ID" width="40" />
          <Column dataField="FirstName" />
          <Column dataField="Email" />
          <Column dataField="Password" width="120" />
          <Column dataField="Repassword" width="120" />
        </DataGrid>
      </React.Fragment>
    )
  }
}

export default TableApp
