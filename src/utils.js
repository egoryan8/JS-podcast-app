export function isValid(value) {
  return value.length >= 10;
}

export function createModal(title, content) {
  const modal = document.createElement('div');
  modal.classList.add('modal');

  const html = `
    <h1>${title}</h1>
    <div class="modal-content">${content}</div>
  `;
  modal.innerHTML = html;

  mui.overlay('on', modal);
}
