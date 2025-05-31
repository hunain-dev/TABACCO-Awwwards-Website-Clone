import React from 'react'

const Textarea = () => {
      const interviewsleft = [
    {
      heading: "An interview with Juna Horstmans",
      paragraph: "Until the end of the year, the work of Juna Horstmans will adorn the poster box on the facade of TOBACCO Theater in the Nes. This Dutch-Australian illustrator, who commutes between Amsterdam and London, creates enchanting collages in which pattern and reality come together. What drives her and how does her work come about? We spoke to Juna about her inspiration from travel, everyday beauty and her unique creative process."
    },
    {
      heading: "Your work embodies a beautiful interplay between precision and imagination. Can you tell us about your creative process, from the initial idea to the finished collage?",
      paragraph: "Thank you! My work is rooted in a sense of discovery and how I translate that into a vibrant new composition. My creative process usually starts with going out into the world and taking snapshots of my surroundings. This can be anything: a potted plant on a balcony edge, the curve of a street sign or even the play of shadows on a wall. I believe that inspiration can be found everywhere if you take the time to really look for it."
    },
    {
      heading: "Paper fragments play a central role in your art. What is it about paper as a medium that appeals to you and how do you choose your materials?",
      paragraph: "There’s something about the tactile nature of paper that I can never get over. As a very practical person, I find that working with paper allows me to connect with my practice on a deeper, more physical level. The versatility of paper – it can be folded, crinkled and torn – offers endless possibilities for exploration and experimentation, allowing me to play with new shapes, textures and layers. Much of the paper I use is found or recycled. I have developed a habit of collecting materials such as chocolate wrappers, wrapping paper or anything with an interesting texture or colour. I also get some paper from Vlieger, my favourite paper shop in Amsterdam, which has such a rich variety. Lately I have been experimenting with painting and spray painting on paper, which adds an extra dimension to the medium and expands the possibilities in my work."
    },
    {
      heading: "What's the most unusual or unexpected source of inspiration you've ever had?",
      paragraph: "One of the most unexpected sources of inspiration for me is the doorways and walls I encounter when I travel, especially in Europe. Whenever I’m on vacation, I’m drawn to their textures, patterns, and unique details. Places like Italy and Spain, with their intricate tile work and beautifully distressed surfaces, have left a lasting impression. These elements are a huge influence on my work and inspire the way I approach color, layering, and composition."
    }
  ];

      const interviewsright = [
    {
      heading: "An interview with Juna Horstmans",
      paragraph: "Until the end of the year, the work of Juna Horstmans will adorn the poster box on the facade of TOBACCO Theater in the Nes. This Dutch-Australian illustrator, who commutes between Amsterdam and London, creates enchanting collages in which pattern and reality come together. What drives her and how does her work come about? We spoke to Juna about her inspiration from travel, everyday beauty and her unique creative process."
    },
    {
      heading: "Your work embodies a beautiful interplay between precision and imagination. Can you tell us about your creative process, from the initial idea to the finished collage?",
      paragraph: "Thank you! My work is rooted in a sense of discovery and how I translate that into a vibrant new composition. My creative process usually starts with going out into the world and taking snapshots of my surroundings. This can be anything: a potted plant on a balcony edge, the curve of a street sign or even the play of shadows on a wall. I believe that inspiration can be found everywhere if you take the time to really look for it."
    },
    {
      heading: "Paper fragments play a central role in your art. What is it about paper as a medium that appeals to you and how do you choose your materials?",
      paragraph: "There’s something about the tactile nature of paper that I can never get over. As a very practical person, I find that working with paper allows me to connect with my practice on a deeper, more physical level. The versatility of paper – it can be folded, crinkled and torn – offers endless possibilities for exploration and experimentation, allowing me to play with new shapes, textures and layers. Much of the paper I use is found or recycled. I have developed a habit of collecting materials such as chocolate wrappers, wrapping paper or anything with an interesting texture or colour. I also get some paper from Vlieger, my favourite paper shop in Amsterdam, which has such a rich variety. Lately I have been experimenting with painting and spray painting on paper, which adds an extra dimension to the medium and expands the possibilities in my work."
    },
    {
      heading: "What the most unusual or unexpected source of inspiration youve ever had?",
      paragraph: "One of the most unexpected sources of inspiration for me is the doorways and walls I encounter when I travel, especially in Europe. Whenever I’m on vacation, I’m drawn to their textures, patterns, and unique details. Places like Italy and Spain, with their intricate tile work and beautifully distressed surfaces, have left a lasting impression. These elements are a huge influence on my work and inspire the way I approach color, layering, and composition."
    }
  ];
  return (
    <div className="textarea">
           <div className="textarealeft">
            {
                interviewsleft.map((elem,index)=>{
                    return(
                        <div key={index} className="sectionleft">
                            <h2>{elem.heading}</h2>
                            <h4>{elem.paragraph}</h4>
                        </div>
                    )
                })
            }
           </div>
             <div className="textarearight">
            {
                interviewsright.map((elem,index)=>{
                    return(
                        <div key={index} className="sectionright">
                            <h2>{elem.heading}</h2>
                            <h4>{elem.paragraph}</h4>
                        </div>
                    )
                })
            }
           </div>
        </div>


      
  )
}

export default Textarea
