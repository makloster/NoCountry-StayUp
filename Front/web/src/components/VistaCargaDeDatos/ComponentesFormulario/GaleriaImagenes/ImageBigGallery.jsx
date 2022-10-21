import React, {useState, useEffect} from "react";

const ImageBigGallery = () => {
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);

    useEffect(() => {
        if (images.lenght < 1) return;
        const newImageUrls = [];
        images.forEach((image) =>
            newImageUrls.push(URL.createObjectURL(image))
        );
        setImageURLs(newImageUrls);
    }, [images]);

    const onImageChange = (e) => {
        setImages([...e.target.files]);
    };
    return (
        <div>
            <section class='overflow-hidden text-gray-700 '>
                <div class='container px-5 py-2 mx-auto lg:pt-12 lg:px-32'>
                    <div class='flex flex-wrap -m-1 md:-m-2'>
                        <div class='flex flex-wrap w-3/3'>
                            <div class='w-full p-1 md:p-2'>
                            <input
                        name='image'
                        type='file'
                        multiple
                        accept='image/*'
                        onChange={onImageChange}
                    />
                                <img
                                    alt='gallery'
                                    class='block object-cover object-center w-full h-full rounded-lg'
                                    src='https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ImageBigGallery;
