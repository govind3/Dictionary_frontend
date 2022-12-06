import React,{useState} from 'react'
import {Link} from "react-router-dom"
import { Table } from 'react-bootstrap';
const Filter = () => {

  return (
    <div style={{ textAlign: 'center' }}>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th><Link to='/'>a</Link></th>
          <th><Link to='/'>b</Link></th>
          <th><Link to='/'>c</Link></th>
          <th><Link to='/'>d</Link></th>
          <th><Link to='/'>e</Link></th>
          <th><Link to='/'>f</Link></th>
          <th><Link to='/'>g</Link></th>
          <th><Link to='/'>h</Link></th>
          <th><Link to='/'>i</Link></th>
          <th><Link to='/'>j</Link></th>
          <th><Link to='/'>k</Link></th>
          <th><Link to='/'>l</Link></th>
          <th><Link to='/'>m</Link></th>
        </tr>
        <tr>
          <th><Link to='/'>n</Link></th>
          <th><Link to='/'>o</Link></th>
          <th><Link to='/'>p</Link></th>
          <th><Link to='/'>q</Link></th>
          <th><Link to='/'>r</Link></th>
          <th><Link to='/'>s</Link></th>
          <th><Link to='/'>t</Link></th>
          <th><Link to='/'>u</Link></th>
          <th><Link to='/'>v</Link></th>
          <th><Link to='/'>w</Link></th>
          <th><Link to='/'>x</Link></th>
          <th><Link to='/'>y</Link></th>
          <th><Link to='/'>z</Link></th>
        </tr>
      </thead>
    </Table>
    </div>
  )
}

export default Filter;