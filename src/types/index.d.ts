/**
 * Loading message 모듈
 */
export class Loading111 {
  constructor(selector, options: any);

  /**
   * show loading message
   * @param {*} viewItems
   * @returns
   */
  show: () => this;
  /**
   * loading hide
   * @param {*} loading
   */
  hide(): void;

  /**
   * set loading content
   *
   * @type {(content:string)}
   */
  setContent(content: string): void;

  /**
   * loading destroy
   * @param {String,HTMLElement} html selector or element
   */
  destroy: (selector) => void;
}
