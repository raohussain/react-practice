import React from 'react';
import Button from './Button';
import SagaContainer from './SagaContainer';
import Loading from './Loading'
let SagaApp = () => (
  <div>
     <Button />
     <Loading />
     <SagaContainer/>
  </div>
);
export default SagaApp;