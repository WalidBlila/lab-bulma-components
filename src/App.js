import 'bulma/css/bulma.css';
import React from 'react';
import Navbar from './Navbar/Navbar';
import FormFields from './FormFields/FormFields';
import CoolButton from './CoolButton/CoolButton';

import 'bulma/css/bulma.css';




const App = () => {
  return (
   <div>
    <Navbar/>
    <FormFields label="Name" type="text" placeholder="e.g Alex Smith"/>
    <FormFields label="Email" type="email" placeholder="e.g. alexsmith@gmail.com"/>
    <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
    <CoolButton isSmall isSuccess>Button 2</CoolButton>

  </div>
  );
}

export default App;
