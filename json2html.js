export default function json2html(data) {
  // Get all unique keys from the data
  const keys = [...new Set(data.flatMap(Object.keys))];

  // Create the table header
  let html = '<table data-user="vashishthhgopal@gmail.com">\n<thead>\n<tr>';
  keys.forEach(key => {
    html += `<th>${key}</th>`;
  });
  html += '</tr>\n</thead>\n<tbody>\n';

  // Create table rows
  data.forEach(item => {
    html += '<tr>';
    keys.forEach(key => {
      html += `<td>${item[key] || ''}</td>`;
    });
    html += '</tr>\n';
  });

  html += '</tbody>\n</table>';
  return html;
}
