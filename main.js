// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!


function addErrorClass () {
  const errorDiv = document.querySelector('div#modal')
  errorDiv.setAttribute('class', 'hidden')
}

addErrorClass()

function removeErrorClass () {
  const errorDiv = document.querySelector('div#modal')
  const newText = "Random server error. Try again."
  errorDiv.classList.remove('hidden')
  errorDiv.textContent = newText
  setTimeout(addErrorClass,3000)
  
}


function heartClick () {
  const heartPositions = document.querySelectorAll('span.like-glyph')
  
  heartPositions.forEach(() => {
    addEventListener('click', (e)=>{
      mimicServerCall(e)
      .catch((resp)=>{
        if (resp==="Random server error. Try again.") {
          heartReject(resp)
        }
        else if (resp==="Pretend remote server notified of action!") {
          e.target.textContent = FULL_HEART
          e.target.setAttribute('class', 'activate-heart')
        }

      })
    })
  })

}

heartClick()


function heartReject (res){removeErrorClass()}

function toFullHeart () {
  
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < 1
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}





