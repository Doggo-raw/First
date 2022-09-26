import React from 'react';
import styles from './Post.module.css';

const Post = () => {
    return (
        <div>
            <div className={styles.template_container}>

            <div className={styles.post_content}>

                <p>Lovrem ipsum dolor sit amet, consectetur adipisicing elit. A ab accusamus eum, expedita facilis id laborum maiores neque nesciunt, nulla omnis porro quasi repudiandae voluptate.</p>

                <div className={styles.btn_container}>

                    <div className={styles.posts_btn}>

                        <button>Like</button>
                        <button>Dislike</button>

                    </div>

                    <button className={styles.delete_btn}>Delete</button>

                </div>
            </div>

            </div>
        </div>
    );
};

export default Post;