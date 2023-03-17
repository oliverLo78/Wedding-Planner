import BootstrapTable from 'react-bootstrap-table-next';

import React from 'react';

const SearchTable = (props) => {
  return (
    <div>
      <BootstrapTable
        data={props.data}
        keyField={props.keyField}
        columns={props.columns}
        selectRow={props.selectRow}
      />
    </div>
  );
};

export default SearchTable;
