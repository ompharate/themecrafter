import React, { useEffect, useState } from "react";

interface product {
  name: string
}

interface orders {
  user: string
  products: product[],
  totalPrice: string
}

const TableThree = () => {
  const [orders, setOrders] = useState<orders[] | null>(null)
  useEffect(() => {
    const fetchOrders = async () => {
      const respones = await fetch('http://localhost:8080/api/v1/order/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      const data = await respones.json();
      setOrders(data.orders);
    }
    fetchOrders();
  }, [])
  console.log(orders)
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                Theme
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Invoice date
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                Amount
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order, orderKey) => (
              <React.Fragment key={orderKey}>
                {order.products.map((product: product, itemKey) => (
                  <tr key={itemKey}>
                    <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                      <h5 className="font-medium text-black dark:text-white">
                        {product.name} {/* Dynamic item name */}
                      </h5>
                      <p className="text-sm">${product.name}</p> {/* Dynamic price */}
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p className="text-black dark:text-white">
                        fd {/* Dynamic data */}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <p
                        className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium `}
                      >
                        89 {/* Dynamic status */}
                      </p>
                    </td>
                    <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                      <div className="flex items-center space-x-3.5">
                        {/* Buttons for actions */}
                        <button className="hover:text-primary">
                          {/* Eye icon for view */}
                          <svg className="fill-current" width="18" height="18" viewBox="0 0 18 18">
                            <path d="M8.99981 14.8219C3.43106 14.8219 0.674805 9.50624 0.562305 9.28124..." />
                          </svg>
                        </button>
                        <button className="hover:text-primary">
                          {/* Edit icon */}
                          <svg className="fill-current" width="18" height="18" viewBox="0 0 18 18">
                            <path d="M13.7535 2.47502H11.5879V1.9969..." />
                          </svg>
                        </button>
                        <button className="hover:text-primary">
                          {/* Download icon */}
                          <svg className="fill-current" width="18" height="18" viewBox="0 0 18 18">
                            <path d="M16.8754 11.6719C16.5379 11.6719 16.2285 11.9531..." />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableThree;
