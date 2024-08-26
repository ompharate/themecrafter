import React from 'react';
import ChatCard from '../../components/Chat/ChatCard';
import CardDataStatsGroup from '../../components/CardDataStatsGroup';
import TableThree from '../../components/Tables/TableThree';

const ECommerce: React.FC = () => {
  return (
    <>
      <CardDataStatsGroup />
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-8">
          <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
            <h3 className="font-bold text-black text-2xl dark:text-white">
              Recent orders 
            </h3>
          </div>
          <TableThree />
        </div>
        <ChatCard />
      </div>
    </>
  );
};

export default ECommerce;
