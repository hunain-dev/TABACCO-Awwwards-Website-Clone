import { useNavigate } from 'react-router-dom';
import Loader from '../../../Loader/Loader';

const Onstagecard = ({ Carddata, color }) => {
  const navigate = useNavigate();

  const handleClick = (item) => {
   navigate(`/Carddata/${encodeURIComponent(item.h3)}`, {
  state: item,
});;
  };

  return (
    <div className='Onstagecard'>
    <Loader/>

      {Carddata.map((elem, index) => (
        <div key={index} className="card" onClick={() => handleClick(elem)}>
          <div className="imagecon">
            <img src={elem.imagecon} alt="" />
          </div>
          <h2 style={{ color: color }}>{elem.Heading}</h2>
          <h3 style={{ color: color }}>{elem.h3}</h3>
        </div>
      ))}

      
    </div>
  );
};

export default Onstagecard;
