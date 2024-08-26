import SelectGroupOne from '../../components/Forms/SelectGroup/SelectGroupOne';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { FormEvent, useState } from 'react';

const UploadThemeForm = () => {

    const [themeTitle, setThemeTitle] = useState('');
    const [themeDescription, setThemeDescription] = useState('');
    const [themePrice, setThemePrice] = useState('');
    const [themeCategory, setThemeCategory] = useState('')
    const [previewLink, setPreviewLink] = useState('')
    const [ScreenShots, setScreenShots] = useState<FileList | null>(null)
    const [File, setFile] = useState<FileList | null>(null)
    const [isLoading, setIsLoading] = useState(false);

    async function uploadTheme(e: FormEvent) {
        e.preventDefault();
        setIsLoading(true);
        const themeData = {
            title: themeTitle,
            description: themeDescription,
            price: themePrice,
            category: themeCategory,
            previewLink: previewLink,
            screenShots: ScreenShots,
            file: File
        }
        console.log(themeData)
        if (!themeData) return null;
        alert("submitting")
        // Send the theme data to the server
        const response = await fetch('http://localhost:8080/api/v1/product/add-product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(themeData)
        });

        if (response.status === 201) {
            alert("Theme uploaded successfully!");
        }
        setIsLoading(false);
    }
    return (
        <>
            <Breadcrumb pageName="Upload Theme" />
            <div>
                <div className="flex flex-col gap-9">
                    {/* <!-- Contact Form --> */}
                    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                            <h3 className="font-medium text-black dark:text-white">
                                Contact Form
                            </h3>
                        </div>
                        <form onSubmit={(e) => uploadTheme(e)}>
                            <div className="p-6.5">
                                <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Theme Title
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter name of the theme"
                                            onChange={(e) => setThemeTitle(e.target.value)}
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                            required
                                        />
                                    </div>

                                    <div className="w-full xl:w-1/2">
                                        <label className="mb-2.5 block text-black dark:text-white">
                                            Theme Price
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Enter a theme price"
                                            onChange={(e) => setThemePrice(e.target.value)}
                                            className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                            required
                                        />
                                    </div>
                                </div>




                                <SelectGroupOne />

                                <div className="mb-6">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Description
                                    </label>
                                    <textarea
                                        rows={6}
                                        placeholder="Type description"
                                        onChange={(e) => setThemeDescription(e.target.value)}
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        required
                                    ></textarea>
                                </div>
                                <div className="mb-4.5">
                                    <label className="mb-2.5 block text-black dark:text-white">
                                        Live Preview Link
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Enter Live Preview Link"
                                        onChange={(e) => setPreviewLink(e.target.value)}
                                        className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col gap-5.5 p-2">
                                    <div>
                                        <label className="mb-3 block text-black dark:text-white">
                                            Attach ScreenShots
                                        </label>
                                        <input
                                            type="file"
                                            onChange={(e) => setScreenShots(e.target.files)}
                                            className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"

                                        />
                                    </div>
                                    <div>
                                        <label className="mb-3 block text-black dark:text-white">
                                            Attach Theme File
                                        </label>
                                        <input
                                            type="file"
                                            onChange={(e) => setFile(e.target.files)}
                                            className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"

                                        />
                                    </div>

                                </div>
                                <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                                    {isLoading ? "Uploading...." : "Upload Theme"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>

    )
}

export default UploadThemeForm;