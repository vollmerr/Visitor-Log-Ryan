import {
  Row,
  Col,
  Table,
  Button,
  FormControl,
  Glyphicon
} from 'react-bootstrap';
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {tableRowDelete, tableRowAdd, tableCellUpdate} from '../../actions/tableActions';
import {ButtonType} from '../common/Buttons.js';

const AdminPermissionsTable = ({adminPermissions, onDelete, onAdd, onInput}) => {
  return (
    <Row>
      <Col xs={12}>
        <h3>Permissions</h3>
        <Table bordered condensed className="table-editable">
          <thead>
            <tr>
              <th className="col-xs-4">Name</th>
              <th className="col-xs-3">Role</th>
              <th className="col-xs-3">Active</th>
              <th className="col-xs-2" colSpan="2">
                <Button block bsStyle="primary" bsSize="sm" className="outline">Show Inactive</Button>
              </th>
            </tr>
          </thead>
          <tbody>
            {adminPermissions.table.map(row => (
              <tr key={row.id}>
                <td>
                  <FormControl type="text" placeholder="Enter Name" className="input-sm" value={row.name} disabled/>
                </td>
                <td>
                  <FormControl componentClass="select" className="input-sm" value={row.role} disabled>
                    <option value="">Select Role</option>
                    <option value="1">Security</option>
                    <option value="2">Admin</option>
                    <option value="3">Super Admin</option>
                    <option value="4">Super Duper Admin</option>
                  </FormControl>
                </td>
                <td>
                  <ButtonType style="default" glyph="ok" id={row.id}/>
                </td>
                <td>
                  <ButtonType style="primary" glyph="pencil" id={row.id}/>
                </td>
                <td>
                  <ButtonType style="danger" glyph="remove" onClick={onDelete} id={row.id}/>
                </td>
              </tr>
            ))}
            <tr>
              <td>
                <FormControl type="text" placeholder="Enter Name" className="input-sm" value={adminPermissions.newRow.name} data-key="name" onChange={onInput}/>
              </td>
              <td>
                <FormControl componentClass="select" className="input-sm" data-key="role" onInput={onInput} value={adminPermissions.newRow.id}>
                  <option value="0">Select Role</option>
                  <option value="1">Security</option>
                  <option value="2">Admin</option>
                  <option value="3">Super Admin</option>
                  <option value="4">Super Duper Admin</option>
                </FormControl>
              </td>
              <td>
                <Button block bsStyle="default" bsSize="sm" className="outline" data-key="active"><Glyphicon glyph="ok"/></Button>
              </td>
              <td colSpan="2">
                <ButtonType style="success" glyph="plus" onClick={onAdd}/>
              </td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}

AdminPermissionsTable.propTypes = {
  adminPermissions: PropTypes.object.isRequired,
  onAdd: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onInput: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({adminPermissions: state.adminPermissions});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onAdd: (e) => {
    dispatch(tableRowAdd());
  },
  onDelete: (e) => {
    dispatch(tableRowDelete(e.target.dataset.id));
  },
  onInput: (e) => {
    dispatch(tableCellUpdate(e.target.dataset.key, e.target.value));
  }
});

const AdminPermissions = connect(mapStateToProps, mapDispatchToProps)(AdminPermissionsTable);

export default AdminPermissions;
