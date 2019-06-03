import React from 'react'
import PropTypes from 'prop-types'
import { each, includes, last, uniqBy, map, sortBy } from 'lodash'
import ReactTable from 'react-table'
import utils from '~/utils/utils'
import IndexTableCell from './IndexTableCell'

class IndexTable extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      expanded: {},
      data: [...props.results]
    }
  }

  columnData = () => {
    let { fields } = this.props
    var columns = []
    each(fields, (attrs, field) => {
      attrs = attrs || {}
      if (field === 'Id' || field === 'id') return
      let column = {
        id: field,
        accessor: (row) => (
          row[field]
        ),
        Cell: (cellInfo) => {
          let val = this.state.data[cellInfo.index][cellInfo.column.id]
          return <IndexTableCell {...{ attrs, val }} />
        },
        filterMethod: (filter, row) => {
          return (
            // do case insensitive RegExp match instead of the default "startsWith"
            row[filter.id].match(new RegExp(filter.value, 'ig'))
          )
        }
      }
      if (attrs.minWidth) {
        column.minWidth = attrs.minWidth
      }
      if (attrs.label) {
        column.Header = attrs.label
      } else if (includes(field, '.')) {
        column.Header = utils.cleanField(last(field.split('.')))
      } else {
        column.Header = utils.cleanField(field)
      }
      // for Listings Tab
      if (column.Header === 'Name') {
        column.filterable = true
      }
      if (column.Header === 'Last Name') {
        column.filterable = true
      }
      // TO DO: update when Mobx is implemented so no need to pass page
      if (column.Header === 'Listing Name' && this.props.page === 'listing_index') {
        column.filterable = true
      }
      if (column.Header === 'Listing Name' && !(this.props.page === 'listing_index')) {
        column.filterable = true
        column.filterMethod = (filter, row) => {
          if (filter.value === 'all') {
            return true
          }
          return row[filter.id] === filter.value
        }
        column.Filter = ({ filter, onChange }) => {
          let listingOptions = []
          let i = 0
          let uniqListings = uniqBy(map(this.props.results, (result) => {
            return {
              name: result['Listing.Name'] || result['listing_name']
            }
          }), 'name')
          let sortedUniqListings = sortBy(uniqListings, (listing) => {
            return listing.name
          })

          each(sortedUniqListings, (listing) => {
            listingOptions.push(
              <option value={listing.name} key={i++}>{listing.name}</option>
            )
          })

          const selectFilterValue = filter ? filter.value : (sortedUniqListings[0] ? sortedUniqListings[0].name : undefined)

          return (
            <select
              onChange={event => onChange(event.target.value)}
              style={{ width: '100%' }}
              value={selectFilterValue}
            >
              <option value='all'>Show All</option>
              {listingOptions}
            </select>
          )
        }
      }
      columns.push(column)
    })
    return columns
  }

  render () {
    let { links } = this.props
    var getTrProps = (state, rowInfo, column, instance) => {
      return {
        onClick: (e, handleOriginal) => {
          let expanded = {
            // toggle this row's expanded state onClick
            [rowInfo.viewIndex]: !this.state.expanded[rowInfo.viewIndex]
          }
          this.setState({ expanded })
        }
      }
    }

    return (
      <ReactTable
        columns={this.columnData()}
        data={this.state.data}
        SubComponent={row => {
          let linkTags = []
          let i = 0
          // TODO: this seems like something that needs to be refactored…
          // I'm not sure why a generic table component has specific
          // link data set up this way. -JW
          each(links, (link) => {
            let href = ''
            const originalId = row.original.Id || row.original.id
            if (link === 'View Listing') {
              href = `/listings/${originalId}`
            } else if (link === 'Edit Listing') {
              href = `/listings/${originalId}/edit`
            }
            if (href) {
              linkTags.push(
                <li key={i++}>
                  <a className='button secondary tiny' href={href}>
                    {link}
                  </a>
                </li>
              )
            }
          })
          return (
            <ul className='subcomponent button-radio-group segmented-radios inline-group'>
              {linkTags}
            </ul>
          )
        }}
        getTrProps={getTrProps}
        expanded={this.state.expanded}
      />
    )
  }
}

IndexTable.propTypes = {
  results: PropTypes.array,
  fields: PropTypes.object,
  links: PropTypes.array
}

export default IndexTable
