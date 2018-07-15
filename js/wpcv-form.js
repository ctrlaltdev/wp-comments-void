function wpcv_handleSubmit(event) {
  event.preventDefault()
  console.info(event.target)

  let lastCommentEven = document.querySelector('.comment-list li:last-of-type').classList.contains('even')

  let li = document.createElement('li')
  li.classList.add('comment')

  let article = document.createElement('article')
  article.classList.add('comment-body')

  let footer = document.createElement('footer')
  footer.classList.add('comment-meta')
  let footerAuthor = document.createElement('div')
  footerAuthor.classList.add('comment-author', 'vcard')
  let footerMetaData = document.createElement('div')
  footerMetaData.classList.add('comment-metadata')
  article.appendChild(footer)

  let divContent = document.createElement('div')
  divContent.classList.add('comment-content')
  let divContentP = document.createElement('p')
  let divContentPTxt = document.createTextNode(event.target.comment.value)
  divContentP.appendChild(divContentPTxt)
  divContent.appendChild(divContentP)
  article.appendChild(divContent)

  let divReply = document.createElement('div')
  divReply.classList.add('reply')
  let aReply = document.createElement('a')
  aReply.classList.add('comment-reply-link')
  let aReplySvg = document.createElement('svg')
  aReplySvg.classList.add('icon', 'icon-mail-reply')
  aReplySvg.setAttribute('role', 'img')
  aReplySvg.setAttribute('aria-hidden', 'true')
  let aReplySvgUse = document.createElement('use')
  aReplySvgUse.setAttribute('href', '#icon-mail-reply')
  aReplySvgUse.setAttribute('xlink:href', '#icon-mail-reply')
  aReplySvg.appendChild(aReplySvgUse)
  aReply.appendChild(aReplySvg)
  let aReplyTxt = document.createTextNode('Reply')
  aReply.appendChild(aReplyTxt)
  divReply.appendChild(aReply)
  article.appendChild(divReply)

  li.appendChild(article)

  li.classList.add('depth-1')
  if (!lastCommentEven) {li.classList.add('even', 'thread-even')} else {li.classList.add('odd', 'thread-odd')}

  document.querySelector('.comment-list').appendChild(li)


}

(() => {
  let form = document.querySelector('#commentform')
  form.addEventListener('submit', wpcv_handleSubmit)
})()