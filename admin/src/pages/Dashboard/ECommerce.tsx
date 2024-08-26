import React, { useEffect } from 'react';
import CardDataStats from '../../components/CardDataStats';
import ChatCard from '../../components/Chat/ChatCard';
import TableOne from '../../components/Tables/TableOne';
import CardDataStatsGroup from '../../components/CardDataStatsGroup';

const ECommerce: React.FC = () => {
 
  return (
    <>
      <CardDataStatsGroup/>
      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        {/* <ChartOne /> */}
        {/* <ChartTwo /> */}
        {/* <ChartThree /> */}
        {/* <MapOne /> */}
        <div className="col-span-12 xl:col-span-8">
          {/* <TableOne /> */}
        </div>
        <ChatCard />
      </div>
    </>
  );
};

export default ECommerce;
