import { Link, useNavigate } from 'react-router-dom';

interface ProductType {
  _id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  demoUrl: string;
  downloadUrl: string;
  category: string;
}

interface TableOneProps {
  products: ProductType[];
}

const TableOne: React.FC<TableOneProps> = ({ products }) => {
  console.log(products)
  const navigate = useNavigate();
  async function deleteProduct(id: string) {
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/v1/product/delete-product/${id}`);
    navigate(0);
  }

  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        New Themes
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Image
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Category
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Price
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Demo
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Action
            </h5>
          </div>

        </div>

        {products.map((product: ProductType, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${key === products.length - 1
              ? ''
              : 'border-b border-stroke dark:border-strokedark'
              }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <img className='rounded-full' width={25} height={25} src={product.imageUrl} alt="Brand" />
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                {product.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{product.category}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">₹{product.price}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className=" dark:text-white"><Link to={product.demoUrl}>View</Link></p>
            </div>
            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <button onClick={() => deleteProduct(product._id)} className="rounded bg-red-500 p-3 font-medium text-gray hover:bg-opacity-90">
                Delete
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
