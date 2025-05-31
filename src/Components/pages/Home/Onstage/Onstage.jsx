import React from 'react'
import Onstageheadline from './Onstageheadline'
import Onstagecard from './Onstagecard'
import { Homeonstagecard } from './Carddata'
const Onstage = () => {
  const ontsageheadline = {
    title: "On stage at Tabbaco",
    buttonText: "Agenda"
  };

  return (
    <div className='Onstage'>
      <Onstageheadline title={ontsageheadline.title} buttonText={ontsageheadline.buttonText} />
<Onstagecard Carddata={Homeonstagecard} />
    </div>
  );
};

export default Onstage;
