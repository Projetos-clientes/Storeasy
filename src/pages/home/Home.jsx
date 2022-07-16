import Form from '../../components/form/Form';
import Item from '../../components/pageHome/itens/Item';
import MyItens from '../../components/pageHome/myItens/MyItens';
import Sidebar from '../../components/sidebar/Sidebar';
import './Home.css';
import './Animation.css';
import './App.scss';

let Home = () => {
    return (
        <div className="App">
            
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
                <br />
                <br />
                <MyItens />
            </div>
        </div>
    );
};

export default Home;
