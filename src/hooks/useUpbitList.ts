import { useEffect, useState } from 'react';
import axios from 'axios';

interface upbitListType {
  market: string;
  korean_name: string;
  english_name: string;
}

export function useUpbitList() {
  const [upbitList, setUpbitList] = useState<upbitListType[]>([]);

  useEffect(() => {
    const getApi = async () => {
      await axios.get('https://api.upbit.com/v1/market/all').then((res) => {
        setUpbitList(
          res.data.filter((data: any) => data.market.slice(0, 3) === 'KRW')
        );
      });
    };
    getApi();
  }, []);

  return upbitList;
}
