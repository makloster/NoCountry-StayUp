import React, { useEffect, useState } from "react";

const UploadImages = () => {
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
        <>
            {/* <div className='bg-gray-200 min-h-screen flex items-center justify-center'>
                <form className='rounded-xl shadow-xl w-1/3 h-52 bg-white mx-auto '>
                    <div className='mx-auto w-2/3 mt-14'>
                        <label
                            class='block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                            for='file_input'>
                            Upload file
                        </label>
                        <input
                            name='image'
                            className='block  text-lg text-gray-500 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer  focus:outline-none '
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
            </div> */}
            <div className='flex justify-center'>
                <div className='block p-6 rounded-lg shadow-lg bg-white max-w-m'>
                    <ul
                        className='nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4'
                        id='tabs-tabFill'
                        role='tablist'>
                        <li
                            className='nav-item flex-auto text-center'
                            role='presentation'>
                            <a
                                href='#'
                                className='
      nav-link
      w-full
      block
      font-medium
      text-xl
      leading-tight
      
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    '
                                id='tabs-home-tabFill'
                                data-bs-toggle='pill'
                                data-bs-target='#tabs-homeFill'
                                role='tab'
                                aria-controls='tabs-homeFill'
                                aria-selected='true'>
                                Actividad
                            </a>
                        </li>
                        <li
                            class='nav-item flex-auto text-center'
                            role='presentation'>
                            <a
                                href='#'
                                class='
      nav-link
      w-full
      block
      font-medium
      text-xl
      leading-tight
      
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    '
                               >
                                Ver Grupos
                            </a>
                        </li>
                        <li
                            class='nav-item flex-auto text-center'
                            role='presentation'>
                            <a
                                href='#'
                                class='
      nav-link
      w-full
      block
      font-medium
      text-xl
      leading-tight
      
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    '
                                id='tabs-messages-tabFill'
                                data-bs-toggle='pill'
                                data-bs-target='#tabs-messagesFill'
                                role='tab'
                                aria-controls='tabs-messagesFill'
                                aria-selected='false'>
                                Mi cuenta
                            </a>
                        </li>
                    </ul>
                    <div class='tab-content' id='tabs-tabContentFill'>
                <div
                    class='tab-pane fade show active'
                    id='tabs-homeFill'
                    role='tabpanel'
                    aria-labelledby='tabs-home-tabFill'>
                     <h5 class='text-gray-900 text-xl leading-tight font-medium mb-2'>
                        Card title
                    </h5>
                    <p class='text-gray-700 text-base mb-4'>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                </div>
                <div
                    class='tab-pane fade'
                    id='tabs-profileFill'
                    role='tabpanel'
                    aria-labelledby='tabs-profile-tabFill'>
                    Tab 2 content fill
                </div>
                <div
                    class='tab-pane fade'
                    id='tabs-messagesFill'
                    role='tabpanel'
                    aria-labelledby='tabs-profile-tabFill'>
                    Tab 3 content fill
                </div>
            </div>
                    <h5 class='text-gray-900 text-xl leading-tight font-medium mb-2'>
                        Card title
                    </h5>
                    <p class='text-gray-700 text-base mb-4'>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </p>
                    <button
                        type='button'
                        class=' inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xl leading-tight  rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'>
                        Button
                    </button>
                </div>
            </div>

           
        </>
    );
};

export default UploadImages;
