export const createPagesHelper = (
    numberOfPages,
    currentPage,
    showPages,
) => {
    let pages;
    if (numberOfPages < showPages) {
      pages = [];
      for (let i = 0; i < numberOfPages; i++) {
        pages.push(i);
      }
    } else {
      pages = [currentPage];
      while (pages.length < showPages) {
        if (pages[0] > 0) {
          pages.unshift(pages[0] - 1);
        }
        if (pages[pages.length - 1] < numberOfPages - 1 && pages.length < showPages) {
          pages.push(pages[pages.length - 1] + 1);
        }
      }
      return pages;
    }
}