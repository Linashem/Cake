import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import style from './PageWrapper.module.scss';

export const Pagewrapper = () => {
  return (
    <div className={style.page_wrapper}>
      <Header />
      <main className={style.content}>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};
