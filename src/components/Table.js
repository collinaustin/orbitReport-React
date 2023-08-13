import styles from './styling.css';

const Table = ({ sat }) => {

function status(isOperational) {
  if(isOperational){
    return "Operational";
  }
  return "Not Operational";
}

  return (
      <table>
       <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
        </thead>
        <tbody>
          {sat.map((data, id) => (
          <tr key={id}>
            <td>{data.name}</td>
            <td>{data.type}</td>
            <td>{data.launchDate}</td>
            <td>{status(data.operational)}</td>
        </tr>
        ))}
        </tbody>
      </table>
  );
};

export default Table;