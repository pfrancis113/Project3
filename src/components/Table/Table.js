import React from 'react';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import { data } from './exerciseData.json';

class Table extends React.Component {
    constructor() {
      super();
      this.state = {
        data: data
      };
      this.renderEditable = this.renderEditable.bind(this);
    }
    renderEditable(cellInfo) {
      return (
        <div
          style={{ backgroundColor: "#fafafa" }}
          contentEditable
          suppressContentEditableWarning
          onBlur={e => {
            const data = [...this.state.data];
            data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
            this.setState({ data });
          }}
          dangerouslySetInnerHTML={{
            __html: this.state.data[cellInfo.index][cellInfo.column.id]
          }}
        />
      );
    }
    render() {
      const { data } = this.state;
      return (
        <div>
          <ReactTable
            data={data}
            
            columns={[
            
              {
                Header: "Exercise",
                accessor: "exercise",
                // Cell: this.renderEditable
              },
              {
                Header: "Olympic Lifting Development",
                accessor: "repXwt",
                // Cell: this.renderEditable,
                columns: [
                    {
                        Header: "Set 1",
                        accessor: "set1",
                        width: 70,
                        Cell: this.renderEditable
                    },
                    {
                        Header: "Set 2",
                        accessor: "set2",
                        width: 70,
                        Cell: this.renderEditable
                    },
                    {
                        Header: "Set 3",
                        accessor: "set3",
                        width: 70,
                        Cell: this.renderEditable
                    },
                    {
                        Header: "Set 4",
                        accessor: "set4",
                        width: 70,
                        Cell: this.renderEditable
                    },
                    {
                        Header: "Set 5",
                        accessor: "set5",
                        width: 70,
                        Cell: this.renderEditable
                    }
                ]


              },
              {
                Header: "Comment",
                id: "comment",
                width: 150,
                Cell: this.renderEditable
              }
            ]}
            defaultPageSize={8}
            className="-striped -highlight"
            showPagination = {false}
          />
          <br />
          
        </div>
      );
    }
  }

export default Table;