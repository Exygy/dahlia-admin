import React, { Fragment } from 'react'

class ExpandableTableRow extends React.Component {
  constructor (props) {
    super(props)
    this.state = {expanded: false}
  }

  toggleExpandedRow = () => {
    this.setState((prevState) => {
      return {expanded: !prevState.expanded}
    })
  }

  render() {
    const { row, numColumns, expanderRenderer, expandedRowRenderer } = this.props

    return (
      <Fragment>
        <tr className="tr-expand" aria-expanded={this.state.expanded}>
          {row.map((datum, j) => (
            <td key={j}>
              {datum}
            </td>
          ))}
          <td key="expander">
            {expanderRenderer(row, this.state.expanded, this.toggleExpandedRow)}
          </td>
        </tr>
        <tr className="tr-expand-content" aria-hidden={!this.state.expanded}>
          <td colSpan={numColumns} className="td-expand-nested no-padding">
            {expandedRowRenderer(row, this.toggleExpandedRow)}
          </td>
        </tr>
      </Fragment>
    )
  }
}

class ExpandableTable extends React.Component {
  render() {
    const { columns, rows, expanderRenderer, expandedRowRenderer } = this.props

    const numColumns = columns.length

    return (
      <table className="td-light td-plain th-plain" role="grid">
        <thead>
          <tr>
            {columns.map((column, i) => (
              <th key={i} scope="col" className={column.classes ? column.classes.join(' ') : ''}>
                {column.content}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, i) => (
            <ExpandableTableRow
              key={i}
              row={row}
              numColumns={numColumns}
              expanderRenderer={expanderRenderer}
              expandedRowRenderer={expandedRowRenderer} />
          ))}
        </tbody>
      </table>
    )
  }
}

export default ExpandableTable