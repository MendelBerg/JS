const addImage = imgSrc => {
  const p = new Promise((resolve, reject) => {
    const imageElem = document.createElement('img');
    imageElem.setAttribute('alt', 'My photo');
    imageElem.src = imgSrc;

    const container = document.querySelector('.page');
    container.append(imageElem);

    const onImageLoaded = () => {
      const { width, height } = imageElem;
      resolve({ width, height });
    };

    imageElem.addEventListener('load', onImageLoaded);
    imageElem.addEventListener('error', () => reject(new Error('Image load is failed...')));
  });

  return p;
};

// callback example
const onImageLoaded = imgElem => {
  const { width, height } = imgElem;
  const sizeElem = document.querySelector('.image-size');
  sizeElem.textContent = `${width} x ${height}`;
};

// test call
const pp = addImage(
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg',
  onImageLoaded,
);
pp.then(onImageLoaded);
pp.catch(error => console.log(error));
