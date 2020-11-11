import React, { useState, useCallback, useEffect } from 'react';
import styles from './Gallery.module.css';

import axios from 'axios'

import PhotoGallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import img1 from '../../images/gallery/img_1.jpeg';
import img2 from '../../images/gallery/img_2.jpeg';
import img3 from '../../images/gallery/img_3.jpeg';
import img4 from '../../images/gallery/img_4.jpeg';
import img5 from '../../images/gallery/img_5.jpeg';
import img6 from '../../images/gallery/img_6.jpeg';
import img7 from '../../images/gallery/img_7.jpeg';
import img8 from '../../images/gallery/img_8.jpeg';
import img9 from '../../images/gallery/img_9.jpeg';
import img10 from '../../images/gallery/img_10.jpeg';
import img11 from '../../images/gallery/img_11.jpeg';
import img12 from '../../images/gallery/img_12.jpeg';
import img13 from '../../images/gallery/img_13.jpeg';
import img14 from '../../images/gallery/img_14.jpeg';
import img15 from '../../images/gallery/img_15.jpeg';
import img16 from '../../images/gallery/img_16.jpeg';
import img17 from '../../images/gallery/img_17.jpeg';
import img18 from '../../images/gallery/img_18.jpeg';
import img19 from '../../images/gallery/img_19.jpeg';
import img20 from '../../images/gallery/img_20.jpeg';
import img21 from '../../images/gallery/img_21.jpeg';
import img22 from '../../images/gallery/img_22.jpeg';
import img23 from '../../images/gallery/img_23.jpeg';
import img24 from '../../images/gallery/img_24.jpeg';
import img25 from '../../images/gallery/img_25.jpeg';
import img26 from '../../images/gallery/img_26.jpeg';
import img27 from '../../images/gallery/img_27.jpeg';
import img28 from '../../images/gallery/img_28.jpeg';
import img29 from '../../images/gallery/img_29.jpeg';
import img30 from '../../images/gallery/img_30.jpeg';
import img31 from '../../images/gallery/img_31.jpeg';
import img32 from '../../images/gallery/img_32.jpeg';
import img33 from '../../images/gallery/img_33.jpeg';
import img34 from '../../images/gallery/img_34.jpeg';
import img35 from '../../images/gallery/img_35.jpeg';
import img36 from '../../images/gallery/img_36.jpeg';
import img37 from '../../images/gallery/img_37.jpeg';
import img38 from '../../images/gallery/img_38.jpeg';
import img39 from '../../images/gallery/img_39.jpeg';
import img40 from '../../images/gallery/img_40.jpeg';
import img41 from '../../images/gallery/img_41.jpeg';
import img42 from '../../images/gallery/img_42.jpeg';
import img43 from '../../images/gallery/img_43.jpeg';
import img44 from '../../images/gallery/img_44.jpeg';
import img45 from '../../images/gallery/img_45.jpeg';
import img46 from '../../images/gallery/img_46.jpeg';
import img47 from '../../images/gallery/img_47.jpeg';
import img48 from '../../images/gallery/img_48.jpeg';
import img49 from '../../images/gallery/img_49.jpeg';
import img50 from '../../images/gallery/img_50.jpeg';
import img51 from '../../images/gallery/img_51.jpeg';
import img52 from '../../images/gallery/img_52.jpeg';
import img53 from '../../images/gallery/img_53.jpeg';
import img54 from '../../images/gallery/img_54.jpeg';
import img55 from '../../images/gallery/img_55.jpeg';
import img56 from '../../images/gallery/img_56.jpeg';
import img57 from '../../images/gallery/img_57.jpeg';
import img58 from '../../images/gallery/img_58.jpeg';
import img59 from '../../images/gallery/img_59.jpeg';
import img60 from '../../images/gallery/img_60.jpeg';
import Menu from '../../containers/Menu/Menu';
import { Footer } from '../../components/Footer/Footer';


// import jonB from "../../videos/the_good_in_me.mp4"

// const CustomeView = props => {
//   const { data } = props;

