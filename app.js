function paperRequirements(book1,book2,book3){

    let paperbook1 = 100;
    let paperbook2 = 200;
    let paperbook3 = 300;

    let firstBookPages = paperbook1 *book1;
    let secondBookPages= paperbook2 *book2;
    let thirdBookPages= paperbook3 *book3;

    const totalBookPages = firstBookPages + secondBookPages + thirdBookPages;

    return totalBookPages;
    


}

let firstBook = 3;
let secondBook = 2;
let thirdBook = 4;

const totalPages = paperRequirements(firstBook,secondBook,thirdBook)
console.log(totalPages);