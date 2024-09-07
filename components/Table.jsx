import React, { useEffect, useState } from 'react'
import { DataTable } from 'react-native-paper';

export default function Table({titles, data, itensPorPagina}) {
  const [page, setPage] = useState(0);
  const numberOfItemsPerPageList = useState(itensPorPagina ? itensPorPagina : 10);
  const [itemsPerPage, onItemsPerPageChange] = useState(
    numberOfItemsPerPageList[0]
  );

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, data.length);

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <DataTable>
      <DataTable.Header>
        {titles.map((title, index) => (
          <DataTable.Title key={index}>{title}</DataTable.Title>
        ))}
      </DataTable.Header>
      {
        data.slice(from, to).map((item, index) => (
          <DataTable.Row key={index}>
            {
              Object.values(item).map((value, index) => (
                <DataTable.Cell key={index}>{value}</DataTable.Cell>
              ))
            }
          </DataTable.Row>
        ))
      }
      <DataTable.Pagination
        page={page}
        numberOfPages={Math.ceil(data.length / itemsPerPage)}
        onPageChange={(page) => setPage(page)}
        label={`${from + 1}-${to} of ${data.length}`}
        numberOfItemsPerPageList={numberOfItemsPerPageList}
        numberOfItemsPerPage={itemsPerPage}
        onItemsPerPageChange={onItemsPerPageChange}
        showFastPaginationControls
        selectPageDropdownLabel={'Linhas por página'}
      />
    </DataTable>
  )
}
