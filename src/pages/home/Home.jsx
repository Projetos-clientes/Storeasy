import Form from '../../components/form/Form';
import Item from '../../components/pageHome/itens/Item';
import MyItens from '../../components/pageHome/myItens/MyItens';
import NavBar from '../../components/navbar/NavBar';

import './Home.css';
import './Animation.css';
import './App.scss';

let Home = () => {
    return (
        <div className="App">
            <NavBar
                logo={true}
                menu={true}
                acesse={true}
                tornese={true}
                mensagem={true}
                noti={true}
                sair={true}
                perfil={true} />

            <div className="containerApp">
                <Form />
                <Item />
                <h1
                    className="text"
                    style={{
                        fontSize: '1.4em',
                    }}
                >
                    Reserve já um lar para seus pertences!
                </h1>
                <MyItens />
            </div>
        </div>
    );
};

export default Home;
