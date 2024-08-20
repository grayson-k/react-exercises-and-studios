import styles from './Description.module.css';
// import React from 'react';

function RecipeAuthor() {
    let authorLink = 'https://www.allrecipes.com/recipe/235797/cannoli-dip/';
    let authorPhoto = 'https://www.allrecipes.com/thmb/oVlpbnfpHzeLZtt1if5r8wK-e2c=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/235797-Cannoli-Dip-DDMFS-Step-1-0745-93da6deabe5c47d785e3764d84eee1c4.jpg';
    let authorName = 'All Recipies';

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Recipe Link</a> 
           </div>
        </div>
    );
};

function RecipeDescription() {
    return (
        <div> 
            <div>
                <h1>Recipe Title</h1>
                <p>Short recipe description</p>
            </div>
            <RecipeAuthor />
        </div>
    )
}

export default RecipeDescription;