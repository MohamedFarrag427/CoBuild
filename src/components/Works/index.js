import axios from 'axios';
import React, { useEffect, useState , Fragment } from 'react';
import  ReactDOM  from 'react-dom';
import '../../styles/works.scss';

function Works({action3Ref}) {
    const [tab , setTab] = useState(1)
    const [imgs , setImgs] = useState([]);
    const items = [
        {id:1,name:"all"} ,
        {id:2,name:"building"} , 
        {id:3,name:"construction"} , 
        {id:4,name:"planning"}
    ];
    const [active , setActive] = useState(1);
    const [apper , setApper] = useState(false);
    const [tag , setTag] = useState('all');
    const [filter , setFilter] = useState([]);
    const [effect , setEffect] = useState(false);


    useEffect(() => {
        axios.get('/json/data.json')
        .then(res => setImgs(res.data.portfolio));
    })

    useEffect(() => {
        tag === 'all' ? setFilter(imgs) : setFilter(imgs.filter((img) => img.category === tag));
    },[imgs,tag])


    const myTabs = items.map((item) => {
        const handelTag = () => {
            setTab(item.id)
            setTag(item.name)
            setEffect(true);
        }
        return(
            <li key={item.id} onClick={handelTag} className={tab===item.id ? 'active' : 'tab'} >
                {item.name}
            </li>
        )
    })

    const myPortfolio = filter.map((img) => {
        const layOutHandel = () => {
            setActive(img.id)
            setApper(img.id)
        }

        return(
            <div className= {`${effect ? 'showing' : 'effect'} col-sm-12 col-md-6 col-lg-4 box-img`}  key={img.id}>
                <img className='img-fluid' src={img.img_source} alt = 'work-img'/>
                <div className='box-layer'>
                    <div className='layer-info'>
                        <button  className='extend' onClick={layOutHandel}></button>
                        <p>{img.img_name}</p>
                    </div>
                </div>
            </div>
        )
    })

    const layOut = imgs.map((img) => {
        return(
            <div key={img.id} className={`${active===img.id ? ' block' :'hide'} slide-img`}>
                <img src={img.img_source} alt= {`slide${img.id}`}/>
                <span>{`${img.id} of ${imgs.length}`}</span>
            </div>
        )
    });
    

    const next=() => {
        if(active < imgs.length){
            setActive(active+1)
        }else{
            setActive(1)
        }
    }
    
    const previous=() => {
        if(active > 1){
            setActive(active-1)
        }else{
            setActive(imgs.length)
        }
    }

    const closedHandel = () => {
        setApper(false)
    }

    return (
        <div className='works' id='action3' ref={action3Ref}>
            <Fragment>
                {
                    ReactDOM.createPortal(
                        <div className={apper ? 'block' : 'hide'}>
                            <div className='modal-lay' onClick={closedHandel}></div>
                            <div className='modal-content'> 
                                <button className='closed' onClick={closedHandel}>
                                    <i className="fa fa-times fa-lg"></i> 
                                </button>
                                {layOut}
                            </div>
                            <button onClick={previous} className='prev'>
                                <i className='fa fa-caret-left fa-3x'></i>
                            </button>
                            <button onClick={next} className='next'>
                                <i className='fa fa-caret-right fa-3x'></i>
                            </button>
                        </div>,
                        document.getElementById('modal')
                    )
                }
            </Fragment>
            <div className="main-title">
                <h2>Featured Work</h2>
                <p>
                    Duis aute irure dolor in reprehenderit volupte velit esse cillum fugiat pariature occaecat cupidatat proident culpa.
                </p>
            </div>
            <div className='container'>
                <ul className='work-list'>
                    {myTabs}
                </ul>
                <div className='work-box row'>
                    {myPortfolio}
                </div>
            </div>
        </div>
    )
}
export default Works;