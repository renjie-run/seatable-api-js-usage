const { auth } = require('../auth');

const getLinkedRecords = async () => {
  const base = await auth();
  const metadata = await base.getMetadata();
  const tables = metadata.tables;
  const tableName = 'Table2';
  const linkColumnName = 'link-table1';
  const table = tables.find((table) => table.name === tableName);
  const linkColumn = table.columns.find(column => column.name === linkColumnName);
  const queryingRows = [
    { row_id: 'IYwwttG_RGKBub7zC9ftsw', 'limit': 1000, 'offset': 0 },
  ];
  const linkedRecords = await base.getLinkedRecords(table._id, linkColumn.key, queryingRows);
  // console.log(linkedRecords);
};

// getLinkedRecords();

module.exports = {
  getLinkedRecords,
};

