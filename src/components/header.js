const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const headerDiv = document.createElement("div")
  const headDate = document.createElement('span')
  const headTitle = document.createElement('h1')
  const headTemp = document.createElement('span')

  headerDiv.classList.add('header')
  headDate.classList.add('date')
  headTemp.classList.add('temp')

  headDate.textContent = date
  headTitle.textContent = title
  headTemp.textContent = temp

  headerDiv.appendChild(headDate)
  headerDiv.appendChild(headTitle)
  headerDiv.appendChild(headTemp)

  return headerDiv
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //


  const headerObj =[ 
  {
    date: '1986',
    title: "Jake Sierra",
    temp: 'winter'
  },
  {
    date: '1989',
    title: "Alex Sierra",
    temp: 'summer'
  },
 {
    date: '2011',
    title: "Jasper Sierra",
    temp: 'spring'
  }
]

const container = document.createElement('div')

headerObj.forEach((obj)=>{
container.appendChild(Header(obj.date))
container.appendChild(Header(obj.title))
container.appendChild(Header(obj.temp))

  const headContainer = document.querySelector(selector)
  headContainer.appendChild(container)
})  

}

export { Header, headerAppender }
