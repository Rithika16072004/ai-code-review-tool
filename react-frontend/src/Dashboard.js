import React from 'react';

function Dashboard({ analysisResults }) {
  return (
    <div>
      <h2>Code Analysis Dashboard</h2>
      
      {analysisResults && analysisResults.length > 0 ? (
        <table border="1" style={{ width: "100%", textAlign: "left" }}>
          <thead>
            <tr>
              <th>File Name</th>
              <th>Line Number</th>
              <th>Severity</th>
              <th>Suggestion</th>
            </tr>
          </thead>
          <tbody>
            {analysisResults.map((issue, idx) => (
              <tr key={idx}>
                <td>{issue.file_name}</td>
                <td>{issue.line_number}</td>
                <td>{issue.severity}</td>
                <td>{issue.suggestion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No issues found yet.</p>
      )}
    </div>
  );
}

export default Dashboard;
