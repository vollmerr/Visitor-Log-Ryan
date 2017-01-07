const data = {
  "adminPermissions": {
    table: [
      {
        "id": 12,
        "name": "person1",
        "role": 1,
        "active": true
      }, {
        "id": 89,
        "name": "person2",
        "role": 3,
        "active": true
      }, {
        "id": 72,
        "name": "person4",
        "role": 2,
        "active": false
      }, {
        "id": 39,
        "name": "person5",
        "role": 1,
        "active": true
      }
    ],
    newRow: { //  data of new entry to add
      "id": 999,
      "name": "new_name",
      "role": 4,
      "active": true
    },
    toDelete: 72, //  id of entry to delete
    editing: 89 //  id of entry to edit
  },
  // isSaving: false
};

export default data;
