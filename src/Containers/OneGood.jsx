import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchOneGoods } from '../asyncActions/goods';
import { OneGoodContent } from '../Components/OneGoodContent/OneGoodContent';

export const OneGood = () => {
    const { goodId } = useParams();
    console.log(goodId);
    const dispatch = useDispatch();
    const goodData = useSelector((state)=>state.goods.oneGood);
    useEffect(() => {
      if (goodId) {
        dispatch(fetchOneGoods(goodId));
      }
      console.log(goodData);
    }, [goodId]);
  return (
    <OneGoodContent  goodData={goodData} />
  )
}
