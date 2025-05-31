
const Imagehoverarea = ({ data ,Hovercolor},  ) => {
  return (
    <div className="Imagehoverarea">
      {data.textleft.map((item, index) => (
        <div key={index} className="row">
          <div className="col left" style={{color:Hovercolor}}>{item}</div>
          <div className="col center" style={{color:Hovercolor}}>{data.textbottom[index]}</div>
          <div className="col right" style={{color:Hovercolor}}>{data.textright[index]}</div>
        </div>
      ))}
    </div>
  );
};

export default Imagehoverarea;
