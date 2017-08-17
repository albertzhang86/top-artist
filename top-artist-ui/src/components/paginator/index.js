import React from 'react';
import { Pagination } from 'react-bootstrap';

const Paginator = ({totalPages, page, handleSelect}) => (
<div className="row">
  <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          items={ parseInt(totalPages)}
          maxButtons={5}
          activePage={parseInt(page)}
          onSelect={handleSelect} /></div>
      )
export default Paginator;
