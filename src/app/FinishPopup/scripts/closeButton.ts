function closeButtonHandler (ref: HTMLButtonElement, containerRef: HTMLDivElement): void {
  ref.addEventListener('click', () => {
    containerRef.style.display = 'none';
  });
}
export default closeButtonHandler;