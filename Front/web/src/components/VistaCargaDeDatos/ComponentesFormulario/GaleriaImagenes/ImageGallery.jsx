import React from "react";
import photoMock from "../../../../assets/imagesHome/PhotoMock.png";

const ImageGallery = () => {
    return (
        <div>
            <section class='overflow-hidden text-gray-700 '>
                <div class='container px-5 py-2 mx-auto lg:pt-12 lg:px-32'>
                    <div class='flex flex-wrap -m-1 md:-m-2'>
                        <div class='flex flex-wrap w-1/3'>
                            <div class='w-full p-1 md:p-2'>
                                <img
                                    alt='gallery'
                                    class='block object-cover object-center w-full h-full rounded-lg'
                                    src={photoMock}
                                />
                            </div>
                        </div>
                        <div class='flex flex-wrap w-1/3'>
                            <div class='w-full p-1 md:p-2'>
                                <img
                                    alt='gallery'
                                    class='block object-cover object-center w-full h-full rounded-lg'
                                    src={photoMock}
                                />
                            </div>
                        </div>
                        <div class='flex flex-wrap w-1/3'>
                            <div class='w-full p-1 md:p-2'>
                                <img
                                    alt='gallery'
                                    class='block object-cover object-center w-full h-full rounded-lg'
                                    src={photoMock}
                                />
                            </div>
                        </div>
                        <div class='flex flex-wrap w-1/3'>
                            <div class='w-full p-1 md:p-2'>
                                <img
                                    alt='gallery'
                                    class='block object-cover object-center w-full h-full rounded-lg'
                                    src={photoMock}
                                />
                            </div>
                        </div>
                        <div class='flex flex-wrap w-1/3'>
                            <div class='w-full p-1 md:p-2'>
                                <img
                                    alt='gallery'
                                    class='block object-cover object-center w-full h-full rounded-lg'
                                    src={photoMock}
                                />
                            </div>
                        </div>
                        <div class='flex flex-wrap w-1/3'>
                            <div class='w-full p-1 md:p-2'>
                                <img
                                    alt='gallery'
                                    class='block object-cover object-center w-full h-full rounded-lg'
                                    src={photoMock}
                                />
                            </div>
                        </div>
                        <div class='flex flex-wrap w-1/3'>
                            <div class='w-full p-1 sm:p-2'>
                                <img
                                    alt='gallery'
                                    class='block object-cover object-center w-full h-full rounded-lg'
                                    src={photoMock}
                                />
                            </div>
                        </div>
                        <div class='flex flex-wrap w-1/3'>
                            <div class='w-full p-1 md:p-2'>
                                <img
                                    alt='gallery'
                                    class='block object-cover object-center w-full h-full rounded-lg'
                                    src={photoMock}
                                />
                            </div>
                        </div>
                        <div class='flex flex-wrap w-1/3'>
                            <div class='w-full p-1 md:p-2'>
                                <img
                                    alt='gallery'
                                    class='block object-cover object-center w-full h-full rounded-lg'
                                    src={photoMock}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ImageGallery;
