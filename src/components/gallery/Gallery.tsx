import { useTranslation } from "react-i18next";
import "./Gallery.scss";

const Gallery = () => {
  const images = [
    {
      url: "https://i.ytimg.com/vi/4kcxWSgv7M0/maxresdefault.jpg",
      title: "Tashkent, Uzbekistan",
    },
    {
      url: "https://cdnstatic.rg.ru/uploads/images/173/93/60/1000_73-11111_glavn.jpg",
      title: "Tashkent, Uzbekistan",
    },
    {
      url: "https://youtravel.me/upload/tours/28630/media/51e/2vl3yv8a2veomu28frkpit3hlz2kc463.jpg",
      title: "Bukhara, Uzbekistan",
    },
    {
      url: "https://gidvezde.ru/wp-content/uploads/2024/03/chimgan-mountains-charvak-lake-tour-from-tashkent-1626465657860.jpg",
      title: "Samarkand, Uzbekistan",
    },
    {
      url: "https://static.tildacdn.com/tild3563-6362-4362-b737-373736363065/_5.jpg",
      title: "Khiva, Uzbekistan",
    },
    {
      url: "https://extraguide.ru/images/t/9018942792dade3c2c81e53e90d0d81f52baa137.jpeg",
      title: "Registan Square, Samarkand",
    },
    {
      url: "https://cdn.tripster.ru/thumbs2/1692a712-4af9-11ee-aaa4-c6cbacf1d83b.1200x1000.jpeg",
      title: "Shahrisabz, Uzbekistan",
    },
    {
      url: "https://youtravel.me/upload/tours/30c/0mxh62iwkxnzlyyacrttau4x8c0g4d1f.jpeg",
      title: "Fergana Valley, Uzbekistan",
    },
    {
      url: "https://www.newzealand.com/assets/Tourism-NZ/Auckland/img-1536065871-6217-4403-p-10D1D0BD-B88E-AAB3-AE3F2E903EF65717-2544003__aWxvdmVrZWxseQo_CropResizeWzE5MDAsMTAwMCw3NSwianBnIl0.jpg",
      title: "Tashkent Skyline, Uzbekistan",
    },
    {
      url: "https://avatars.mds.yandex.net/i?id=f1a2bc90081ee2275b0119c07be3bd39_l-5263630-images-thumbs&n=13",
      title: "Chimgan Mountains, Uzbekistan",
    },
    {
      url: "https://avatars.mds.yandex.net/i?id=e140a76d795159e302d523f26b271541_l-5231753-images-thumbs&n=13",
      title: "Aral Sea, Uzbekistan",
    },
    {
      url: "https://avatars.dzeninfra.ru/get-zen_doc/10198012/pub_64b7dec578e90e2c441164ea_64b7df113a8dc3453b5b5b8d/scale_1200",
      title: "Bukhara, Uzbekistan",
    },
  ];
  

  const {t} = useTranslation()

  return (
    <div className="gallery">
      <div className="gallery-wrapper">
        <h2 className="gallery-title">{t("gallery.gallery-title")}</h2>
        <div className="gallery-images">
          {images.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image.url ? image.url : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP8AAADGCAMAAAAqo6adAAAALVBMVEXQ0NDw8PDV1dXPz8/T09Pb29vZ2dnd3d3n5+ft7e3j4+Pg4ODr6+vz8/Ps7OyJEr6/AAAEhUlEQVR4nO3d20LCMAyAYbYiA3G+/+PqxANgD0mabMmSXHrF9wuC61oOB9czbv0ANp7w+57w+57w+57w+57w+57w+57w+57w+57w+57w+57w+57w+57w+57w+57w+57w+57w+57w+57w+57w901KieVxbDUd/oU+nk7j0XIDsj+l0/kyf81wnswWIPpTmi7z8Dvz8HqwWYDmT+O9/jaTyQAkf5r+6T+fA2eLASj+dM3wP+fNYACCP/vbtxoA709jiT/Mr+YCEPwl/RJgtBYA7U/Xin+47N9f4w/zyVgArD9NVb+5P4Fo/1vdP4s8SrlB+4t//L/9L7aeAEh/OjX8g7G3QKy/8fIfBmOfgrH+6rvfMsb+ALL73537d/779/76L//z8z3XXfsbH3/tfQBG+88Nvy0+3v9SfwEYe/mz//9n7QIA3l+8+rWMsXc/0vWf98qv/yjwEEWHcP3zWObbWwOgXP8t/Q9o8PIn7fp/PoDJBRDa+s+Y4xv75Hcb4vrf4fz0FJgv1t75bkNd/07jfYH5YnUFvGP9/zDdbgAY3q6jUX3f/S/p68aPlFze/7GTCb/vCb/vCb/vCb/vCb/vCb/vCb/vCb/vUelP620m0ehPp/WWURX6l+WV1QLo899Wl9YKoM7/s7i2UgBt/r+1xXUCKPPfL62uEkCX/3FleY0AqvzPdxeuEECTP3NzpXgARf7svaXSAfT4C7fWCgdQ4y/eWSwbQIu/cmO1aAAl/up95ZIBdPgbt9ULBlDhb+4qkAugwd/eVCEXQIEfwJcLsL0fxBcLsLkfyJcKsLUfzBcKsLEfwZcJsK0fxRcJsKkfyZcIsKUfzRcIwOtPR8TjI/D5A7D604S4YkXiswfg9C9b48ABiHzuAIz+285AYAAynzkAn/9nYyQoQAefNwCb/29fKCBAdgPVJgG4/PfbYpsBOvmcAZj8j7uCGwG6+YwBePzPm6KrARj4fAFY/P/3hFcCsPDZAnD4c1viiwGY+FwBGPz5EwEKAdj4TAH6/aUTMbIBGPk8Abr95QNBMgFY+SwBus8/r5yH8i8AM58jQKe/fhzMUwB2PkOAPn/rNJyHAAL8/gBd/hb/IYAIvztA1/7vJv8ugBC/N0DP9x8A+L8BxPidAeh+GP87gCC/LwD9/Acg/yuAKL8rAPn8DzB/CSDL7wlA/f4LBH+NIQcgnn+jjE8PQDv/SB2fHIB0/pVCPjUA5fwzlXxiAML5f0r5tAD48x/V8kkBuM8/3XbwAbDnH6vmEwLg/Nr5+AAov34+OgDGb4E/DJhbUFB+G3xkALjfCh8XAOy3w0cFgPot8TEBgH5bfEQAmN8aHx4A5LfHBweA+C3yoQEAfpt8YIC23yofFqDpt8sHBWj5LfMhARp+23xAgLrfOr8doOq3z28GqPn3wG8FqPj3wW8EKPvbX/VpZWoBiv798KsBSv498WsBCv598SsB8v698csBsv798YsBcv498ksBMv7P9/1dTvapnvvheNznQP2eJvy+J/y+J/y+J/y+J/y+J/y+J/y+J/y+Z/wAooFG1ZYJEhoAAAAASUVORK5CYII="} loading="lazy" alt={`Image ${index + 1}`} />
              <div className="image-title">{image.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
