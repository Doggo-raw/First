import React, {useState} from 'react';
import styles from './Timer.module.css';
import Modal from '../modal/Modal';
import opening from '../modal/modalOpeningBtn/ModalOpeningBtn.module.css';




const Timer = () => {
    const [modalActive, setModalActive] = useState(false);

    return (
        <div className={styles.timer_body}>

            <div className={styles.timer_container}>
                <h2 className={styles.time}>Time</h2>

                <input className={styles.timer_input} type="text"/>

                <div className={styles.timer_btn_container}>
                    <button className={styles.timer_btn}>Start</button>
                    <button className={styles.timer_btn}>End</button>
                </div>

                <div>
                    <button className={opening.open} onClick={() => setModalActive(true)}>Click to open</button>
                </div>

            </div>

            <Modal active={modalActive} setActive={setModalActive}>

                <div className={styles.modal_content_text}>
                    <h2>Когда нибудь оно заработает</h2>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis eveniet fuga, illo illum labore
                    laboriosam, magni nulla pariatur perferendis porro praesentium quasi recusandae repellat similique
                    voluptatibus. Ex laborum libero nemo.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id laborum non numquam suscipit. Autem,
                    consectetur distinctio eos esse explicabo, incidunt iure nihil quas quibusdam, sed tenetur unde vel
                    veritatis voluptates.

                    Deleniti dignissimos in, ipsa ipsum molestias mollitia voluptatum? Aliquid architecto culpa
                    exercitationem, illo laboriosam libero reprehenderit sequi tempora. Nisi porro quia reiciendis sint?
                    Delectus dolore doloremque doloribus id ipsum itaque.
                </div>

            </Modal>

        </div>
    );
};

export default Timer;