//   return (
//     <div className={styles.view}>
//       {data.videoUrl ? (
//         <video width="320" height="240" controls>
//           <source src={data.src} type="video/mp4" />
//           <source src={data.src} type="video/ogg" />
//           Your browser does not support the video tag.
//         </video>
//       ) : (
//           <img className={styles.img} src={data.src} />
//         )}
//     </div>
//   );
// };

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [gallery, setGallery] = useState()

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const fetchGallery = async () => {
    const res = await axios.get('/api/gallery')
    const images = res.data;
    images.forEach(image => {
      image.width = 1;
      image.height = 1
      image.createdat = image.createdAt
      delete image.createdAt
    });
    setGallery(images)
  }
  useEffect(() => {
    fetchGallery()
  }, [])

  const photos = gallery || [
    {
      src: img28,
      width: 1,
      height: 1
    },
    {
      src: img17,
      width: 1,
      height: 1
    },
    {
      src: img6,
      width: 1,
      height: 1
    },
    {
      src: img29,
      width: 1,
      height: 1
    },
    {
      src: img30,
      width: 1,
      height: 1
    },
    {
      src: img31,
      width: 1,
      height: 1
    },
    {
      src: img32,
      width: 1,
      height: 1
    },
    {
      src: img33,
      width: 1,
      height: 1
    },
    {
      src: img34,
      width: 1,
      height: 1
    },
    {
      src: img35,
      width: 1,
      height: 1
    },
    {
      src: img36,
      width: 1,
      height: 1
    },
    {
      src: img37,
      width: 1,
      height: 1
    },
    {
      src: img38,
      width: 1,
      height: 1
    },
    {
      src: img39,
      width: 1,
      height: 1
    },
    {
      src: img40,
      width: 1,
      height: 1
    },
    {
      src: img41,
      width: 1,
      height: 1
    },
    {
      src: img42,
      width: 1,
      height: 1
    },
    {
      src: img43,
      width: 1,
      height: 1
    },
    {
      src: img44,
      width: 1,
      height: 1
    },
    {
      src: img45,
      width: 1,
      height: 1
    },
    {
      src: img46,
      width: 1,
      height: 1
    },
    {
      src: img47,
      width: 1,
      height: 1
    },
    {
      src: img48,
      width: 1,
      height: 1
    },
    {
      src: img49,
      width: 1,
      height: 1
    },
    {
      src: img50,
      width: 1,
      height: 1
    },
    {
      src: img51,
      width: 1,
      height: 1
    },
    {
      src: img52,
      width: 1,
      height: 1
    },
    {
      src: img53,
      width: 1,
      height: 1
    },
    {
      src: img54,
      width: 1,
      height: 1
    },
    {
      src: img55,
      width: 1,
      height: 1
    },
    {
      src: img56,
      width: 1,
      height: 1
    },
    {
      src: img57,
      width: 1,
      height: 1
    },
    {
      src: img58,
      width: 1,
      height: 1
    },
    {
      src: img59,
      width: 1,
      height: 1
    },
    {
      src: img60,
      width: 1,
      height: 1
    },
    {
      src: img1,
      width: 1,
      height: 1
    },
    {
      src: img3,
      width: 1,
      height: 1
    },
    {
      src: img4,
      width: 1,
      height: 1
    },
    {
      src: img5,
      width: 1,
      height: 1
    },
    {
      src: img7,
      width: 1,
      height: 1
    },
    {
      src: img8,
      width: 1,
      height: 1
    },
    {
      src: img9,
      width: 1,
      height: 1
    },
    {
      src: img10,
      width: 1,
      height: 1
    },
    {
      src: img11,
      width: 1,
      height: 1
    },
    {
      src: img12,
      width: 1,
      height: 1
    },
    {
      src: img13,
      width: 1,
      height: 1
    },
    {
      src: img14,
      width: 1,
      height: 1
    },
    {
      src: img15,
      width: 1,
      height: 1
    },
    {
      src: img16,
      width: 1,
      height: 1
    },
    {
      src: img18,
      width: 1,
      height: 1
    },
    {
      src: img19,
      width: 1,
      height: 1
    },
    {
      src: img20,
      width: 1,
      height: 1
    },
    {
      src: img21,
      width: 1,
      height: 1
    },
    {
      src: img22,
      width: 1,
      height: 1
    },
    {
      src: img23,
      width: 1,
      height: 1
    },
    {
      src: img24,
      width: 1,
      height: 1
    },
    {
      src: img25,
      width: 1,
      height: 1
    },
    {
      src: img26,
      width: 1,
      height: 1
    },
    {
      src: img27,
      width: 1,
      height: 1
    },
    {
      src: img2,
      width: 1,
      height: 1
    },
  ];

  return (
    <div className={styles.Gallery}>
      <Menu />
      <main>
        <h2>Gallery</h2>
        <div className={styles.content}>
          <PhotoGallery photos={photos} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal
                onClose={closeLightbox}
              >
                <Carousel
                  // components={{
                  //   View: CustomView
                  // }}
                  currentIndex={currentImage}
                  views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Gallery;