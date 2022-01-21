function resetButtonHandler (ref: HTMLButtonElement): void {
  ref.addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel');
    
    pixels.forEach((pixel: Element) => {
      pixel.setAttribute('style', 'background-color: #30303099;');
      pixel.setAttribute('data-color', null);
    });
  });
}
export default resetButtonHandler;