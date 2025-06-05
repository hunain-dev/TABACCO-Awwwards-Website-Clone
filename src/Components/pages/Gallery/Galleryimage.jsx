import React from 'react'

const Galleryimage = () => {
    const obj = [
        { backgroundimage: "https://tobacco.nl/wp-content/uploads/2025/01/entertai-ontvangst-buiten-kopie-800x534.jpg" },
        { backgroundimage: "https://tobacco.nl/wp-content/uploads/2024/12/20230121_AvineonTensing_TOBACCOTheater_RebekkaMell_003-800x533.jpg" },
        { backgroundimage: "https://tobacco.nl/wp-content/uploads/2024/10/gallery_img_01-800x534.jpg" },
        { backgroundimage: "https://tobacco.nl/wp-content/uploads/2025/01/lvffood-10-800x600.jpg" },
        { backgroundimage: "https://tobacco.nl/wp-content/uploads/2025/02/OSIM00006001794-800x597.jpg" },
        { backgroundimage: "https://tobacco.nl/wp-content/uploads/2025/01/kerstfeest-JBL2024-www.pulsevisuals.nl-109-min-2-800x594.jpg" },
        { backgroundimage: "https://tobacco.nl/wp-content/uploads/2025/01/20240214_ValentinesDay_TOBACCOTheater_RebekkaMell_023-min-1-800x533.jpg" },
        { backgroundimage: "https://tobacco.nl/wp-content/uploads/2025/01/20240214_ValentinesDay_TOBACCOTheater_RebekkaMell_079-800x533.jpg" },
        { backgroundimage: "https://tobacco.nl/wp-content/uploads/2025/01/20241129_HetMediahuis_TOBACCOTheater_RebekkaMell_101-min-800x533.jpg" },
        { backgroundimage: "https://tobacco.nl/wp-content/uploads/2025/02/OSIM00006000515-800x612.jpg" },
          { backgroundimage: "https://tobacco.nl/wp-content/uploads/2024/12/20-05-2024-ellen-124.jpg" },
  { backgroundimage: "    https://tobacco.nl/wp-content/uploads/2025/01/20241129_HetMediahuis_TOBACCOTheater_RebekkaMell_208-min-800x533.jpg" },
      
    { backgroundimage: "  https://tobacco.nl/wp-content/uploads/2025/01/20241213_ChristmasDinnerWithATouchOfArt_GreenbergTraurig_TOBACCOTheater_RebekkaMell_025-min-800x533.jpg" },
      


    

        

{ backgroundimage: "   https://tobacco.nl/wp-content/uploads/2024/10/gallery_img_04-800x534.jpg" },

 { backgroundimage: " https://tobacco.nl/wp-content/uploads/2024/12/320836274_704583677851954_4569771625000788200_n.jpeg" },


 { backgroundimage: "  https://tobacco.nl/wp-content/uploads/2024/12/20170118_008.jpg" },


 { backgroundimage: " https://tobacco.nl/wp-content/uploads/2025/01/PHOTO-2024-12-15-20-18-38-600x800.jpg" },



 { backgroundimage: " https://tobacco.nl/wp-content/uploads/2025/01/kerstfeest-JBL2024-www.pulsevisuals.nl-157-min-800x532.jpg" },









  { backgroundimage: " https://tobacco.nl/wp-content/uploads/2025/02/060-533x800.jpg" },
{ backgroundimage: "  https://tobacco.nl/wp-content/uploads/2025/01/detail-kaarsen-trap-800x534.jpg" }

    ];
    
    return (
        <div className='Galleryimage'>
            {obj.map((elem, index) => (
                <div
                    key={index}
                    className="imagecontainer"  data-scroll data-scroll-speed="0.1" 
                
                >
                    <img src={elem.backgroundimage} alt="" />
                </div>
            ))}
        </div>
    );
};

export default Galleryimage;
