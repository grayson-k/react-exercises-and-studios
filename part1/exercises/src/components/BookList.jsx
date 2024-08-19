export default function BookList() {
   let pageTitle = "Book List";
   let book1 = "https://keledicionesb2c.vtexassets.com/arquivos/ids/253048/9780061956270.jpg?v=638035125112600000";
   let book2 = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg2.imagesbn.com%2Fp%2F9780061161391_p0_v1_s260x420.jpg&f=1&nofb=1&ipt=34c3f4117010a3ba19bddf39cbb626e8b7fd23e6ecc963f84f6f317524b4c463&ipo=images";
   let book3 = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F62%2F31%2Fa0%2F6231a049c39dd21ea7f571a706aa74f8.jpg&f=1&nofb=1&ipt=58a99a09a49506e6fe0a15855da9fe8c0cd6d864806e9ca1e291f9f902302837&ipo=images";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Freakonomics: A Rogue Economist Explores the Hidden Side of Everything by Steven D. Levitt and Stephen J. Dubner (2005)" />
         <img src={book2} alt="Fast Food Nation: The Dark Side of the All-American Meal by Eric Schlosser (2001)" />
         <img src={book3} alt="Into Thin Air: A Personal Account of the Mt. Everest Disaster by Jon Krakauer (1997)" />
      </div>      
   );
}