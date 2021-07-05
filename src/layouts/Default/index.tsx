import React from 'react';
import Logo from '../../assets/img/logo.png';
import {Link} from 'react-router-dom';
import './styles.scss';
import Footer from "../../components/Footer";

interface IProps {
  children: React.ReactNode;
}

const DefaultLayout = (props: IProps) => {
  return (
    <div id={"container"}>
      <div className={'d-flex justify-content-center navbar py-4'}>
          <Link className={"title d-flex align-items-center text-white"} to="/">
            <img height={"30px"} src={Logo} alt={""}/>
            <span>CLOWNS</span>
          </Link>
      </div>
      {props.children}
      <Footer/>
    </div>
  );
};

export default DefaultLayout;
