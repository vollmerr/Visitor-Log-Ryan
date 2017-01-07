// import {
//   Row,
//   Col,
//   Table,
//   Button,
//   FormControl,
//   Glyphicon
// <<<<<<< HEAD
// } from 'react-bootstrap';
// import React, {PropTypes} from 'react';
// import {connect} from 'react-redux';
// import {tableRowDelete, tableRowAdd, tableCellUpdate} from '../../actions/tableActions';
// import {ButtonType} from '../common/Buttons.js';
//
// const AdminPermissionsTable = ({adminPermissions, onDelete, onAdd, onInput}) => {
//   return (
//     <Row>
//       <Col xs={12}>
//         <h3>Permissions</h3>
//         <Table bordered condensed className="table-editable">
//           <thead>
//             <tr>
//               <th className="col-xs-4">Name</th>
//               <th className="col-xs-3">Role</th>
//               <th className="col-xs-3">Active</th>
//               <th className="col-xs-2" colSpan="2">
//                 <Button block bsStyle="primary" bsSize="sm" className="outline">Show Inactive</Button>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {adminPermissions.table.map(row => (
//               <tr key={row.id}>
//                 <td>
//                   <FormControl type="text" placeholder="Enter Name" className="input-sm" value={row.name} disabled/>
//                 </td>
//                 <td>
//                   <FormControl componentClass="select" className="input-sm" value={row.role} disabled>
//                     <option value="">Select Role</option>
//                     <option value="1">Security</option>
//                     <option value="2">Admin</option>
//                     <option value="3">Super Admin</option>
//                     <option value="4">Super Duper Admin</option>
//                   </FormControl>
//                 </td>
//                 <td>
//                   <ButtonType style="default" glyph="ok" id={row.id}/>
//                 </td>
//                 <td>
//                   <ButtonType style="primary" glyph="pencil" id={row.id}/>
//                 </td>
//                 <td>
//                   <ButtonType style="danger" glyph="remove" onClick={onDelete} id={row.id}/>
//                 </td>
//               </tr>
//             ))}
//             <tr>
//               <td>
//                 <FormControl type="text" placeholder="Enter Name" className="input-sm" value={adminPermissions.newRow.name} data-key="name" onChange={onInput}/>
//               </td>
//               <td>
//                 <FormControl componentClass="select" className="input-sm" data-key="role" onInput={onInput} value={adminPermissions.newRow.id}>
//                   <option value="0">Select Role</option>
// =======
// } from "react-bootstrap";
// import {connect} from "react-redux";
// import React, {PropTypes} from "react";
// import {tableRowAdd, tableRowDelete, tableCellUpdate, tableRowEdit, tableRowEditToggle} from "../../actions/tableActions";
//
// const AdminPermissions = ({
//   adminPermissions,
//   onAdd,
//   onDelete,
//   onInput,
//   toggleActive,
//   onEdit,
//   toggleEdit
// }) => (
//   <Row>
//     <Col xs={12}>
//       <h3>Permissions</h3>
//       <Table bordered condensed className="table-editable">
//         <thead>
//           <tr>
//             <th className="col-xs-4">Name</th>
//             <th className="col-xs-3">Role</th>
//             <th className="col-xs-3">Active</th>
//             <th className="col-xs-2" colSpan="2">
//               <Button block bsStyle="primary" bsSize="sm" className="outline">Show Inactive</Button>
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {adminPermissions.data.map(row => (
//             <tr key={row.id} data-id={row.id}>
//               <td className={adminPermissions.editing === row.id
//                 ? "editing"
//                 : ""}>
//                 <FormControl type="text" placeholder="Enter Name" className="input-sm" value={row.name} data-list="data" onInput={onInput} disabled={adminPermissions.editing !== row.id}/>
//               </td>
//               <td className={adminPermissions.editing === row.id
//                 ? "editing"
//                 : ""}>
//                 <FormControl componentClass="select" className="input-sm" value={row.role} data-list="data" onInput={onInput} disabled={adminPermissions.editing !== row.id}>
//                   <option value="">Select Role</option>
// >>>>>>> origin/master
//                   <option value="1">Security</option>
//                   <option value="2">Admin</option>
//                   <option value="3">Super Admin</option>
//                   <option value="4">Super Duper Admin</option>
//                 </FormControl>
//               </td>
// <<<<<<< HEAD
//               <td>
//                 <Button block bsStyle="default" bsSize="sm" className="outline" data-key="active"><Glyphicon glyph="ok"/></Button>
//               </td>
//               <td colSpan="2">
//                 <ButtonType style="success" glyph="plus" onClick={onAdd}/>
//               </td>
//             </tr>
//           </tbody>
//         </Table>
//       </Col>
//     </Row>
//   );
// }
//
// AdminPermissionsTable.propTypes = {
//   adminPermissions: PropTypes.object.isRequired,
//   onAdd: PropTypes.func.isRequired,
//   onDelete: PropTypes.func.isRequired,
//   onInput: PropTypes.func.isRequired
// };
//
// const mapStateToProps = (state) => ({adminPermissions: state.adminPermissions});
//
// const mapDispatchToProps = (dispatch, ownProps) => ({
//   onAdd: (e) => {
//     dispatch(tableRowAdd());
//   },
//   onDelete: (e) => {
//     dispatch(tableRowDelete(e.target.dataset.id));
//   },
//   onInput: (e) => {
//     dispatch(tableCellUpdate(e.target.dataset.key, e.target.value));
//   }
// });
//
// const AdminPermissions = connect(mapStateToProps, mapDispatchToProps)(AdminPermissionsTable);
// =======
//               <td className={adminPermissions.editing === row.id
//                 ? "editing"
//                 : ""}>
//                 <Button block bsStyle="default" bsSize="sm" className="outline" data-key="active" data-list="data" data-value={row.active} onClick={toggleActive} disabled={adminPermissions.editing !== row.id}><Glyphicon glyph="ok" className={row.active
//               ? ""
//               : "invisible"}/></Button>
//               </td>
//               <td>
//                 <Button block bsStyle="primary" bsSize="sm" className="outline" data-id={row.id} onClick={toggleEdit}><Glyphicon glyph={adminPermissions.editing === row.id
//               ? "ok"
//               : "pencil"}/></Button>
//               </td>
//               <td>
//                 <Button block bsStyle="danger" bsSize="sm" className="outline" onClick={onDelete}><Glyphicon glyph={adminPermissions.editing === row.id
//               ? "ban-circle"
//               : "remove"}/></Button>
//               </td>
//             </tr>
//           ))}
//           <tr>
//             <td>
//               <FormControl type="text" placeholder="Enter Name" className="input-sm" data-key="name" data-list="new" value={adminPermissions.new.name} onInput={onInput}/>
//             </td>
//             <td>
//               <FormControl componentClass="select" className="input-sm" data-key="role" data-list="new" value={adminPermissions.new.role} onChange={onInput}>
//                 <option value="0">Select Role</option>
//                 <option value="1">Security</option>
//                 <option value="2">Admin</option>
//                 <option value="3">Super Admin</option>
//                 <option value="4">Super Duper Admin</option>
//               </FormControl>
//             </td>
//             <td>
//               <Button block bsStyle="default" bsSize="sm" className="outline" data-key="active" data-list="new" data-value={adminPermissions.new.active} onClick={toggleActive}><Glyphicon glyph="ok" className={adminPermissions.new.active
//     ? ""
//     : "invisible"}/></Button>
//             </td>
//             <td colSpan="2">
//               <Button block bsStyle="success" bsSize="sm" className="outline" data-table="adminPermissions" onClick={onAdd}><Glyphicon glyph="plus"/></Button>
//             </td>
//           </tr>
//         </tbody>
//       </Table>
//     </Col>
//   </Row>
// );
// >>>>>>> origin/master
//
// AdminPermissions.propTypes = {
//   adminPermissions: PropTypes.object.isRequired,
//   onAdd: PropTypes.func.isRequired,
//   onDelete: PropTypes.func.isRequired,
//   onInput: PropTypes.func.isRequired,
//   toggleActive: PropTypes.func.isRequired,
//   toggleEdit: PropTypes.func.isRequired
// };
//
// const mapStateToProps = (state) => ({adminPermissions: state.adminPermissions});
//
// const mapDispatchToProps = (dispatch) => ({
//   onAdd(e) {
//     e.preventDefault();
//     dispatch(tableRowAdd(e.target.dataset.table));
//   },
//   onDelete(e) {
//     e.preventDefault();
//     dispatch(tableRowDelete(e.target.parentNode.parentNode.dataset.id));
//   },
//   onInput(e) {
//     e.preventDefault();
//     // dispatch(tableCellUpdate(e.target.dataset.key, e.target.value, e.target.dataset.list, e.target.parentNode.parentNode.dataset.id));
//     dispatch(tableCellUpdate(e.target.parentNode.parentNode.dataset.id));
//   },
//   toggleActive(e) {
//     e.preventDefault();
//     let toToggle = !(e.target.dataset.value === "true");
//     dispatch(tableCellUpdate(e.target.dataset.key, toToggle, e.target.dataset.list));
//   },
//   onEdit(e) {
//     e.preventDefault();
//     dispatch(tableRowEdit(e.target.dataset.id));
//   },
//   toggleEdit(e) {
//     e.preventDefault();
//     dispatch(tableRowEditToggle(e.target.dataset.id));
//   }
// });
//
// export default connect(mapStateToProps, mapDispatchToProps)(AdminPermissions);
