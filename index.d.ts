export function CustomElementMixin<
  BaseClass extends new (...args: any[]) => any
>(
  Base: BaseClass
): new (
  ...args: ConstructorParameters<BaseClass>
) => InstanceType<BaseClass> & {
  enhanced: boolean;
  hasSlots: boolean;

  expandSlots(str: string, templateString: string): string;
  expandTemplate(): void;
  getRuleType(rule: { constructor: string }): string;
  parseCSS(styleContent: string): CSSStyleSheet | null;
  removeScriptTags(el: HTMLElement): void;
  removeStyleTags(el: HTMLElement): void;
  scrubTemplate(el: HTMLElement): HTMLElement;
  styleTransform({
    tag,
    tagName,
    scope,
  }: {
    tag: string;
    tagName: string;
    scope: string;
  }): CSSStyleSheet;
  toKebabCase(str: string): string;
  transform(input: string): string;
};
