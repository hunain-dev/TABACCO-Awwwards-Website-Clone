
import TakeTabbacobg from "./TakeTabbacobg"

const TakeTabbaco = ({ imageUrl, heading, paragraph,  showButton,buttonText,buttonLink    }) => {

  return (
    <div className='TakeTabbaco'>
          <TakeTabbacobg 
        imageUrl={imageUrl} 
        heading={heading} 
        paragraph={paragraph} 
        showButton={showButton}
        buttonText={buttonText} 
        buttonLink={buttonLink}  // ✅ Fix the prop name here
      />
    </div>
  )
}

export default TakeTabbaco
