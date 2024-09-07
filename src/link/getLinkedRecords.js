const { auth } = require('../auth');

const getLinkedRecords = async () => {
  const base = await auth();
  const metadata = await base.getMetadata();
  const tables = metadata.tables;
  const tableName = 'link2';
  const linkColumnName = 'link1';
  const table = tables.find((table) => table.name === tableName);
  const linkColumn = await base.getColumnByName(tableName, linkColumnName);
  const queryingRows = [
    { row_id: 'BwP74JPNSSO9qRZ2cjAe8Q', 'limit': 2, 'offset': 0 },
  ];
  const linkedRecords = await base.getLinkedRecords(table._id, linkColumn.key, queryingRows);
  console.log(linkedRecords);
};

getLinkedRecords();

module.exports = {
  getLinkedRecords,
};
