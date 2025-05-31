import Onstageheadline from '../../Home/Onstage/Onstageheadline'
import Onstagecard from '../../Home/Onstage/Onstagecard'
import { Progamticketcard } from '../../Home/Onstage/Carddata';

const Programlanding = () => {
  const ontsageheadline = {
    title: "June 2025",
    buttonText: "Agenda",
    color:'White'
  };

  return (
    <div className='Programlanding'>
      <div className="Programtopheadling">
       <h1>Program</h1>
      </div>
      <Onstageheadline  title={ontsageheadline.title} buttonText={ontsageheadline.buttonText} color={ontsageheadline.color} />
      <Onstagecard Carddata={Progamticketcard} color={ontsageheadline.color} />
    </div>
  )
}

export default Programlanding
