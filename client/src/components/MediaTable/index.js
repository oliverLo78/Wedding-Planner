import BootstrapTable from 'react-bootstrap-table-next';
import React from 'react';


const MediaTable = () => {
  const mediaListData = [
    {
      mediaID: '1234',
      type: 'video',
      url: 'testUrl.com',
      wedding_id: '101112',
    },
    {
      mediaID: '5678',
      type: 'video2',
      url: 'testURL.com',
      wedding_id: '131415',
    },
  ];

  const columns = [
    {
      dataField: 'mediaID',
      text: 'Media ID ',
      filter: {
        placeholder: 'Search by media ID',
        getFilter: (filter) => {
          return {
            test: (value, data) => {
              return (
                data.mediaID.toLowerCase().includes(value.toLowerCase()) ||
                value === ''
              );
            },
          };
        },
      },
    },
    {
      dataField: 'type',
      text: 'File Type',
      sort: true,
    },
    {
      dataField: 'url',
      text: 'URL Link',
      sort: true,
    },
    {
      dataField: 'wedding_id',
      text: 'wedding ID',
    },
  ];

  return (
    <div>
      <BootstrapTable
        data={mediaListData}
        keyField="weddind_id"
        columns={columns}
      />
    </div>
  );
};

export default MediaTable;
