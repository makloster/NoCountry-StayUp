import React, { useState, useEffect } from "react";

const ButtonUploadImage = () => {
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
            {" "}
            <form className='rounded-xl shadow-xl w-1/3 h-52 bg-white mx-auto '>
                <div className='mx-auto w-2/3 mt-14'>
                    <label
                        class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                        for='file_input'>
                        Upload file
                    </label>
                    <input
                        name='image'
                        type='file'
                        multiple
                        accept='image/*'
                        onChange={onImageChange}
                    />
                    {imageURLs.map((imageSrc) => (
                        <img src={imageSrc} alt='' />
                    ))}
                </div>
                <div className='flex justify-center mt-10 mb-14'>
                    <button className='btn btn-sm'>Upload</button>
                </div>
            </form>
        </div>
    );
};

export default ButtonUploadImage;
