import React, {useState} from 'react';
import opening from '../../components/modal/modalOpeningBtn/ModalOpeningBtn.module.css';
import styles from './Posts.module.css';
import Post from "../../components/post/Post";
import Modal from "../../components/modal/Modal";
import Publisher from "../../components/post/publisher/Publisher";
import Slider from "../../components/slider/Slider";

const Posts = () => {

    const [modalActive, setModalActive] = useState(false);


    // @ts-ignore
    return (
        <div className={styles.Posts_body}>
            <div className={styles.position}>

                 <div className={styles.menu}>
                     <input type="password"/>
                     <input type="text"/>
                     <input type="reset"/>
                     <button className={opening.open} onClick={() => setModalActive(true)}>Create post</button>
                 </div>

                <Slider/>

                <Modal active={modalActive} setActive={setModalActive}>
                    <Publisher/>
                </Modal>

                <Post />
            </div>
        </div>
    );
};

export default Posts;