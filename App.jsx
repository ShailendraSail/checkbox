import React from 'react';
import Multiselect from './Multiselect';

const App = () => {
  return (
    <div>
      <h1>Multi-Select Dropdown with Checkboxes</h1>
      <Multiselect value={['val1', 'val2', 'val3', 'val4']} readonly={false} />
    </div>
  );
};

export default App;
