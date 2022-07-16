import React from 'react';
import './Profile.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import perfilImg from '../../components/pageHome/img/pessoa-perfil.png';
import RatingRead from '../../components/pageProfile/Rating';

import InputsEndereco from '../../components/inputsEndereco/InputsEndereco';
import InputsMetodos from '../../components/inputsMetodos/InputsMetodos';
const Profile = () => {
    return (
        <div className="container-profile">
            <Sidebar />
            <main className="profile-content-top">
                <div className="content-top">
                    <div className="top-img">
                        <img src={perfilImg} draggable="false" alt="" />
                    </div>
                    <div className="top-dados">
                        <div className="dados-rating">
                            <RatingRead />
                        </div>
                        <div className="dados-name">
                            <h2>Claudia Ferreira da Silva </h2>
                        </div>
                    </div>
                </div>
                <div className="content-main">
                    <InputsEndereco />
                </div>
            </main>
        </div>
    );
};

export default Profile;
