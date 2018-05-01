export const paginationActionTypes = {
    NEXT_PAGE: `NEXT_PAGE`,
    PREVIOUS_PAGE: `PREVIOUS_PAGE`,
    CLEAR_PAGE: `CLEAR_PAGE`
}

function nextPage(page) {
    return {
        type: paginationActionTypes.NEXT_PAGE,
        page: page + 1
    }
}
function previousPage(page) {
    return {
        type: paginationActionTypes.PREVIOUS_PAGE,
        page: page - 1
    }
}
function clearPage() {
  return{
      type: paginationActionTypes.CLEAR_PAGE,
      page: 1
  }
}

export const paginationActionCreators = {
    nextPage,
    previousPage,
    clearPage
}
