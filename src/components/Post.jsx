import { Gif } from '@giphy/react-components'
import React from 'react'
import styles from './Post.module.css'
import profilePic from './../../assets/images/mypic.jpeg'
import PostComposer from './PostComposer'





const Post = (props) => {
	return (
		



		<div className={styles.post}>
			<div className={styles.heading}>
				<img src={profilePic} alt="profile" className={styles.profileImage} width='60' height='60' />
				<div className={styles.profileName}>
					You
        </div>
			</div>
			<div className={styles.msg}>
				<p>
					{
						props.msg
					}
				</p>
			</div>
			
			<div className={styles.gifContainer}>
				{
					props.gifs.map((gif, index) => <Gif key={index} gif={gif} width={220} noLink hideAttribution />)
				}
								
			</div>
			
			
		</div>
	)
}

export default Post
