function generateBoxShadows (): string {
  const boxshadows: Array<string> = [];
  const pixels = document.querySelectorAll('.pixel');

  pixels.forEach((pixel: Element) => {
    if (pixel.getAttribute('data-color') === 'null') return;
    const x = pixel.getAttribute('data-x');
    const y = pixel.getAttribute('data-y');
    const color = pixel.getAttribute('data-color');

    boxshadows.push(`${x}px ${y}px ${color}`);
  });
  return boxshadows.join(', ');
}

function finishButtonHandler (ref: HTMLButtonElement): void {
  ref.addEventListener('click', () => {
    const popup = document.querySelector('.finish-popup');
    const popupcontent = document.querySelector('.finish-popup-content');

    popupcontent.textContent = `
      <div class="art"></div>
      
      <style>
        .art {
          width: 1px;
          height: 1px;
          transform: scale(15);
          background: transparent;
          box-shadow: ${generateBoxShadows()};
        }  
      </style>
    `;
    popup.setAttribute('style', 'display: flex;');
  });
}
export default finishButtonHandler;